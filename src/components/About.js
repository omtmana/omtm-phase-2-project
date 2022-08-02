import React , {useState} from "react";

const About = () => {
   const[firstName, setFirstName]=useState("")
   const[lastName, setLastName]=useState("")
   const[email , setEmail]=useState("")

   const handleSubmit = ((e) => {
      e.preventDefault()
   })

   return(
      <div className="about-container">
         {/* <h1 className="about-content">This is the About page</h1> */}
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
            <button>Submit</button>
         </form>
      </div>
   )
}

export default About;