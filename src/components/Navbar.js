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
         height={96}
         // bgcolor="#293241"
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
               },
               display: "flex",
               width: "55%",
            }}
         ></TextField>
         <Stack
            direction="row"
            ml={4.5}
            mr={4.5}
            gap={3.5}
            sx={{
               fontFamily: "Poppins",
               fontSize: 16,
            }}
         >
            <Link to="/login" style={{ textDecoration: "none", color: "#fff" }}>
               LOGIN
            </Link>
            <Link
               to="/register"
               style={{ textDecoration: "none", color: "#fff" }}
            >
               REGISTER
            </Link>
         </Stack>
      </Stack>
   );
}

export default Navbar;
