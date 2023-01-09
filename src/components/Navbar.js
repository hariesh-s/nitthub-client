import { Box, Stack } from "@mui/material";
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import useJWT from "../hooks/useJWT";
import NavbarSearch from "./NavbarSearch";

function Navbar() {
   const { pathname } = useLocation();

   const [loginStatus, setLoginStatus] = useState(false);

   const authApi = useJWT();

   useEffect(() => {
      async function isLoggedIn() {
         try {
            const response = await authApi.get("/api/authenticate");
            console.log(response)
            if (response?.status === 200) {
               console.log("in")
               setLoginStatus(true);
            }
            console.log("out")
         } catch (error) {
            if (error?.response) {
               // The request was made and the server responded with a status code
               // that falls out of the range of 2xx
               console.log("res ", error.response)
               setLoginStatus(false);
            } else if (error.request) {
               // The request was made but no response was received
               // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
               // http.ClientRequest in node.js
               console.log("req ", error.request);
             } else {
               // Something happened in setting up the request that triggered an Error
               console.log('Error', error.message);
             }
            console.log(error?.config);
         }
      }
      isLoggedIn();
   }, [authApi]);

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

         {loginStatus && (
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
                  to="/logout"
                  style={{ textDecoration: "none", color: "#fff" }}
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

         {!loginStatus && (
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
