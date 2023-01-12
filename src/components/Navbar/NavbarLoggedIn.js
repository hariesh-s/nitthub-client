import { useState } from "react";
import jwtDecode from "jwt-decode";
import { Stack, Menu, MenuItem, Button } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { faUpload, faCaretDown } from "@fortawesome/free-solid-svg-icons";

import { api } from "../../api/axios";
import UploadModal from "../UploadModal";
import useAuthContext from "../../hooks/useAuthContext";

function NavbarLoggedIn() {
   const { pathname } = useLocation();
   const navigate = useNavigate();

   const { auth, dispatchAuth } = useAuthContext();

   const [isUploadModalOpen, setUploadModalOpen] = useState(false);
   const [anchorElement, setAnchorElement] = useState(null);
   const open = Boolean(anchorElement);

   const openOptions = (e) => setAnchorElement(e.currentTarget);
   const closeOptions = () => setAnchorElement(null);

   async function logout() {
      closeOptions();
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
         ml={4.5}
         mr={4.5}
         gap={3.5}
         sx={{
            fontFamily: "Raleway",
            fontSize: 16,
         }}
      >
         {(pathname === "/user/uploads" || pathname === "/user/downloads") && (
            <>
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
                  onClick={() => setUploadModalOpen(true)}
               >
                  Upload files
               </Button>
               <UploadModal
                  isUploadModalOpen={isUploadModalOpen}
                  setUploadModalOpen={setUploadModalOpen}
               />
            </>
         )}

         <Button
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
            onClick={openOptions}
         >
            {jwtDecode(auth.accessToken).username}
         </Button>
         <Menu
            anchorEl={anchorElement}
            open={open}
            onClose={closeOptions}
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
                  background: "#ee6c4d",
                  color: "#fff",
               },
               "& .MuiList-root": {
                  padding: "0px",
                  borderRadius: "0px",
               },
            }}
         >
            <MenuItem onClick={closeOptions}>
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
            <MenuItem onClick={closeOptions}>
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
   );
}

export default NavbarLoggedIn;
