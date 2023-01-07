import { Grid } from "@mui/material";
import BookCard from "./BookCard";

function BookGrid({ supplies }) {
   const arr = [
      {
         owner: "hariesh",
         name: "name11",
         course: "course1",
         prof: "prof1",
      },
      2,
      3,
      4,
      5,
      6,
      7,
   ];
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
         {arr?.map((supply) => (
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
                  authorName={supply?.owner}
                  resourceName={supply?.name}
                  course={supply?.course}
                  prof={supply?.prof}
               />
            </Grid>
         ))}
      </Grid>
   );
}

export default BookGrid;
