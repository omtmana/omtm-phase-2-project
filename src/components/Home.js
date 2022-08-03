import React from "react";

const Home = () => {
   return (
      <div className="home-main-container">
         <div className="home-header">
            <h1 className="home-head">OTM</h1>
            <h3 className="home-body">An up-and-coming tech-startup in <br></br> New York City <br></br>
               that aims to provide you a better and smoother commute.<br></br>
               How? Well, by informing you the precise and accurate time of
               the subway's arrival
            </h3>
         </div>
         <div className="home-main-body">
            <h2>Note:</h2>
            <h3 className="home-body">This is a work-in-progress. What you're about to see only
               includes the <strong>Subway Station</strong> and the 
               <strong>Arrival Time</strong>.
            </h3>
            <h3>Again, this is a work in progress</h3>
         </div>
      </div>
   )
}

export default Home;