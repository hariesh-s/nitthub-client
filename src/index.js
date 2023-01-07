import React, { StrictMode } from "react";
import { render } from "react-dom";
import "./index.css";
import Root from "./pages/Root";
import Login from "./pages/Login";
import Register from "./pages/Register";
import SearchLibrary from "./pages/SearchLibrary";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { QueryClientProvider, QueryClient } from "react-query";
const queryClient = new QueryClient();

const root = document.getElementById("root");
render(
   <StrictMode>
      <QueryClientProvider client={queryClient}>
         <BrowserRouter>
            <Routes>
               <Route path="/" element={<Root />}></Route>
               <Route path="/login" element={<Login />}></Route>
               <Route path="/register" element={<Register />}></Route>
               <Route path="/search-library" element={<SearchLibrary />}></Route>
            </Routes>
         </BrowserRouter>
      </QueryClientProvider>
   </StrictMode>,
   root
);
