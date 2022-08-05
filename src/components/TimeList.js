import moment from "moment";
import React from "react";
import { mockComponent } from "react-dom/test-utils";

const TimeList = ({arrivals}) => {
   let arrivalColor;
   const currentTime = new Date().toLocaleTimeString('en-US' , {
      hour12: false,
   });

   // console.log(moment.utc(currentTime))

   // let x = new Date()
   // let y = moment.utc(x)

   // console.log('x variable' , x)
   // console.log('y variable' , y)

   // console.log(JSON.stringify(currentTime) - JSON.stringify(arrivals))



   if (currentTime > arrivals ) {
      arrivalColor = 'gray'
   } else if (currentTime == arrivals) {
      arrivalColor = 'red'
   } 

   return(
      <div className="arrival-card" style={{ color: `${arrivalColor}` , border:'white' , backgroundColor:'white'}}>
         <h3>{arrivals}</h3>
      </div>
   )
}

export default TimeList;