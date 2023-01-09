import { useEffect } from "react";
import { api, authApi } from "../api/axios";
import useAuthContext from "./useAuthContext";

function useJWT() {
   const { auth, dispatchAuth } = useAuthContext();

   useEffect(() => {
      const requestIntercept = authApi.interceptors.request.use(
         (config) => {
            if (!config.headers["Authorization"] && auth?.accessToken)
               config.headers["Authorization"] = `Bearer ${auth.accessToken}`;

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
                  const res = await api.get("/api/refreshToken", {
                     withCredentials: true,
                  });
                  const { accessToken } = dispatchAuth({
                     type: "LOGIN",
                     payload: res.data.access_token,
                  });
                  prevReq.headers["Authorization"] = `Bearer ${accessToken}`;
                  return authApi(prevReq);
               } catch (error) {
                  if (error.response) {
                     console.log(error.response.data);
                     console.log(error.response.status);
                     console.log(error.response.headers);
                  } else if (error.request) {
                     console.log(error.request);
                  } else {
                     console.log("Error", error.message);
                  }
                  console.log(error.config);
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
