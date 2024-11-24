import React, { Suspense, useState, useEffect } from "react";
import './App.css';
import Loader from "./Components/Loader";
import Navbar from './Components/Navbar';
import BookSeat from "./Components/BookSeat";
import Home from './Components/Home';
// const TerrainBackground = React.lazy(() => import("./Components/TerrainBackground"));
const Card = React.lazy(() => import("./Components/Card"));
const SocialMediaFooter = React.lazy(() => import("./Components/SocialMediaFooter"));


function App() {
  const [isBookSeatVisible, setIsBookSeatVisible] = useState(false);
  const toggleBookSeat = () => {
    setIsBookSeatVisible((prev) => !prev);
  };
  
  return (
  
    <div className="App">
      <div>
        <Navbar style={{zIndex: 2}} onBookSeatClick={toggleBookSeat}/>
        {isBookSeatVisible && <BookSeat onClose={toggleBookSeat} />}
      </div>  
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
