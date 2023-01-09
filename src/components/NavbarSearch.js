import { faFilter, faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "framer-motion";
import { TextField, InputAdornment } from "@mui/material";
import { useState, useEffect } from "react";
import FiltersModal from "./FiltersModal";
import useSearchParamContext from "../hooks/useSearchParamContext";

function NavbarSearch() {
   const [query, setQuery] = useState("");
   const [isFiltersOpen, setFiltersOpen] = useState(false);

   const { dispatchSearchParam } = useSearchParamContext();

   useEffect(() => {
      function search(e) {
         // if user hit enter while focussed on search bar in root filler component
         // query cannot be empty to prevent unnecessary reqs
         if (e.keyCode === 13 && e.target.id === "navSearchQuery" && query) {
            dispatchSearchParam({
               type: "SIMPLE_SEARCH",
               payload: { query, course: "", prof: "" },
            });
         }
      }

      window.addEventListener("keyup", search);

      return () => window.removeEventListener("keyup", search);
   }, [query, dispatchSearchParam]);

   return (
      <TextField
         variant="outlined"
         id="navSearchQuery"
         name="navSearchQuery"
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
            endAdornment: (
               <InputAdornment
                  position="end"
                  sx={{
                     "&:hover svg": {
                        color: "#ee6c4d",
                        cursor: "pointer",
                     },
                  }}
               >
                  <FontAwesomeIcon
                     icon={faFilter}
                     onClick={() => setFiltersOpen(true)}
                  />
                  <FiltersModal
                     isFiltersOpen={isFiltersOpen}
                     setFiltersOpen={setFiltersOpen}
                  />
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
   );
}

export default NavbarSearch;
