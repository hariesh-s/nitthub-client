import {
   Box,
   Button,
   Modal,
   Typography,
   MenuItem,
   TextField,
} from "@mui/material";
import { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

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
   const classes = useStyles();
   const { pathname } = useLocation();

   // useEffect(() => {
   //    window.removeEventListener("keyup", disableEnterKey);
   //    return () => {
   //       window.addEventListener("keyup", disableEnterKey);
   //    };
   // });

   function updateQuery(e) {
      setQuery(e.target.value);
   }

   function updateCourse(e) {
      setCourse(e.target.value);
   }

   function updateProf(e) {
      setProf(e.target.value);
   }

   function sendRequest(e) {
      e.preventDefault();
      fetch("api/materials", {
         method: "POST",
         headers: {
            "Content-Type": "Application/json",
         },
         body: JSON.stringify({
            query,
            course,
            prof,
         }),
      }).then((res) => {
         if (pathname === "/") navigate("/search-library");
         else if (pathname === "/search-library") setFiltersOpen(false);
      });
      // .then((data) => {
      //    console.log(data)

      // });
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
            onSubmit={sendRequest}
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
               id="filterSearchQuery"
               name="filterSearchQuery"
               placeholder="I'm looking for ..."
               autoFocus
               autoComplete="off"
               value={query}
               className={classes.root}
               onChange={updateQuery}
            ></TextField>
            <TextField
               id="select"
               label="Course"
               value={course}
               className={classes.root}
               select
               onChange={updateCourse}
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
               onChange={updateProf}
            >
               <MenuItem value="10">Ten</MenuItem>
               <MenuItem value="20">Twenty</MenuItem>
            </TextField>
            <Button
               variant="contained"
               type="input"
               disableElevation
               size="mediusm"
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
