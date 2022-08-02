import React from "react";

const SubwayCard = ({subway}) => {
   const{name} = subway
   return(
      <div className="subway-card">
         <h4>{name}</h4>
      </div>
   )
}

export default SubwayCard;