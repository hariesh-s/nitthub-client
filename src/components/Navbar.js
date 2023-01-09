import { Box, Stack } from "@mui/material";
import { Link, useLocation } from "react-router-dom";
import NavbarSearch from "./NavbarSearch";

function Navbar() {
   const { pathname } = useLocation();

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
            <Link to="/login" style={{ textDecoration: "none", color: "#fff" }}>
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
      </Stack>
   );
}

export default Navbar;
