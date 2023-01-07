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
   Button,
} from "@mui/material";

function BookCard({ initials, authorName, date, resourceName, course, prof }) {
   return (
      <Card sx={{ width: 280, borderRadius: "12px", paddingX: "8px" }}>
         <CardHeader
            avatar={<Avatar>{initials}</Avatar>}
            title={[
               "Posted by ",
               <span style={{ color: "#ee6c4d" }}>{authorName}</span>,
            ]}
            subheader={date}
            sx={{
               "& .MuiCardHeader-title": {
                  fontFamily: "Pacifico",
                  fontSize: "16px",
                  color: "#00171f",
               },
            }}
         ></CardHeader>
         <CardContent
            sx={{
               padding: 0,
               ul: {
                  paddingTop: 0,
                  paddingBottom: 0,
               },
               "& .MuiListItemText-primary": {
                  fontFamily: "Raleway",
                  fontSize: "16px",
                  fontWeight: 700,
                  color: "#00171f",
               },
               "& .MuiListItemText-secondary": {
                  fontFamily: "Raleway",
                  fontSize: "14px",
                  fontWeight: 700,
                  color: "#ee6c4d",
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
         <CardActions sx={{ justifyContent: "center" }}>
            <Button
               disableElevation
               size="large"
               startIcon={
                  <FontAwesomeIcon icon={faDownload} transform="shrink-5" />
               }
               sx={{
                  textTransform: "none",
                  background: "transparent",
                  color: "#ee6c4d",
                  border: "1px solid #ee6c4d",
                  fontFamily: "Pacifico",
                  fontSize: "14px",
                  marginBottom: "12px",
                  "&:hover": {
                     background: "#ee6c4d",
                     color: "#fff",
                     border: "none",
                  },
               }}
            >
               Download
            </Button>
         </CardActions>
      </Card>
   );
}

export default BookCard;
