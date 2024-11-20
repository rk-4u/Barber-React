import React from 'react';
import './Navbar.css';
import { Button, ButtonToolbar } from 'rsuite';
import 'rsuite/Button/styles/index.css';

const Navbar = () => {
  return (

<nav className="navbar">
  <div className="navbar-left">
    <a href="/" className="logo">
      Barber Shop
    </a>
  </div>
  <div className="navbar-right , navbar-center">
    <ul className="nav-links">
      <li>
        <a href="/">Products</a>
      </li>
      <li>
        <a href="/">About Us</a>
      </li>
      <li>
        <a href="/">Contact</a>
      </li>
    </ul>
  </div>
  <div className="navbar-right">
        <ButtonToolbar>
        <Button >Book Your Seat</Button>
        </ButtonToolbar>
    <a href="/account" className="user-icon">
      <i className="fas fa-user"></i>
    </a>
  </div>
</nav>
);
};

export default Navbar;