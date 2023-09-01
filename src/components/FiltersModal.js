import {
   Box,
   Button,
   Modal,
   Typography,
   MenuItem,
   TextField,
} from "@mui/material";
import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import useSearchParamContext from "../hooks/useSearchParamContext";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
   root: {
      "& .MuiOutlinedInput-input": {
         color: "#00171f",
      },
      "& .MuiInputLabel-root": {
         color: "#00171f",
      },
      "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
         borderColor: "#00171f",
      },
      "&:hover .MuiOutlinedInput-input": {
         color: "#00171f",
      },
      "&:hover .MuiInputLabel-root": {
         color: "#00171f",
      },
      "&:hover .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
         borderColor: "#00171f",
      },
      "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-input": {
         color: "#00171f",
      },
      "& .MuiInputLabel-root.Mui-focused": {
         color: "#00171f",
      },
      "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
         borderColor: "#00171f",
      },
   },
});

function FiltersModal({ isFiltersOpen, setFiltersOpen }) {
   const [query, setQuery] = useState("");
   const [course, setCourse] = useState("");
   const [prof, setProf] = useState("");

   const navigate = useNavigate();
   const { pathname } = useLocation();

   const classes = useStyles();

   const { dispatchSearchParam } = useSearchParamContext();

   function search(e) {
      e?.preventDefault();
      // if user submits form
      if (e?.target.id === "filterSearchQuery") {
         // we only update the search context, the req
         // for materials is made by the book grid
         // component using the updated search context
         dispatchSearchParam({
            type: "SEARCH",
            payload: { query, course, prof },
         });

         if (pathname === "/") navigate("/search-library");
         else if (pathname === "/search-library") setFiltersOpen(false);
      }
   }

   return (
      <Modal open={isFiltersOpen} onClose={() => setFiltersOpen(false)}>
         <Box
            component="form"
            sx={{
               position: "absolute",
               top: "50%",
               left: "50%",
               transform: "translate(-50%, -50%)",
               width: { xs: 250, sm: 400 },
               padding: "40px 48px",
               display: "flex",
               flexDirection: "column",
               gap: "32px",
               borderRadius: "16px",
               background: "#fff",
            }}
            onSubmit={search}
            id="filterSearchQuery"
         >
            <Typography
               sx={{
                  fontFamily: "Pacifico",
                  fontSize: "40px",
                  color: "#00171f",
                  alignSelf: "center",
               }}
            >
               Filters
            </Typography>
            <TextField
               variant="outlined"
               name="filterSearchQuery"
               placeholder="I'm looking for ..."
               autoFocus
               autoComplete="off"
               value={query}
               className={classes.root}
               onChange={(e) => setQuery(e.target.value)}
            ></TextField>
            <TextField
               id="select"
               label="Course"
               value={course}
               className={classes.root}
               select
               onChange={(e) => setCourse(e.target.value)}
            >
               <MenuItem value="10">Ten</MenuItem>
               <MenuItem value="20">Twenty</MenuItem>
            </TextField>
            <TextField
               id="select"
               label="Professor"
               value={prof}
               className={classes.root}
               select
               onChange={(e) => setProf(e.target.value)}
            >
               <MenuItem value="10">Ten</MenuItem>
               <MenuItem value="20">Twenty</MenuItem>
            </TextField>
            <Button
               variant="contained"
               type="input"
               disableElevation
               size="medium"
               sx={{
                  background: "transparent",
                  color: "#00171f",
                  border: "1px solid #00171f",
                  fontFamily: "Pacifico",
                  fontSize: "16px",
                  textTransform: "none",
                  "&:hover": {
                     background: "#00171f",
                     color: "#fff",
                     border: "none",
                  },
                  alignSelf: "center",
               }}
            >
               Search
            </Button>
         </Box>
      </Modal>
   );
}

export default FiltersModal;
