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
             <Route index element={<Hello/>}/>
             <Route path='products' element={<ProductList/>}/>
         </Route>
     </Routes>
 </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
