import React from "react";
import SubwayCard from "./SubwayCard"

const Subway = ({ stations, searchStation, onSearchStation, displayedStations  }) => {
   return (
      <div>
         <div>
            <input
            style={{fontFamily:'geneva' , fontSize:'1.2em' , letterSpacing: '.7em'}}
               className="searchbar"
               type="text"
               name="search"
               placeholder="Search Station"
               value={searchStation}
               onChange={(e) => onSearchStation(e.target.value)}
            />
         </div>
         <div className="subway-station-container">
            {
               displayedStations.map((station) => {
                  return <SubwayCard key={station.id} subway={station} />
               })
            }
         </div>
      </div>
   )
}

export default Subway;