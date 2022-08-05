import React from "react";
import {NavLink} from 'react-router-dom';
const SubwayCard = ({subway}) => {
   const{name, id} = subway
   return(
      <div style={{ textDecoration: 'none', fontFamily:'geneva' , fontSize:'1.2em' , border:'white'}} className="subway-card">
         <NavLink to={`/time/${id}`} style={{textDecoration: 'none', color: 'black', cursor: 'pointer'}}>
            <h4>{name}</h4>
         </NavLink>
      </div>
   )
}

export default SubwayCard;