import { useEffect } from "react";
import { api, authApi } from "../api/axios";
import useAuthContext from "./useAuthContext";

function useJWT() {
   const { auth, dispatchAuth } = useAuthContext();

   useEffect(() => {
      const requestIntercept = authApi.interceptors.request.use(
         (config) => {
            if (!config.headers["authorization"] && auth?.accessToken)
               config.headers["authorization"] = `Bearer ${auth.accessToken}`;

            return config;
         },
         (error) => Promise.reject(error)
      );

      const responseIntercept = authApi.interceptors.response.use(
         (response) => response,
         async (error) => {
            let prevReq = error?.config;
            if (error?.response?.status === 403 && !prevReq?.sent) {
               prevReq.sent = true;

               // refreshing the access token
               try {
                  const res = await api.get("/api/refresh-token");
                  dispatchAuth({
                     type: "LOGIN",
                     payload: res.data.access_token,
                  });
                  prevReq.headers["authorization"] = `Bearer ${res.data.access_token}`;
                  const retryReq = await authApi(prevReq);
                  return retryReq;
               } catch (error) {
                  console.error(error)
               }
            }
            return Promise.reject(error);
         }
      );

      return () => {
         authApi.interceptors.request.eject(requestIntercept);
         authApi.interceptors.response.eject(responseIntercept);
      };
   }, [auth.accessToken, dispatchAuth]);

   return authApi;
}

export default useJWT;
