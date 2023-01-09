import { useContext } from "react";
import { AuthContext } from "../contexts/authContext";

function useAuthContext() {
   const context = useContext(AuthContext);

   if (!context)
      throw Error("AuthContext can be used only inside AuthContextProvider!");

   return context;
}

export default useAuthContext;
