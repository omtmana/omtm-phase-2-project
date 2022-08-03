import React, { useState, useEffect } from "react";
import HelpFormSubmit from "./HelpFormSubmit";

const Help = () => {
   const [firstName, setFirstName] = useState("")
   const [lastName, setLastName] = useState("")
   const [email, setEmail] = useState("")
   const [textBox, setTextBox] = useState("")
   const [comment, setComment] = useState([])

   useEffect(() => {
      fetch('http://localhost:3000/credentials')
         .then((res) => res.json())
         .then((newDataArray) => { setComment(newDataArray) })
   }, [])

   const handleAddComment = (newComment) => {
      const updatedCommentSection = [...comment, newComment]
      setComment(updatedCommentSection)
      console.log(newComment)
   }

   const handleSubmit = ((e) => {
      e.preventDefault()
      fetch('http://localhost:3000/credentials', {
         method: "POST",
         headers: {
            "Content-Type": "application/json"
         },
         body: JSON.stringify({
            firstName: firstName,
            lastName: lastName,
            email: email,
            textBox: textBox
         }),
      })
         .then((res) => res.json())
         .then((newComment) => handleAddComment(newComment))
   })

   console.log(firstName, lastName, email, textBox)

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
         <div>
            {
               comment.map((data) => {
                  return <HelpFormSubmit key={data.id} data={data} />
               })
            }
         </div>
      </div>
   )
}

export default Help;