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
import download from "downloadjs";
import { useNavigate } from "react-router-dom";
import useJWT from "../hooks/useJWT";

function BookCard({ authorName, date, resourceName, course, prof, id, mime }) {
   const authApi = useJWT();
   const navigate = useNavigate()


   async function downloadMaterial() {
      try {
         const response = await authApi.get("/api/download/" + id, {
            responseType: "blob",
         })
         console.log(response)

         // check how to trigger file download on ur own
         // used a library for now
         download(response.data, resourceName, mime)
      } catch (error) {
         console.error(error)   
      }  
   }

   return (
      <Card sx={{ width: 280, borderRadius: "12px", paddingX: "8px" }}>
         <CardHeader
            avatar={<Avatar></Avatar>}
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
                  color: "#00171f",
                  border: "1px solid #00171f",
                  fontFamily: "Pacifico",
                  fontSize: "14px",
                  marginBottom: "12px",
                  "&:hover": {
                     background: "#00171f",
                     color: "#fff",
                     border: "none",
                  },
               }}
               onClick={downloadMaterial}
            >
               Download
            </Button>
         </CardActions>
      </Card>
   );
}

export default BookCard;
