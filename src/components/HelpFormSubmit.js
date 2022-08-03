import React from "react";

const helpFormSubmit = ({ data }) => {
   const { firstName, lastName, email, textBox } = data
   return (
      <div className="help-form-submit">
         <h5>{firstName} {lastName}</h5>
         <h6>{email}</h6>
         <p>{textBox}</p>
      </div>
   )
}

export default helpFormSubmit;