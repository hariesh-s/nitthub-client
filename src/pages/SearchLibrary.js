import download from "downloadjs";
import { Box } from "@mui/material";
import { useState, useEffect } from "react";

import { api } from "../api/axios";
import useJWT from "../hooks/useJWT";
import BookGrid from "../components/BookGrid";
import Navbar from "../components/Navbar/Navbar";
import useSearchParamContext from "../hooks/useSearchParamContext";

function SearchLibrary() {
   const [studyMaterials, setStudyMaterials] = useState([]);

   const { searchParam } = useSearchParamContext();
   
   const authApi = useJWT();

   async function downloadMaterial(
      studyMaterialID,
      studyMaterialName,
      stuydMaterialMIME
   ) {
      try {
         const response = await authApi.get(
            "/api/download/" + studyMaterialID,
            {
               responseType: "blob",
            }
         );
         console.log(response);

         // check how to trigger file download on ur own
         // used a library for now
         download(response.data, studyMaterialName, stuydMaterialMIME);
      } catch (error) {
         console.error(error);
      }
   }

   useEffect(() => {
      async function getStudyMaterials() {
         try {
            const response = await api.post(
               "/api/study-materials",
               searchParam
            );
            console.log(response.data);
            setStudyMaterials(response.data.result);
         } catch (error) {
            console.error(error);
         }
      }

      getStudyMaterials();
   }, [searchParam]);

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
         <BookGrid materials={studyMaterials} buttonLogic={downloadMaterial} />
      </Box>
   );
}

export default SearchLibrary;
