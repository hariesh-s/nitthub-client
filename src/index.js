import { render } from "react-dom";
import React, { StrictMode } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { QueryClientProvider, QueryClient } from "react-query";
import AuthContextProvider from "./contexts/AuthContext";
import Root from "./pages/Root";
import Login from "./pages/Login";
import Register from "./pages/Register";
import SearchLibrary from "./pages/SearchLibrary";
import Uploads from "./pages/Uploads";
import Downloads from "./pages/Downloads";
import ProtectedRoutes from "./components/ProtectedRoutes";
import "./index.css";

const queryClient = new QueryClient();
const root = document.getElementById("root");

render(
   <StrictMode>
      <QueryClientProvider client={queryClient}>
         <BrowserRouter>
            <AuthContextProvider>
               <Routes>
                  <Route path="/" element={<Root />}></Route>
                  <Route path="/login" element={<Login />}></Route>
                  <Route path="/register" element={<Register />}></Route>
                  <Route
                     path="/search-library"
                     element={<SearchLibrary />}
                  ></Route>
                  <Route path="/user" element={<ProtectedRoutes />}>
                     <Route index element={<div></div>}></Route>
                     <Route path="uploads" element={<Uploads />}></Route>
                     <Route path="downloads" element={<Downloads />}></Route>
                  </Route>
               </Routes>
            </AuthContextProvider>
         </BrowserRouter>
      </QueryClientProvider>
   </StrictMode>,
   root
);
