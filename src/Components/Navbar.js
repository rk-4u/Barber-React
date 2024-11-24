import React from 'react';
import './Navbar.css';
import { Button, ButtonToolbar } from 'rsuite';
import 'rsuite/Button/styles/index.css';

const Navbar = ({ onBookSeatClick }) => {
  
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <a href="/" className="logo">
          Barber Shop
        </a>
      </div>
      
      <div className="navbar-right">
        <ButtonToolbar>
          {/* Use the passed function to toggle BookSeat visibility */}
          <Button onClick={onBookSeatClick}>Book Your Seat</Button>
        </ButtonToolbar>
      </div>
    </nav>
  );
};

export default Navbar;
