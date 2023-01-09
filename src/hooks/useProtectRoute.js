import jwtDecode from "jwt-decode";
import useAuthContext from "./useAuthContext";

function useProtectRoute() {
   const { auth } = useAuthContext();

   function isLoggedIn() {
      if (
         auth?.accessToken &&
         Math.round(new Date().getTime() / 1000) <
            jwtDecode(auth.accessToken).exp // checking expiry
      ) {
         return true;
      } else return false;
   }

   return isLoggedIn;
}

export default useProtectRoute;
