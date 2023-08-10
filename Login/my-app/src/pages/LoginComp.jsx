import React, { useState } from 'react';
import './Login.css'
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import firebase from 'firebase/app';
import 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBz3D6RJWcCtw23EJbhxSVjYBPQSoGEIOk",
  authDomain: "travel-e0225.firebaseapp.com",
  projectId: "travel-e0225",
  storageBucket: "travel-e0225.appspot.com",
  messagingSenderId: "864428671296",
  appId: "1:864428671296:web:c37189396af590ab3a7aa5",
  measurementId: "G-NCVJB60P97"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const LoginComp = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleLogin = async (event) => {
    event.preventDefault();
  
    try {
      await firebase.auth().signInWithEmailAndPassword(username, password);
      // Handle successful login here (e.g., redirect user or show a success message)
      alert("Welcome")
    } catch (error) {
      // Handle login error here (e.g., display error message)
      console.error('Error logging in:', error);
    }
  };

  return (
    <div className='back'>
    <div className="login-container">
      <div className="login-header">
        <h2>Login to Your Account</h2>
      </div>
      <form className="login-form" onSubmit={handleLogin}>
        <input
          className="login-input"
          type="text"
          placeholder="Username"
          value={username}
          onChange={handleUsernameChange}
        />
        <input
          className="login-input"
          type="password"
          placeholder="Password"
          value={password}
          onChange={handlePasswordChange}
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
