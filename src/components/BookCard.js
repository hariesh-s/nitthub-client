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
   List,
   ListItem,
   ListItemText,
   IconButton,
} from "@mui/material";

function BookCard({ initials, authorName, date, resourceName, course, prof }) {
   return (
      <Card sx={{ width: 280 }}>
         <CardHeader
            avatar={<Avatar>{initials}</Avatar>}
            title={"Posted by " + authorName}
            subheader={date}
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
                     secondary={resourceName}
                  />
               </ListItem>
               <ListItem>
                  <ListItemText primary="Course" secondary={course} />
               </ListItem>
               <ListItem>
                  <ListItemText primary="Professor" secondary={prof} />
               </ListItem>
            </List>
         </CardContent>
         <CardActions sx={{ justifyContent: "space-evenly" }}>
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
