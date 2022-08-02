import React from "react";
import SubwayCard from "./SubwayCard"

const Subway = ({stations}) => {
   return (
      <div className="subway-station-container">
         {
            stations.map((station) => {
               return <SubwayCard key={station.id} subway={station} />
            })
         }
      </div>
   )
}

export default Subway;