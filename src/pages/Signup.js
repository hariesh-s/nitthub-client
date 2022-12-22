import { Box, Grid, TextField, Button, Typography } from "@mui/material";
// import { makeStyles } from "@mui/styles";
// import { createTheme } from '@mui/material/styles';
// const theme = createTheme();
// const useStyles = makeStyles({
//    root : {
//      background: theme.palette.primary.main,
//    },
//    ip: {
//       fontFamily: "Raleway",
//       fontSize: 32,
//    }
// });

const Signup = () => {
   // const styles = useStyles();

   return (
      <Box
         component="main"
         width="100vw"
         height="100vh"
         display="flex"
         justifyContent="center"
         alignItems="center"
      >
         <Grid
            container
            component="form"
            direction="column"
            width={400}
            rowSpacing={4}
            p={4}
            border="1px solid"
            borderRadius={10}
         >
            <Typography
               component="h1"
               alignSelf="center"
               fontFamily="Raleway, sans-serif"
               fontSize={32}
            >
               Signup
            </Typography>
            <Grid item>
               <TextField label="Username" fullWidth
                  InputProps={{
                     style: {
                        fontFamily: "Raleway",
                        fontSize: 18,
                     }
                  }}
                  InputLabelProps={{
                     style: {
                        fontFamily: "Raleway",
                        fontSize: 18,
                     }
                  }}
               ></TextField>
            </Grid>
            <Grid item>
               <TextField label="Password" fullWidth
                  InputProps={{
                     style: {
                        fontFamily: "Raleway",
                        fontSize: 18,
                     }
                  }}
                  InputLabelProps={{
                     style: {
                        fontFamily: "Raleway",
                        fontSize: 18,
                     }
                  }}
               ></TextField>
            </Grid>
            <Grid item>
               <TextField label="Confirm password" fullWidth
                  InputProps={{
                     style: {
                        fontFamily: "Raleway",
                        fontSize: 18,
                     }
                  }}
                  InputLabelProps={{
                     style: {
                        fontFamily: "Raleway",
                        fontSize: 18,
                     }
                  }}
               ></TextField>
            </Grid>
            <Grid item alignSelf="center">
               <Button
                  variant="contained"
                  size="large"
                  disableElevation
                  sx={{
                     textTransform: "none",
                     fontFamily: "Raleway",
                     fontSize: 16,
                  }}
               >
                  Signup
               </Button>
            </Grid>
         </Grid>
      </Box>
   );
};

export default Signup;
