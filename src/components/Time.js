// there's a button you can click that will bring you back to the home page 
import { render } from "@testing-library/react";
import React from "react";


// import React , {setState , state , getTime , componentDidMount} from "react";

const Time = () => {
//    state = {
//       curTime: ""
//    };

//    componentDidMount(() => {
//       this.getTime();
//    })

//    getTime = () => {
//       const today = new Date(),
//          curTime = today.getHours() + ':' + today.getMinutes() + today.getSeconds();
//       this.setState({ curTime })
//    }
   return (
      <div className="time-container">
         <div className="time-head">
            <p>Current Time (H:i:s) : {this.state.curTime}</p>
         </div>
      </div>
   )
}

export default Time;