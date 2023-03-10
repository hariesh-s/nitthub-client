import { Navigate, Outlet, useLocation } from "react-router-dom";
import jwtDecode from "jwt-decode";
import useAuthContext from "../hooks/useAuthContext";
import useLoginStatus from "../hooks/useLoginStatus";

function ProtectedRoutes() {
   const { auth } = useAuthContext();
   const isLoggedIn = useLoginStatus();
   
   const location = useLocation();

   if (isLoggedIn) {
      console.log(Math.round(new Date().getTime() / 1000));
      console.log(jwtDecode(auth.accessToken).exp);
      return <Outlet />;
   } else
      return <Navigate to="/login" state={{ from: location }} replace={true} />;
}

export default ProtectedRoutes;
