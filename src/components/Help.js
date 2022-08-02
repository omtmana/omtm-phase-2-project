import React, { useState } from "react";

const Help = () => {
   const [firstName, setFirstName] = useState("")
   const [lastName, setLastName] = useState("")
   const [email, setEmail] = useState("")
   const [textBox, setTextBox] = useState("")

   const handleSubmit = ((e) => {
      e.preventDefault()
   })

   return (
      <div className="help-container">
         <div className="form-help-container">
            <form onSubmit={handleSubmit}>
               <input
                  type="text"
                  name="first name"
                  placeholder="First Name"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
               />
               <input
                  type="text"
                  name="last name"
                  placeholder="Last Name"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
               />
               <input
                  type="text"
                  name="email"
                  placeholder="email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
               />
               <input
                  type="text"
                  name="text box"
                  placeholder="Write your questions here"
                  value={textBox}
                  onChange={(e) => setTextBox(e.target.value)}
               />
               <button>Submit</button>
            </form>
         </div>
      </div>
   )
}

export default Help;