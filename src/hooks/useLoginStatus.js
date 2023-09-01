import jwtDecode from "jwt-decode";
import useAuthContext from "./useAuthContext";
import { useEffect } from "react";
import { api } from "../api/axios";
import { useNavigate } from "react-router-dom";

function useLoginStatus() {
   const { auth, dispatchAuth } = useAuthContext();
   const navigate = useNavigate();
   // function checkLoginStatus() {
   //    if (
   //       auth?.accessToken 
   //       // && Math.round(new Date().getTime() / 1000) <
   //       //    jwtDecode(auth.accessToken).exp // checking expiry
   //    ) {
   //       return true;
   //    } else return false;
   // }
   useEffect(() => {
      async function refreshAccessToken() {
         try {
            const response = await api.get("/api/refresh-token")
            console.log("useloginstatus response ", response)
            dispatchAuth({
               type: "LOGIN",
               payload: response.data.access_token,
            });
         } catch(error) {
            console.error(error)
            navigate("/login")
         }
      }
      console.log("login status use effect")
      refreshAccessToken();
   }, [dispatchAuth, navigate])

   
   const isloggedIn = auth.accessToken === "" ? false : true;
   console.log("login status component ", isloggedIn)

   return isloggedIn;
}

export default useLoginStatus;
