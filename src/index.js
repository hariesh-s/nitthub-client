import React, { StrictMode } from "react";
import { render } from "react-dom";
import "./index.css";
import Main from "./pages/Root";
import Login from "./pages/Login";
import Register from "./pages/Register";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const root = document.getElementById("root");
render(
   <StrictMode>
      <BrowserRouter>
         <Routes>
            <Route path="/" element={<Main />}></Route>
            <Route path="/login" element={<Login />}></Route>
            <Route path="/register" element={<Register />}></Route>
         </Routes>
      </BrowserRouter>
   </StrictMode>,
   root
);
