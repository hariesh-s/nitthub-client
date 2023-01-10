import { Link } from "react-router-dom";
import { Box, Stack } from "@mui/material";

function NavbarDefault() {
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

         <Link to="/register" style={{ textDecoration: "none", color: "#fff" }}>
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
   );
}

export default NavbarDefault;
