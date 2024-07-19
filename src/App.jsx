import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from '../src/components/Pages/Home/Home';
import About from '../src/components/Pages/About/about';
import TimerPage from '../src/components/Pages/Timer';
import DigitalClockPage from '../src/components/Pages/DigitalClock';
import UserActivePage from '../src/components/Pages/UserActivePage';
import ContadorClics from '../src/components/Pages/ContadorClis';
import './App.css';

const App = () => {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <nav>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/timer">Timer</Link>
            <Link to="/digital-clock">Digital Clock</Link>
            <Link to="/user-active">User Active</Link>
            <Link to="/click-counter">ContadorClics</Link>
          </nav>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/timer" element={<TimerPage />} />
            <Route path="/digital-clock" element={<DigitalClockPage />} />
            <Route path="/user-active" element={<UserActivePage />} />
            <Route path="/click-counter" element={<ContadorClics />} />
          </Routes>
        </header>
      </div>
    </Router>
  );
};

export default App;
