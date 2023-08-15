import React, { useState } from "react";

// import firebase from "./Firebase";
// import "firebase/auth";
import "./Signup.css"; // Import the signup.css file
import {auth} from "./Firebase"
import { createUserWithEmailAndPassword } from "firebase/auth";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

//   const handleSignup = async () => {
//  console.log(email,password)
//  await createUserWithEmailAndPassword(auth,email,password).then((res)=>{
//   console.log(res)
//   console.log("hello")
//  }).catch((err)=>{
//   console.log(err)
//  })
//   };


  const handleSignup = async () => {
    console.log(email, password);
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;
      console.log("User signed up:", user);
    } catch (error) {
      console.error("Signup error:", error);
    }
  };

  return (
    <div className="signup-container">
      <h2>Register</h2>
      <hr></hr>
      <input
        type="name"
        placeholder="Name"
       
        // onChange={(e) => setEmail(e.target.value)}
        className="signup-input"
      />
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="signup-input"
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="signup-input" 
      />

<input
        type="text"
        placeholder="MobileNumber"
       
        className="signup-input" 
      />
      {/* <FontAwesomeIcon icon="fa-brands fa-google" /> */}
     
      <button onClick={handleSignup} className="signup-button">Signup</button> 
      </div>
  );
};

export default Signup;

