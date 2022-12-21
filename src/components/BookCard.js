import {
   faDownload,
   faHeart,
   faShare,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
   Avatar,
   Card,
   CardActions,
   CardContent,
   CardHeader,
   CardMedia,
   List,
   ListItem,
   ListItemText,
   IconButton,
} from "@mui/material";

function BookCard() {
   return (
      <Card sx={{ width: 280 }}>
         <CardHeader
            avatar={<Avatar>Rg</Avatar>}
            title={"Posted by " + "name"}
            subheader={"date"}
            sx={{
               paddingBottom: "6px",
            }}
         ></CardHeader>
         <CardContent
            sx={{
               padding: 0,
               ul: {
                  paddingTop: 0,
                  paddingBottom: 0,
               },
            }}
         >
            <List sx={{ width: "100%" }}>
               <ListItem>
                  <ListItemText
                     primary="Resource Name"
                     secondary="Hennesey Patterson"
                  />
               </ListItem>
               <ListItem>
                  <ListItemText
                     primary="Course"
                     secondary="Computer Architecture"
                  />
               </ListItem>
               <ListItem>
                  <ListItemText
                     primary="Professor"
                     secondary="Ramasubramanium"
                  />
               </ListItem>
            </List>
         </CardContent>
         <CardActions sx={{ justifyContent: "space-between" }}>
            <IconButton size="small">
               <FontAwesomeIcon icon={faHeart} />
            </IconButton>
            <IconButton size="small">
               <FontAwesomeIcon icon={faShare} />
            </IconButton>
            <IconButton size="small">
               <FontAwesomeIcon icon={faDownload} />
            </IconButton>
         </CardActions>
      </Card>
   );
}

export default BookCard;
