import { useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload, faTrashCan } from "@fortawesome/free-solid-svg-icons";
import {
   Avatar,
   Card,
   CardActions,
   CardContent,
   CardHeader,
   List,
   ListItem,
   ListItemText,
   Button,
} from "@mui/material";

function BookCard({
   id,
   ownerName,
   materialName,
   course,
   prof,
   mime,
   date,
   handleClick,
}) {
   const { pathname } = useLocation();

   return (
      <Card sx={{ width: 280, borderRadius: "12px", paddingX: "8px" }}>
         {pathname === "/search-library" && (
            <CardHeader
               avatar={<Avatar></Avatar>}
               title={[
                  "Posted by ",
                  <span style={{ color: "#ee6c4d" }}>{ownerName}</span>,
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
         )}
         
         {pathname === "/user/uploads" && (
            <CardHeader
               title={[
                  "Posted on ",
                  <span style={{ color: "#ee6c4d" }}>{date}</span>,
               ]}
               sx={{
                  "& .MuiCardHeader-title": {
                     fontFamily: "Pacifico",
                     fontSize: "16px",
                     color: "#00171f",
                     paddingTop: "8px",
                  },
               }}
            ></CardHeader>
         )}
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
                     secondary={materialName}
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
            {pathname === "/search-library" && (
               <Button
                  disableElevation
                  size="large"
                  startIcon={
                     <FontAwesomeIcon icon={faDownload} transform="shrink-4" />
                  }
                  sx={{
                     textTransform: "none",
                     background: "transparent",
                     color: "#00171f",
                     border: "1px solid #00171f",
                     fontFamily: "Pacifico",
                     fontSize: "16px",
                     marginBottom: "12px",
                     "&:hover": {
                        background: "#00171f",
                        color: "#fff",
                        border: "none",
                     },
                  }}
                  onClick={() => handleClick(id, materialName, mime)}
               >
                  download
               </Button>
            )}

            {pathname === "/user/uploads" && (
               <Button
                  disableElevation
                  size="large"
                  startIcon={
                     <FontAwesomeIcon icon={faTrashCan} transform="shrink-4" />
                  }
                  sx={{
                     textTransform: "none",
                     background: "transparent",
                     color: "#ee6c4d",
                     border: "1px solid #ee6c4d",
                     fontFamily: "Pacifico",
                     fontSize: "16px",
                     marginBottom: "12px",
                     "&:hover": {
                        // background: "#00171f",
                        background: "#ee6c4d",
                        color: "#fff",
                        border: "none",
                     },
                  }}
                  onClick={() => handleClick(id)}
               >
                  delete
               </Button>
            )}
         </CardActions>
      </Card>
   );
}

export default BookCard;
