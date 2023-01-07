import { Box, Button, Divider } from "@mui/material";
import { NavLink } from "react-router-dom";
import { makeStyles } from "@mui/styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUpload } from "@fortawesome/free-solid-svg-icons";

const useStyles = makeStyles({
   linkActiveStyle: {
      background: "#fff",
      color: "#00171f",
   },

   linkInActiveStyle: {
      background: "#00171f",
      color: "#fff",
   },
});

function UploadDownloadBar() {
   const { linkActiveStyle, linkInActiveStyle } = useStyles();

   return (
      <Box
         component="nav"
         sx={{
            background: "#00171f",
            fontFamily: "Pacifico",
            fontSize: "20px",
            paddingY: "8px",
         }}
      >
         <Box
            sx={{
               display: "flex",
               justifyContent: "center",
            }}
         >
            <Box sx={{ display: "flex" }}>
               <NavLink
                  to="/user/uploads"
                  style={{
                     textDecoration: "none",
                     padding: "6px",
                     borderRadius: "8px",
                  }}
                  className={({ isActive }) =>
                     isActive ? linkActiveStyle : linkInActiveStyle
                  }
               >
                  Uploads
               </NavLink>
               <Divider
                  orientation="vertical"
                  sx={{ background: "#fff", marginX: "16px" }}
                  flexItem
               />
               <NavLink
                  to="/user/downloads"
                  style={{
                     textDecoration: "none",
                     padding: "6px",
                     borderRadius: "8px",
                  }}
                  className={({ isActive }) =>
                     isActive ? linkActiveStyle : linkInActiveStyle
                  }
               >
                  Downloads
               </NavLink>
            </Box>
            {/* <Button
               variant="contained"
               endIcon={
                  <FontAwesomeIcon icon={faUpload} transform="shrink-3" />
               }
               disableElevation
               size="medium"
               sx={{
                  background: "transparent",
                  marginX: "36px",
                  color: "#ee6c4d",
                  border: "1px solid #ee6c4d",
                  fontFamily: "Pacifico",
                  fontSize: "16px",
                  textTransform: "none",
                  "&:hover": {
                     background: "#ee6c4d",
                     color: "#fff",
                     border: "none",
                  },
                  alignSelf: "center",
               }}
            >
               Upload files
            </Button> */}
         </Box>
      </Box>
   );
}

export default UploadDownloadBar;
