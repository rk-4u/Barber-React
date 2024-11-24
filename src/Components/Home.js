import React from 'react';
import './Home.css';
import { Button, ButtonToolbar } from 'rsuite';
import 'rsuite/Button/styles/index.css';


const Home = ({ onBookSeatClick }) => {
    return (
        <div className='tittle'>
        <div className="nosifer-text">
            TRANSFORM YOUR LOOK <br/> WITH <br/> EXPERT BARBERS
        </div>
        <br/>
        <ButtonToolbar>
        <Button onClick={onBookSeatClick} color="green" appearance="primary" >Book Your Seat</Button>
        </ButtonToolbar>
        </div>
    )}

 
export default Home;