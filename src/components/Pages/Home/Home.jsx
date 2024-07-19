import React from 'react';
import './Home.css';
import Timer from '../../Timer/Timer';
import DigitalClock from '../../DigitalClock/DigitalClock';
import UserActive from '../../UserActive/UserActive';
import ClickCounter from '../../ContadorClisc/ContadorClics';

const Home = () => {
    return (
        <div className="home-container">
            <h2> Taller </h2>
            <div className="component-wrapper">
                <Timer />
            </div>
            <div className="component-wrapper">
                <DigitalClock />
            </div>
            <div className="component-wrapper">
                <UserActive />
            </div>
            <div className="component-wrapper">
                <ClickCounter />
            </div>
        </div>
    );
};

export default Home;
