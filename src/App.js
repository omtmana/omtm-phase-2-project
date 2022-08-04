import React , { useState, useEffect } from 'react';
import About from './components/About';
import Help from './components/Help';
import Subway from './components/Subway';
import Home from './components/Home';
import Time from './components/Time';
import { BrowserRouter as Router , Routes , Route , Link } from 'react-router-dom';
import './App.css';

function App() {
  const[stations , setStations]=useState([])
  const[searchStation, setSearchStation]=useState("")

  useEffect(() => {
    fetch('https://mtaapi.herokuapp.com/stations')
    .then((res) => res.json())
    .then((stations) => {
      setStations(stations.result)})
  } , [])
  
  const displayedStations = stations.filter((station) => {
    return station.name.toLowerCase().includes(searchStation.toLowerCase())
  })
  return (
    <div className="App">
      <Router>
        <nav className='navigation-bar'>
          <Link className='home' to="/"> HOME </Link>
          <Link to="/subway" className='subway'> SUBWAY </Link>
          {/* <Link to="/about"> About </Link> */}
          <Link to="/help" className='help'> HELP </Link>
          {/* <Link to="/time"> Time </Link> */}
          <div style={{height:"100%" , position:"absoulute" , right:"0"}}>
            <img src="Untitled.png" style={{height:"100%"}} />
          </div>
        </nav>
        {/* <div className="metrocard-pic">
        </div> */}
          <img style={{backgroundImage: "url(../public/Untitled.png)"}} />
        <Routes>
          <Route path="/" element={<Home className="home-page"/>} />
          <Route path="/about" element={<About />} />
          <Route path="/help" element={<Help />} />
          <Route path="/subway" element={<Subway stations={stations} searchStation={searchStation} onSearchStation={setSearchStation} displayedStations={displayedStations} />}  />
          <Route path="/time/:id" element={<Time/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
