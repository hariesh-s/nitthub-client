import { api } from "../api/axios";
import { Grid } from "@mui/material";
import { useState, useEffect } from "react";
import BookCard from "./BookCard";
import useSearchParamContext from "../hooks/useSearchParamContext";

function BookGrid() {
   const [studyMaterials, setStudyMaterials] = useState([]);
   const { searchParam } = useSearchParamContext();

   useEffect(() => {
      async function getStudyMaterials() {
         try {
            const response = await api.post("/api/study-materials", searchParam);
            console.log(response.data)
            setStudyMaterials(response.data.result)
         } catch (error) {
            if (error.response) {
               console.log(error.response.data);
               console.log(error.response.status);
               console.log(error.response.headers);
            } else if (error.request) {
               console.log(error.request);
            } else {
               console.log("Error", error.message);
            }
            console.log(error.config);
         }
      }

      getStudyMaterials();
   }, [searchParam])

   return (
      <Grid
         container
         justifyContent="flex-start"
         columnSpacing={2}
         rowSpacing={6}
         px={{ xs: 2, sm: 4 }}
         py={4}
         bgcolor="#00171f"
      >
         {studyMaterials?.map((studyMaterial) => (
            <Grid
               item
               xs={12}
               sm={6}
               md={4}
               lg={3}
               sx={{
                  display: "flex",
                  justifyContent: "center",
               }}
            >
               <BookCard
                  authorName={studyMaterial?.owner}
                  resourceName={studyMaterial?.name}
                  course={studyMaterial?.course}
                  prof={studyMaterial?.prof}
                  id={studyMaterial?._id}
                  mime={studyMaterial?.mimeType}
               />
            </Grid>
         ))}
      </Grid>
   );
}

export default BookGrid;
