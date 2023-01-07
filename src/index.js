import React, { StrictMode } from "react";
import { render } from "react-dom";
import "./index.css";
import Root from "./pages/Root";
import Login from "./pages/Login";
import Register from "./pages/Register";
import SearchLibrary from "./pages/SearchLibrary";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { QueryClientProvider, QueryClient } from "react-query";
import Upload from "./pages/Uploads";
import Download from "./pages/Downloads";
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
               <Route path="/user">
                  <Route index element={<div></div>}></Route>
                  <Route path="uploads" element={<Upload />}></Route>
                  <Route path="downloads" element={<Download />}></Route>
               </Route>
            </Routes>
         </BrowserRouter>
      </QueryClientProvider>
   </StrictMode>,
   root
);
