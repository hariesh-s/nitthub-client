import { Box, Stack, Menu, MenuItem, Button } from "@mui/material";
import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { api } from "../api/axios";
import useAuthContext from "../hooks/useAuthContext";
import useJWT from "../hooks/useJWT";
import useLoginStatus from "../hooks/useLoginStatus";
import NavbarSearch from "./NavbarSearch";
import jwtDecode from "jwt-decode";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUpload, faCaretDown } from "@fortawesome/free-solid-svg-icons";
import UploadDownloadBar from "./UploadDownloadBar";

function Navbar() {
   const { pathname } = useLocation();
   const navigate = useNavigate();
   const isLoggedIn = useLoginStatus();
   const { auth, dispatchAuth } = useAuthContext();
   const [anchorEl, setAnchorEl] = useState(null);
   const open = Boolean(anchorEl);
   const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
   };
   const handleClose = () => {
      setAnchorEl(null);
   };

   async function logout() {
      setAnchorEl(null);
      try {
         const response = await api.delete("/api/authenticate");
         console.log(response);
         dispatchAuth({ type: "LOGOUT" });
         navigate("/");
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
         bgcolor="#00171f"
         pt={2}
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

         {pathname !== "/" &&
            pathname !== "/user/uploads" &&
            pathname !== "/user/downloads" && <NavbarSearch />}

         {
            (pathname === "/user/uploads" ||
            pathname === "/user/downloads") && <UploadDownloadBar />}

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
               {(pathname === "/user/uploads" ||
                  pathname === "/user/downloads") && (
                  <Button
                     variant="contained"
                     endIcon={
                        <FontAwesomeIcon icon={faUpload} transform="shrink-3" />
                     }
                     disableElevation
                     size="medium"
                     sx={{
                        background: "transparent",
                        color: "#ee6c4d",
                        border: "1px solid #ee6c4d",
                        fontFamily: "Pacifico",
                        fontSize: "20px",
                        textTransform: "none",
                        "&:hover": {
                           background: "#ee6c4d",
                           color: "#fff",
                           border: "none",
                        },
                        alignSelf: "center",
                     }}
                  >
                     Upload files
                  </Button>
               )}
               <Button
                  id="basic-button"
                  variant="contained"
                  endIcon={
                     <FontAwesomeIcon icon={faCaretDown} transform="shrink-3" />
                  }
                  disableElevation
                  size="medium"
                  sx={{
                     background: "transparent",
                     color: "#ee6c4d",
                     border: "1px solid #ee6c4d",
                     fontFamily: "Pacifico",
                     fontSize: "20px",
                     textTransform: "none",
                     "&:hover": {
                        background: "#ee6c4d",
                        color: "#fff",
                        border: "none",
                     },
                     alignSelf: "center",
                  }}
                  onClick={handleClick}
               >
                  {jwtDecode(auth.accessToken).username}
               </Button>
               <Menu
                  id="basic-menu"
                  anchorEl={anchorEl}
                  open={open}
                  onClose={handleClose}
                  sx={{
                     fontFamily: "Pacifico",
                     fontSize: "16px",
                     marginTop: "8px",
                     textDecoration: "none",
                     "& .MuiButtonBase-root": {
                        background: "#fff",
                        color: "#00171f",
                        paddingX: "16px",
                        paddingY: "12px",
                     },
                     "& .MuiButtonBase-root:hover": {
                        // background: "#00171f",
                        background: "#ee6c4d",
                        color: "#fff",
                     },
                     "& .MuiList-root": {
                        padding: "0px",
                        borderRadius: "0px",
                     },
                  }}
               >
                  <MenuItem onClick={handleClose}>
                     <Link
                        to="/user/uploads"
                        style={{
                           textDecoration: "none",
                           color: "inherit",
                           fontFamily: "Pacifico",
                           fontSize: "16px",
                        }}
                     >
                        Profile
                     </Link>
                  </MenuItem>
                  <MenuItem onClick={handleClose}>
                     <Link
                        to="/search-library"
                        style={{
                           textDecoration: "none",
                           color: "inherit",
                           fontFamily: "Pacifico",
                           fontSize: "16px",
                        }}
                     >
                        Search library
                     </Link>
                  </MenuItem>
                  <MenuItem
                     onClick={logout}
                     style={{
                        fontFamily: "Pacifico",
                        fontSize: "16px",
                     }}
                  >
                     Logout
                  </MenuItem>
               </Menu>
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
