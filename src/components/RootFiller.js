import { motion } from "framer-motion";
import Typewriter from "typewriter-effect";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Box, Button, TextField, InputAdornment } from "@mui/material";
import FiltersModal from "./FiltersModal";
import useSearchParamContext from "../hooks/useSearchParamContext";

function RootFiller() {
   const [isFiltersOpen, setFiltersOpen] = useState(false);
   const [query, setQuery] = useState("");

   const { dispatchSearchParam } = useSearchParamContext();
   const navigate = useNavigate();

   useEffect(() => {
      function search(e) {
         // if user hit enter while focussed on search bar in root filler component
         // query cannot be empty to prevent unnecessary reqs
         if (e.keyCode === 13 && e.target.id === "rootSearchQuery" && query) {
            dispatchSearchParam({
               type: "SIMPLE_SEARCH",
               payload: { query, course: "", prof: "" },
            });
            navigate("/search-library");
         }
      }

      window.addEventListener("keyup", search);

      return () => window.removeEventListener("keyup", search);
   }, [query, dispatchSearchParam, navigate]);

   return (
      <Box
         component="main"
         sx={{
            background: "#00171f",
            position: "absolute",
            top: "0px",
            left: "0px",
            zIndex: "-1",
            width: "100vw",
            height: "65vh", // paddingTop is 35vh
            paddingTop: "35vh",
            fontFamily: "Raleway",
            fontSize: { xs: 48, sm: 64 },
            color: "white",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "32px",
         }}
      >
         <Typewriter
            options={{
               strings: [
                  "literally anything !",
                  "notes",
                  "PYQs",
                  "e-books",
                  "pdfs",
               ],
               delay: 40,
               deleteSpeed: 40,
               loop: true,
               autoStart: true,
               pauseFor: 600,
            }}
         />
         <TextField
            variant="outlined"
            id="rootSearchQuery"
            name="rootSearchQuery"
            placeholder="I'm looking for ..."
            autoFocus
            autoComplete="off"
            value={query}
            helperText="Hit enter to search *"
            FormHelperTextProps={{
               sx: {
                  color: "#fff",
                  fontSize: "10px",
                  fontFamily: "Raleway",
               },
            }}
            component={motion.div}
            initial={{ y: "-50vh" }}
            animate={{
               y: 0,
               scale: 1.5,
            }}
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
            onChange={(e) => setQuery(e.target.value)}
         ></TextField>
         <Button
            variant="contained"
            disableElevation
            size="medium"
            sx={{
               textTransform: "none",
               position: "absolute",
               bottom: "40px",
               background: "transparent",
               color: "#ee6c4d",
               border: "1px solid #ee6c4d",
               fontFamily: "Pacifico",
               fontSize: "20px",
               "&:hover": {
                  background: "#ee6c4d",
                  color: "#fff",
                  border: "none",
               },
            }}
            onClick={() => setFiltersOpen(true)}
         >
            advanced search
         </Button>
         <FiltersModal
            isFiltersOpen={isFiltersOpen}
            setFiltersOpen={setFiltersOpen}
         />
      </Box>
   );
}

export default RootFiller;
