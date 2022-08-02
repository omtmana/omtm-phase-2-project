import React , { useState, useEffect } from 'react';
import About from './components/About';
import Help from './components/Help';
import Subway from './components/Subway';
import Home from './components/Home';
import { BrowserRouter as Router , Routes , Route , Link } from 'react-router-dom';
import './App.css';

function App() {
  const[stations , setStations]=useState([])

  useEffect(() => {
    fetch('https://mtaapi.herokuapp.com/stations')
    .then((res) => res.json())
    .then((stations) => setStations(stations.result))
  } , [])
  
  return (
    <div className="App">
      <Router>
        <nav className='navigation-bar'>
          <Link to="/"> Home </Link>
          <Link to="/subway"> Subway </Link>
          <Link to="/about"> About </Link>
          <Link to="/help"> Help </Link>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/help" element={<Help />} />
          <Route path="/subway" element={<Subway stations={stations} />}  />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
