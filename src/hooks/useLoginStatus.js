import jwtDecode from "jwt-decode";
import useAuthContext from "./useAuthContext";

function useLoginStatus() {
   const { auth } = useAuthContext();

   function checkLoginStatus() {
      if (
         auth?.accessToken 
         // && Math.round(new Date().getTime() / 1000) <
         //    jwtDecode(auth.accessToken).exp // checking expiry
      ) {
         return true;
      } else return false;
   }

   const isloggedIn = checkLoginStatus();

   return isloggedIn;
}

export default useLoginStatus;
