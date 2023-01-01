import { useState } from "react";
import { Box, Grid, TextField, Button, Typography } from "@mui/material";

function Login() {
   const [username, setUsername] = useState("");
   const [password, setPassword] = useState("");
   const [usernameHelperText, setUsernameHelperText] = useState("");
   const [passwordHelperText, setPasswordHelperText] = useState("");
   const [usernameErr, setUsernameErr] = useState(false);
   const [passwordErr, setPasswordErr] = useState(false);

   function handleUsernameChange(e) {
      setUsername(e.target.value);

      if (!e.target.value) {
         setUsernameErr(true);
         setUsernameHelperText("Username cannot be empty!");
      } else {
         setUsernameErr(false);
         setUsernameHelperText("");
      }
   }

   function handlePasswordChange(e) {
      setPassword(e.target.value);

      if (!e.target.value) {
         setPasswordErr(true);
         setPasswordHelperText("Password cannot be empty!");
      } else {
         setPasswordErr(false);
         setPasswordHelperText("");
      }
   }

   function handleLogin(e) {
      e.preventDefault()
      
      if(!username){
         setUsernameErr(true);
         setUsernameHelperText("Username cannot be empty!");
      }
      else if(!password){
         setPasswordErr(true);
         setPasswordHelperText("Password cannot be empty!");
      }
      else {
         fetch("api/authenticate", {
            method: "POST",
            headers: {
               "Content-Type": "Application/json"
            },
            body: JSON.stringify({
               username,
               password
            })
         })
         .then(res => res.json)
         .then(data => console.log(data))
      }

   }

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
            onSubmit={handleLogin}
         >
            <Typography
               component="h1"
               alignSelf="center"
               fontFamily="Raleway, sans-serif"
               fontSize={32}
            >
               Sign in
            </Typography>
            <Grid item>
               <TextField
                  id="username"
                  name="username"
                  label="Username"
                  autoComplete="off"
                  autoFocus
                  fullWidth
                  InputProps={{
                     style: {
                        fontFamily: "Raleway",
                        fontSize: 18,
                     },
                  }}
                  InputLabelProps={{
                     style: {
                        fontFamily: "Raleway",
                        fontSize: 18,
                     },
                  }}
                  onChange={handleUsernameChange}
                  helperText={usernameHelperText}
                  error={usernameErr}
               ></TextField>
            </Grid>
            <Grid item>
               <TextField
                  id="password"
                  name="password"
                  type="password"
                  label="Password"
                  autoComplete="off"
                  fullWidth
                  InputProps={{
                     style: {
                        fontFamily: "Raleway",
                        fontSize: 18,
                     },
                  }}
                  InputLabelProps={{
                     style: {
                        fontFamily: "Raleway",
                        fontSize: 18,
                     },
                  }}
                  onChange={handlePasswordChange}
                  helperText={passwordHelperText}
                  error={passwordErr}
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
                  disabled={usernameErr || passwordErr}
                  type="submit"
               >
                  Login
               </Button>
            </Grid>
         </Grid>
      </Box>
   );
};

export default Login;
