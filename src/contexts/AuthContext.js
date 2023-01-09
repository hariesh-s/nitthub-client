import { createContext, useReducer } from "react";
import authReducer from "../reducers/authReducer";

export const AuthContext = createContext();

export default function AuthContextProvider({ children }) {
   const [auth, dispatchAuth] = useReducer(authReducer, { status: false });

   return (
      <AuthContext.Provider value={{ ...auth, dispatchAuth }}>
         {children}
      </AuthContext.Provider>
   );
}
