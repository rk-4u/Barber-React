import React, { Suspense, useState, useEffect } from "react";
import './App.css';
import Loader from "./Components/Loader";
import Navbar from './Components/Navbar';
import Home from './Components/Home';
const TerrainBackground = React.lazy(() => import("./Components/TerrainBackground"));
const Card = React.lazy(() => import("./Components/Card"));
const SocialMediaFooter = React.lazy(() => import("./Components/SocialMediaFooter"));



function App() {
  return (
  
    <div className="App">
      <Suspense fallback={<div><Loader/></div>}>
        <TerrainBackground/>
      </Suspense>
        <Navbar style={{zIndex: 2}}/>
        <Home/>
      <Suspense fallback={<div><Loader/></div>}>
        <Card/>          
      </Suspense>
      <Suspense fallback={<div><Loader/></div>}>
        <SocialMediaFooter/>
      </Suspense>
      
    </div>
  );
}

export default App;
