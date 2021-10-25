import React, { useState } from 'react';
// import './Login.css';
import './Login.css';
import {Link, useLocation, useHistory } from 'react-router-dom';

import GoogleIcon from '../../images/google.cadee8cd.png';
import useAuth from '../../../customHooks/useAuth/useAuth';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

const Login = () => {
    const history = useHistory();
    const {user, handleGoogleSignin,} = useAuth(); 
    
    const location = useLocation();
    const redirectUrl = location.state?.from || '/home';
    if(user.email){
       history.push(redirectUrl);
    }else if(!user.email){
    }

    // Handle google login by taking info from useFirebase
    const handleGoogleLogin = () => {
          handleGoogleSignin()
          .then(res => {
                history.push(redirectUrl);
          })
    }
   

  // Store auth in auth variable
   const auth = getAuth();

  // Take some of state for storing email and password 
   const [email, setEmail] = useState('');
   const [password, setPassword] = useState('');
  
   // Handle email field
   const handleEmail = e => {
         const email = e.target.value;
         setEmail(email);
   }

   // Handle password field
   const handlePassword = e => {
       const password = e.target.value;
       setPassword(password);
   }
   // Handle sign in with existing user info
   const handleSignin = e => {
         signInWithEmailAndPassword(auth, email, password)
         .then(res => {

         });
         e.preventDefault();
   }
   
    return (
        <div className="loginArea">
             <div className="container">
                 <div className="row">
                     <div className="col-lg-6 col-md-6 col-sm-12">
                     </div>
                     <div className="col-lg-5 col-md-6 col-sm-12">
                          <div className="loginForm">
                              <h2 className="doctorName">Login Here</h2>
                              <form onSubmit={handleSignin}>
                                  <input type="email" onBlur={handleEmail} placeholder="Enter your email" required /> <br />
                                  <input type="password" onBlur={handlePassword} placeholder="Enter your password" required /> <br />
                                  <button className="submitBtn">Login</button> <br />
                                  <span onClick={handleGoogleLogin} className="apiProvider"><img src={GoogleIcon} alt="apiImg" />Signin with Google</span>
                                 
                              </form> <br />
                              <span style={{ color: "#444", fontWeight: "500", marginTop: "10px"}}>Are you new user ? <Link to="/registration">Register Here</Link></span>
                          </div>
                     </div>
                 </div>
             </div>
        </div>
    );
};

export default Login;