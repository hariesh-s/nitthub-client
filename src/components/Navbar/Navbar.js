import { Stack } from "@mui/material";
import { Link, useLocation } from "react-router-dom";

import NavbarSearch from "./NavbarSearch";
import NavbarDefault from "./NavbarDefault";
import NavbarLoggedIn from "./NavbarLoggedIn";
import UploadDownloadBar from "../UploadDownloadBar";
import useLoginStatus from "../../hooks/useLoginStatus";

function Navbar({ isLoggedIn }) {
   const { pathname } = useLocation();
   // const isLoggedIn = useLoginStatus();

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

         {(pathname === "/user/uploads" || pathname === "/user/downloads") && (
            <UploadDownloadBar />
         )}

         {isLoggedIn && <NavbarLoggedIn />}

         {!isLoggedIn && <NavbarDefault />}
      </Stack>
   );
}

export default Navbar;
