import React from "react";

const helpFormSubmit = ({ data }) => {
   const { firstName, lastName, email, textBox } = data
   return (
      <div style={{ paddingLeft:'5em'}}>
         <div className="help-form-submit" style={{ backgroundColor: 'white', border: 'white', width: '62em' , height:'10em' , paddingTop:'0.5em' , textAlign:'left'}}>
            <h2 style={{ fontFamily: 'geneva', letterSpacing: '0.2em' , color:'darkblue' , }}>{firstName} {lastName}</h2>
            <h6 style={{ fontFamily: 'geneva', letterSpacing: '0.2em' }}>{email}</h6>
            <p style={{ fontFamily: 'geneva', letterSpacing: '0.1em' , fontSize:'1.2em'}}>{textBox}</p>
         </div>
      </div>
   )
}

export default helpFormSubmit;