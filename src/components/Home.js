import React from "react";

const Home = () => {
   return (
      <div className="home-main-container">
         <div className="home-header">
            <div className="head-circle">
               <h1 className="home-head">OMT</h1>
            </div>
            <div className="home-body">
               <h1 className="home-body-header">WHAT WE DO</h1>
               <h3 className="home-body-text">An up-and-coming tech-startup in New York City
                  that aims to provide you a better and smoother commute.<br></br>
                  How? Well, by informing you <br></br>the precise and accurate time of
                  the subway's arrival
               </h3>
            </div>
         </div>
         <div className="home-main-body">
            <h2 className="body-1">NOTE:</h2>
            <div className="home-second-body">
               <h3 className="body-2">This is a work-in-progress. <br></br> What you're about to see only
                  includes the <strong>Subway Station </strong> and the
                  <strong> Arrival Time </strong>.
               </h3>
               <h3 className="body-3">Again, this is a work in progress</h3>
            </div>
         </div>
      </div>
   )
}

export default Home;