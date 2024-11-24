import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route} from "react-router-dom";
import { Suspense } from 'react';
import TerrainBackground from './Components/TerrainBackground';
import Loader from './Components/Loader';
// import BookSeat from './Components/BookSeat';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Suspense fallback={<div><Loader/></div>}><TerrainBackground/></Suspense>
   <Routes>
      <Route path="/" element={<App/>}/>
      {/* <Route path="/BookSeat" element={<BookSeat/>}/> */}
    </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
reportWebVitals();
