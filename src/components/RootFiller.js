import {
   Box,
   Button,
   Modal,
   Typography,
   FormControl,
   InputLabel,
   Select,
   MenuItem,
   TextField,
} from "@mui/material";
import Typewriter from "typewriter-effect";
import { useState } from "react";
import { motion } from "framer-motion";
import { InputAdornment, Stack } from "@mui/material";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

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

function RootFiller() {
   const [isFiltersOpen, setFiltersOpen] = useState(false);
   const [query, setQuery] = useState("");
   const [course, setCourse] = useState("");
   const [prof, setProf] = useState("");
   const classes = useStyles();
   
   function updateQuery(e) {
      setQuery(e.target.value);
   }

   function updateCourse(e) {
      setCourse(e.target.value);
   }

   function updateProf(e) {
      setProf(e.target.value);
   }

   function sendRequest(e) {}

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
            height: "65vh", // paddingTop is 25vh
            paddingTop: "35vh",
            fontFamily: "Raleway",
            fontSize: { xs: 48, sm: 64},
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
            id="searchQuery"
            name="searchQuery"
            placeholder="I'm looking for ..."
            autoFocus
            autoComplete="off"
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
               "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
                  borderColor: "#ee6c4d",
               },
               "& .MuiInputBase-input": {
                  paddingY: 1.5,
               },
            }}
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
            >
               <Typography sx={{
                  fontFamily: "Pacifico",
                  fontSize: "40px",
                  color: "#00171f",
                  alignSelf: "center",
               }}>
                  Filters
               </Typography>
               <TextField
                  variant="outlined"
                  id="searchQuery"
                  name="searchQuery"
                  placeholder="I'm looking for ..."
                  autoFocus
                  autoComplete="off"
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
                  disableElevation
                  size="large"
                  sx={{
                     background: "transparent",
                     color: "#00171f",
                     border: "1px solid #00171f",
                     fontFamily: "Poppins",
                     textTransform: "none",
                     "&:hover": {
                        background: "#00171f",
                        color: "#fff",
                        border: "none",
                     },
                     alignSelf: "center",
                  }}
                  onSubmit={sendRequest}
               >
                  Search
               </Button>
            </Box>
         </Modal>
      </Box>
   );
}

export default RootFiller;
