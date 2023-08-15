import React, { useState } from "react";
import {auth} from "./Firebase"
import { signInWithEmailAndPassword } from "firebase/auth";
const LoginComp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
   e.preventDefault();
    try {
      const userCredential = await signInWithEmailAndPassword (
        auth,
        email,
        password
      );
      const user = userCredential.user;
      console.log("User Logged in", user);
    } catch (error) {
      console.error("Signup error:", error);
    }
  };

  return (
    <div className='back'>
    <div className="login-container">
      <div className="login-header">
        <h2>Login Here</h2>
        <hr></hr>
      </div>
      <form className="login-form" onSubmit={handleLogin}>
        <input
          className="login-input"
          type="text"
          placeholder="Username"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          className="login-input"
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className="login-button" type="submit">
          Login
        </button>
      </form>
      <div className="login-link">
        <a href="#">Forgot Password?</a>
      </div>
    </div>
    </div>
  );
};

export default LoginComp;
