import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';
import Home from './components/Pages/Home/Home';

ReactDOM.render(
  <Router>
    
    <Home/>
  </Router>,
  document.getElementById('root')
);
