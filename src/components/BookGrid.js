import { Grid } from "@mui/material";
import BookCard from "./BookCard";

function BookGrid() {
   const arr = [1,2,3,4,5,6,7,8,9,10]

   return (
      <Grid
         container
         justifyContent="flex-start"
         columnSpacing={2}
         rowSpacing={6}
         px={{xs: 2, sm: 4}}
         py={4}
      >
         {
            arr.map(() => (
               <Grid item
                  xs={12}
                  sm={6}
                  md={4}
                  lg={3}
                  sx={{
                     display: "flex",
                     justifyContent: "center"
                  }}
               >
                  <BookCard />
               </Grid>
            ))
         }
      </Grid>
   );
}

export default BookGrid;
