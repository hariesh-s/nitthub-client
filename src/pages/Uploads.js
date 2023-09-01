import { Box } from "@mui/material";
import { useEffect, useState } from "react";

import useJWT from "../hooks/useJWT";
import BookGrid from "../components/BookGrid";
import Navbar from "../components/Navbar/Navbar";
import useLoginStatus from "../hooks/useLoginStatus";
import { useNavigate } from "react-router-dom";

function Upload() {
   console.log("at uploads")
   const [uploads, setUploads] = useState([]);

   const authApi = useJWT();

   const navigate = useNavigate();

   const isLoggedIn = useLoginStatus();
   console.log(isLoggedIn)
   async function deleteUpload(uploadID) {
      try {
         const response = await authApi.delete("/api/upload/" + uploadID);
         console.log(response);
      } catch (error) {
         console.error(error);
      }
   }

   useEffect(() => {       
      console.log("upload use effect")       
      async function getUploads() {
         try {
            const response = await authApi.get("/api/upload");
            // console.log(response);
            // console.log(response.data);
            setUploads(response.data.result);
         } catch (error) {
            // console.error(error);
         }
      }

      getUploads();
   }, [authApi, navigate]);

   return (
      <Box
         sx={{
            height: "100vh",
            width: "100%",
            display: "flex",
            flexDirection: "column",
         }}
      >
         <Navbar isLoggedIn={isLoggedIn}/>
         <BookGrid materials={uploads} buttonLogic={deleteUpload} />
      </Box>
   );
}

export default Upload;
