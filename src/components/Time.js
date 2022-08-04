// there's a button you can click that will bring you back to the home page 
import React, { useEffect, useState } from "react";
import TimeList from "./TimeList";
import { useParams } from "react-router-dom";

const Time = ({ stations }) => {
   const params = useParams();
   const [currentTime, setCurrentTime] = useState('')
   const [arrivalTime, setArrivalTime] = useState([])
   // getting the date
   const d = new Date();
   let x1;
   const updateDate = () => {
      x1 = d.toUTCString();// changing the display to UTC string
      setCurrentTime(x1);
   }


   useEffect(() => {
      setTimeout(() => {
         updateDate()
      }, 1000)
   }, [currentTime, setCurrentTime, updateDate])

   useEffect(() => {
      fetch('https://mtaapi.herokuapp.com/stations')
         .then((res) => res.json())
         .then((stations) => {
         })
      console.log('stations', stations)
      fetch(`https://mtaapi.herokuapp.com/api?id=${params.id}`)
         .then((res) => res.json())
         .then((arrivalTime) => {
            setArrivalTime(arrivalTime.result.arrivals)
         })
   }, [])

   return (
      <div className="time-container">
         <div className="time-head">
            <h3>{currentTime}</h3>
         </div>
         <div className="time-body">
            {/* this is where the new api list will go */}
            {
               arrivalTime.map((arrival) => {
                  return <TimeList key={arrival.id} arrivals={arrival} />
               })
            }
         </div>
      </div>
   )
}

export default Time;