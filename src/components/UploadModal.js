import {
   Box,
   Button,
   Modal,
   Typography,
   MenuItem,
   TextField,
} from "@mui/material";
import { useState } from "react";
// import { useNavigate, useLocation } from "react-router-dom";
// import useSearchParamContext from "../hooks/useSearchParamContext";
import { makeStyles } from "@mui/styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUpload } from "@fortawesome/free-solid-svg-icons";
// import { api } from "../api/axios";
import useJWT from "../hooks/useJWT";

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

function UploadModal({ isUploadModalOpen, setUploadModalOpen }) {
   const [materialName, setMaterialName] = useState("");
   const [course, setCourse] = useState("");
   const [prof, setProf] = useState("");
   const [file, setFile] = useState();
   const [label, setLabel] = useState("Upload file");

   // const navigate = useNavigate();
   // const { pathname } = useLocation();

   const classes = useStyles();

   // const { dispatchSearchParam } = useSearchParamContext();

   const authApi = useJWT();

   // function search(e) {
   //    e?.preventDefault();
   //    // if user submits form
   //    if (e?.target.id === "filterSearchmaterialName") {
   //       dispatchSearchParam({
   //          type: "SEARCH",
   //          payload: { materialName, course, prof },
   //       });

   //       if (pathname === "/") navigate("/search-library");
   //       else if (pathname === "/search-library") setUploadModalOpen(false);
   //    }
   // }

   function updateFile(e) {
      console.log(e.target.files[0]);
      setFile(e.target.files[0]);
      setLabel(e.target.files[0].name);
   }

   async function upload(e) {
      e.preventDefault();
      const data = new FormData()
      // order important as in server
      // "busboy" reads data in this order
      data.append("materialName", materialName);
      data.append("course", course);
      data.append("prof", prof);
      data.append("material", file, file.name);
      try {
         const response = await authApi.post("/api/upload", data)
         console.log(response)
         setUploadModalOpen(false)
      } catch(error) {
         console.log(error)
      }
   }

   return (
      <Modal open={isUploadModalOpen} onClose={() => setUploadModalOpen(false)}>
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
            onSubmit={upload}
            id="filterSearchmaterialName"
         >
            <Typography
               sx={{
                  fontFamily: "Pacifico",
                  fontSize: "40px",
                  color: "#00171f",
                  alignSelf: "center",
               }}
            >
               Details
            </Typography>
            <TextField
               variant="outlined"
               name="materialName"
               placeholder="Name of the material ..."
               autoFocus
               autoComplete="off"
               value={materialName}
               className={classes.root}
               onChange={(e) => setMaterialName(e.target.value)}
            ></TextField>
            <TextField
               id="select"
               name="course"
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
               name="prof"
               label="Professor"
               value={prof}
               className={classes.root}
               select
               onChange={(e) => setProf(e.target.value)}
            >
               <MenuItem value="10">Ten</MenuItem>
               <MenuItem value="20">Twenty</MenuItem>
            </TextField>
            <Box display="flex" justifyContent="center" gap="48px">
               <Button
                  variant="contained"
                  type="input"
                  component="label"
                  disableElevation
                  size="medium"
                  startIcon={<FontAwesomeIcon icon={faUpload} transform="shrink-3"/>}
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
                  {label}
                  <input
                     type="file"
                     name="material"
                     accept="image/*"
                     hidden
                     onChange={updateFile}
                  />
               </Button>
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
                  Submit
               </Button>
            </Box>
         </Box>
      </Modal>
   );
}

export default UploadModal;
