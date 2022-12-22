import React, { StrictMode } from "react";
import { render } from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import { createTheme, ThemeProvider } from '@mui/material/styles';
// const theme = createTheme({
//    typography: {
//       tab: {
//          fontSize: 20,
//       },
//    },
//    palette: {
//       common: {
//          purple: 'purple',
//       },
//    },
//    components: {
//       // Name of the component
//       MuiButton: {
//         styleOverrides: {
//           // Name of the slot
//           root: {
//             // Some CSS
//             fontSize: '1rem',
//           },
//         },
//       },
//    },
// })

const root = document.getElementById("root");
render(
   <StrictMode>
      <BrowserRouter>
         {/* <ThemeProvider theme={theme}> */}
         <Routes>
            <Route path="/" element={<App />}></Route>
         </Routes>
         {/* </ThemeProvider> */}
      </BrowserRouter>
   </StrictMode>,
   root
);
