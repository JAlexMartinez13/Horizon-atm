import './App.css';
import React from 'react';
import Navbar from './components/Navbar';
import Home from './pages';
import { BrowserRouter as Router   } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Home/>
    </Router>
  );
}

export default App;
