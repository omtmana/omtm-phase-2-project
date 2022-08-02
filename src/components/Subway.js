import React from "react";
import SubwayCard from "./SubwayCard"

const Subway = ({stations}) => {
   return (
   <div>
      <div className="searchbar">
            <input
            type="text"
            name="search"
            placeholder="Search Station" 
            />
      </div>
      <div className="subway-station-container">
         {
            stations.map((station) => {
               return <SubwayCard key={station.id} subway={station} />
            })
         }
      </div>
   </div>
   )
}

export default Subway;