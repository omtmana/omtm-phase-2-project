import React from "react";

const TimeList = ({arrivals}) => {
   let arrivalColor;
   const currentTime = new Date().toLocaleTimeString('en-US' , {
      hour12: false,
   });
   // console.log(currentTime)
   // console.log(currentTime > arrivals)
   // console.log(currentTime)
   if (currentTime > arrivals ) {
      arrivalColor = 'gray'
   } else if (currentTime == arrivals) {
      arrivalColor = 'red'
   }

   return(
      <div className="arrival-card" style={{color:`${arrivalColor}`}}>
         <h3>{arrivals}</h3>
      </div>
   )
}

export default TimeList;