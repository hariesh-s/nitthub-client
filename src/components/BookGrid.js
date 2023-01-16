import { Grid } from "@mui/material";

import BookCard from "./BookCard";

function BookGrid({ materials, buttonLogic }) {
   return (
      <Grid
         container
         justifyContent="flex-start"
         columnSpacing={2}
         rowSpacing={6}
         m={0}
         p={1}
         bgcolor="#00171f"
         sx={{
            flexGrow: 1,
            width: "100%",
            "& .MuiGrid-item": {
               paddingY: "16px",
               paddingX: "16px",
            },
         }}
      >
         {materials?.map((material) => (
            <Grid
               item
               xs={12}
               sm={6}
               md={4}
               lg={3}
               m={0}
               p={0}
               sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignSelf: "flex-start",
               }}
            >
               <BookCard
                  id={material?._id}
                  authorName={material?.owner}
                  materialName={material?.name}
                  course={material?.course}
                  prof={material?.prof}
                  mime={material?.mimeType}
                  handleClick={buttonLogic}
               />
            </Grid>
         ))}
      </Grid>
   );
}

export default BookGrid;
