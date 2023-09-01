import { createContext, useEffect, useReducer } from "react";

import { api } from "../api/axios";
import authReducer from "../reducers/authReducer";

export const AuthContext = createContext();

export default function AuthContextProvider({ children }) {
   // contexts are lost when window is refreshed/reloaded,
   // so to retain login status we need to contact the server
   // on mount, hence while using jwt, the user stays logged 
   // in by refreshing the access token using refresh token
   // useEffect(() => {
   //    async function refreshAccessToken() {
   //       try {
   //          const response = await api.get("/api/refresh-token")
   //          dispatchAuth({
   //             type: "LOGIN",
   //             payload: response.data.access_token,
   //          });
   //       } catch(error) {
   //          console.error(error)
   //       }
   //    }
   //    console.log("auth ctx use effect called")
   //    refreshAccessToken();
   // }, [])

   const [auth, dispatchAuth] = useReducer(authReducer, { accessToken: "" });
   // console.log("auth ctxt ", auth)
   return (
      <AuthContext.Provider value={{ auth, dispatchAuth }}>
         {children}
      </AuthContext.Provider>
   );
}
