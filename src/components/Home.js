import React from "react";

const Home = () => {
   return (
      <div className="home-main-container">
         <div className="home-header">
            <div className="head-circle">
               <h1 className="home-head" style={{ fontFamily:'geneva' , letterSpacing:'0.25em' , paddingLeft:'0.25em'}}>OMT</h1>
            </div>
            <div className="home-body" style={{height: '5em'}}>
               <h1 className="home-body-header" style={{fontFamily:'geneva' , letterSpacing:'0.25em'}}>WHAT WE DO</h1>
               <h3 className="home-body-text" style={{ fontFamily: 'geneva', letterSpacing: '0.25em' , fontSize:'30px' }}>An up-and-coming tech startup in New York City
                  that aims to provide you a better and smoother commute.<br></br>
                  How? Well, by informing you <br></br>the precise and accurate time of
                  the subway's arrival
               </h3>
            </div>
         </div>
         <div className="home-main-body">
            <h2 className="body-1" style={{ fontFamily: 'geneva', letterSpacing: '0.2em' }}>NOTE:</h2>
            <div className="home-second-body">
               <h3 className="body-2" style={{ fontFamily: 'geneva', letterSpacing: '0.15em' }}>This is a work-in-progress. <br></br> What you're about to see only
                  includes the <strong>Subway Station </strong> and the
                  <strong> Arrival Time </strong>.
               </h3>
               <h3 className="body-3" style={{fontFamily:'geneva'}}>AGAIN, THIS IS A WORK-IN-PROGRESS</h3>
            </div>
         </div>
      </div>
   )
}

export default Home;