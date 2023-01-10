import { Box, Stack } from "@mui/material";
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { api } from "../api/axios";
import useAuthContext from "../hooks/useAuthContext";
import useJWT from "../hooks/useJWT";
import useLoginStatus from "../hooks/useLoginStatus";
import NavbarSearch from "./NavbarSearch";

function Navbar() {
   const { pathname } = useLocation();
   const isLoggedIn = useLoginStatus();
   const { dispatchAuth } = useAuthContext();

   async function logout() {
      try {
         const response = await api.delete("/api/authenticate");
         console.log(response);
         dispatchAuth({ type: "LOGOUT" });
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

   return (
      <Stack
         direction="row"
         alignItems="center"
         justifyContent="space-between"
         height={96}
         bgcolor="#00171f"
      >
         <Link
            to="/"
            style={{
               textDecoration: "none",
               marginLeft: 36,
               marginRight: 36,
               fontSize: 36,
               fontFamily: "Pacifico, cursive",
               color: "#ee6c4d",
            }}
         >
            nitthub
         </Link>

         {pathname !== "/" && <NavbarSearch />}

         {isLoggedIn && (
            <Stack
               direction="row"
               ml={4.5}
               mr={4.5}
               gap={3.5}
               sx={{
                  fontFamily: "Raleway",
                  fontSize: 16,
               }}
            >
               <Link
                  to="/user/uploads"
                  style={{ textDecoration: "none", color: "#fff" }}
               >
                  <Box
                     sx={{
                        "&:hover": {
                           color: "#ee6c4d",
                        },
                     }}
                  >
                     PROFILE
                  </Box>
               </Link>

               <Link
                  to="/"
                  style={{ textDecoration: "none", color: "#fff" }}
                  onClick={logout}
               >
                  <Box
                     sx={{
                        "&:hover": {
                           color: "#ee6c4d",
                        },
                     }}
                  >
                     LOGOUT
                  </Box>
               </Link>
            </Stack>
         )}

         {!isLoggedIn && (
            <Stack
               direction="row"
               ml={4.5}
               mr={4.5}
               gap={3.5}
               sx={{
                  fontFamily: "Raleway",
                  fontSize: 16,
               }}
            >
               <Link
                  to="/login"
                  style={{ textDecoration: "none", color: "#fff" }}
               >
                  <Box
                     sx={{
                        "&:hover": {
                           color: "#ee6c4d",
                        },
                     }}
                  >
                     LOGIN
                  </Box>
               </Link>

               <Link
                  to="/register"
                  style={{ textDecoration: "none", color: "#fff" }}
               >
                  <Box
                     sx={{
                        "&:hover": {
                           color: "#ee6c4d",
                        },
                     }}
                  >
                     REGISTER
                  </Box>
               </Link>
            </Stack>
         )}
      </Stack>
   );
}

export default Navbar;
