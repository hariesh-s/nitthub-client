import { Navigate, Outlet, useLocation } from "react-router-dom";
import useAuthContext from "../hooks/useAuthContext";

function ProtectedRoutes() {
   const { auth } = useAuthContext();
   const location = useLocation();

   if (auth?.accessToken) {
      console.log("signed in")
      return <Outlet />;
   }
   else
      return <Navigate to="/login" state={{ from: location }} replace={true} />;
}

export default ProtectedRoutes;
