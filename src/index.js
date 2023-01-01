import React, { StrictMode } from "react";
import { render } from "react-dom";
import "./index.css";
import App from "./App";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const root = document.getElementById("root");
render(
   <StrictMode>
      <BrowserRouter>
         <Routes>
            <Route path="/" element={<App />}></Route>
            <Route path="/login" element={<Login />}></Route>
            <Route path="/register" element={<Signup />}></Route>
         </Routes>
      </BrowserRouter>
   </StrictMode>,
   root
);
