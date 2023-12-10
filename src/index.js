import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Hello from "./pages/Hello";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import ProductList from "./pages/ProductList";
import Layout from "./pages/Layout";

const root = ReactDOM.createRoot(document.getElementById('root'));


root.render(
 <BrowserRouter>
     <Routes>
         <Route path='/' element={<Layout/>}>
             <Route path='hello' element={<Hello/>}/>
             <Route path='products' element={<ProductList/>}/>
         </Route>
     </Routes>
 </BrowserRouter>
);