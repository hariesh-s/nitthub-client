import { Box } from "@mui/material";
import { useEffect, useState } from "react";

import useJWT from "../hooks/useJWT";
import BookGrid from "../components/BookGrid";
import Navbar from "../components/Navbar/Navbar";

function Upload() {
   const [uploads, setUploads] = useState([]);

   const authApi = useJWT();

   async function deleteUpload(uploadID) {
      try {
         const response = await authApi.delete("/api/upload/" + uploadID);
         console.log(response);
      } catch (error) {
         console.error(error);
      }
   }

   useEffect(() => {
      async function getUploads() {
         try {
            const response = await authApi.get("/api/upload");
            console.log(response);
            console.log(response.data);
            setUploads(response.data.result);
         } catch (error) {
            console.error(error);
         }
      }

      getUploads();
   }, [authApi]);

   return (
      <Box
         sx={{
            height: "100vh",
            width: "100%",
            display: "flex",
            flexDirection: "column",
         }}
      >
         <Navbar />
         <BookGrid materials={uploads} buttonLogic={deleteUpload} />
      </Box>
   );
}

export default Upload;
