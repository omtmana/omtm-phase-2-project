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
      // console.log(newComment)
   }

   const handleSubmit = ((e) => {
      e.preventDefault()
      setFirstName('');
      setLastName('');
      setEmail('');
      setTextBox('');

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

   return (
      <div className="help-container">
         <div className="form-help-container">
            <h1 style={{fontFamily:'geneva', textAlign:'left' , letterSpacing:'.25em' , fontSize:'4em' , }}>HAVE QUESTIONS?</h1>
            <form onSubmit={handleSubmit} className="handle-submit-help-form">
               <input className="help-first-name" style={{ fontFamily: 'geneva', letterSpacing: '0.2em' }}
                  type="text"
                  name="first name"
                  placeholder="First Name"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
               />
               <input className="help-last-name" style={{ fontFamily: 'geneva', letterSpacing: '0.2em' }}
                  type="text"
                  name="last name"
                  placeholder="Last Name"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
               />
               <input className="help-email" style={{ fontFamily: 'geneva', letterSpacing: '0.2em' }}
                  type="text"
                  name="email"
                  placeholder="Email Address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
               />
               <input className="help-text-box" style={{ fontFamily: 'geneva', letterSpacing: '0.2em' }}
                  type="text"
                  name="text box"
                  placeholder="Write your questions here"
                  value={textBox}
                  onChange={(e) => setTextBox(e.target.value)}
               />
               <button className="submit-button" style={{ fontFamily: 'geneva', letterSpacing: '0.2em' , backgroundColor:'white' }}>Submit</button>
            </form>
         </div>
         <div className="help-comment-form">
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