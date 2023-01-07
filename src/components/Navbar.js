import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "framer-motion";
import { Box, Stack, TextField, InputAdornment } from "@mui/material";
import { Link, useLocation } from "react-router-dom";
import { useState } from "react";

function Navbar() {
   const [query, setQuery] = useState("");
   const { pathname } = useLocation();

   function updateQuery(e) {
      setQuery(e.target.value);
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
         {pathname === "/search-library" && (
            <TextField
               variant="outlined"
               id="searchQuery"
               name="searchQuery"
               placeholder="I'm looking for ..."
               autoFocus
               autoComplete="off"
               value={query}
               FormHelperTextProps={{
                  sx: {
                     color: "#fff",
                     fontSize: "10px",
                     fontFamily: "Raleway",
                  },
               }}
               component={motion.div}
               initial={{ y: "50vh", scale: 1.5 }}
               animate={{ y: 0, scale: 1 }}
               InputProps={{
                  startAdornment: (
                     <InputAdornment position="start">
                        <FontAwesomeIcon icon={faSearch} />
                     </InputAdornment>
                  ),
               }}
               sx={{
                  display: "flex",
                  width: "50%",
                  "& .MuiOutlinedInput-root": {
                     background: "#fff",
                     fontSize: 16,
                  },
                  "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":
                     {
                        borderColor: "#ee6c4d",
                     },
                  "& .MuiInputBase-input": {
                     paddingY: 1.5,
                  },
               }}
               onChange={updateQuery}
            ></TextField>
         )}
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
