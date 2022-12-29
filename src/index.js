import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter,Route,Routes } from "react-router-dom";
import Sample1 from './Sample1';
import Sample2 from './Sample2';
import Sample3 from './Sample3';
ReactDOM.render(
    <React.StrictMode>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/sample1" element={<Sample1 />} />
        <Route path="/sample2" element={<Sample2 />} />
        <Route path="/sample3" element={<Sample3 />} />
        
      </Routes>
      </BrowserRouter>,
   </React.StrictMode>,
    document.getElementById('root')
  );
