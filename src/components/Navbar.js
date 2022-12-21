import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { InputAdornment, Stack, TextField } from "@mui/material";
import { Link } from "react-router-dom";

function Navbar() {
   return (
      <Stack
         direction="row"
         alignItems="center"
         justifyContent="space-between"
         height={64}
         bgcolor="#0F1626"
      >
         <Link
            to="/"
            style={{
               textDecoration: "none",
               marginLeft: 24,
               fontSize: 26,
               fontFamily: "Unbounded",
               color: "#D98310",
            }}
         >
            nitthub
         </Link>
         <TextField
            id="searchText"
            variant="outlined"
            placeholder="I'm looking for ..."
            InputProps={{
               startAdornment: (
                  <InputAdornment position="start">
                     <FontAwesomeIcon icon={faSearch} />
                  </InputAdornment>
               ),
            }}
            sx={{
               input: {
                  color: "#000",
                  padding: 1.5,
                  fontFamily: "Poppins",
                  fontSize: 16,
               },
               "& .MuiOutlinedInput-root": {
                  background: "#fff",
                  minWidth: 700,
               },
            }}
         ></TextField>
         <Stack
            direction="row"
            mr={3}
            gap={2}
            sx={{
               fontFamily: "Poppins",
               fontSize: 16,
               fontWeight: 500,
            }}
         >
            <Link to="/login" style={{ textDecoration: "none", color: "#fff" }}>
               Login
            </Link>
            <Link
               to="/register"
               style={{ textDecoration: "none", color: "#fff" }}
            >
               Register
            </Link>
         </Stack>
      </Stack>
   );
}

export default Navbar;
