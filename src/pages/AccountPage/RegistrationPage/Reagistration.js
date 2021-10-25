import React, { useState } from 'react';
import '../LoginPage/Login.css';
import {Link, useLocation, useHistory} from 'react-router-dom';

import GoogleIcon from '../../images/google.cadee8cd.png';
import useAuth from '../../../customHooks/useAuth/useAuth';
import { getAuth, createUserWithEmailAndPassword,signInWithEmailAndPassword,updateProfile} from "firebase/auth";

const Reagistration = () => {
 
const history = useHistory();

const {user, handleGoogleSignin,} = useAuth();
if(user.email){
    history.push('/');
 }
const location = useLocation();
const redirectUrl = location.state?.from || '/home';
// Handle google Signup by taking info from Context api
const handleGoogleLogin = () => {
    handleGoogleSignin()
    .then(res => {
          history.push(redirectUrl);
    })
}


 // registration with email and password
 const [name,setName]=useState('');
const [email, setEmail] = useState('');
const [password, setPassword] = useState('');
const [error,setError]=useState('');
const [isLogin,setIsLogin]=useState(false);

const auth = getAuth();

const toggleLogin =e=>{
    setIsLogin(e.target.checked);
}

const handleNameChange = e => {
    setName(e.target.value);
}
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



// Handle signup form
 const handleSignupForm = e => {
     e.preventDefault();
     if(password.length<6){
         setError('Password must be 6 Character long.')
         return;
     }
      createUserWithEmailAndPassword(auth, email, password)
      .then((result) => {
          const user=result.user
          console.log(user);
          setError('');
      })
      .catch(error=>{
          setError(error.message);
      })
    
  if(isLogin){
   processLogin(email,password);   
  } else {
      registerNewUser(email,password);
  } 
      
}
const processLogin=(email,password)=>{
    signInWithEmailAndPassword(auth,email,password)
    .then(result=>{
        const user=result.user;
        console.log(user);
        setError('');
    })
    .catch(error=>{
        setError(error.message);
    })
}
const registerNewUser=(email,password)=>{
    createUserWithEmailAndPassword(auth, email, password)
    .then((result) => {
        const user=result.user;
        console.log(user);
        setError('');
        setUserName();
    })
    .catch(error=>{
        setError(error.message);
    })
  
}
const setUserName=()=>{
    updateProfile(auth.currentUser,{displayName:name})
    .then(result =>{})
}

return (
    <div className="loginArea">
         <div className="container">
             <div className="row">
                 <div className="col-lg-6 col-md-6 col-sm-12">
                     
                 </div>
                 <div className="col-lg-5 col-md-6 col-sm-12">
                      <div className="loginForm">
                          <h2 className="doctorName">{isLogin?'Login':'Create new Account'}</h2>
                          <form onSubmit={handleSignupForm}>
                          <div class="col-12">
    {/* <label for="inputAddress" className="form-label"></label> */}
    <input type="text"  onBlur={handleNameChange} placeholder="Enter Your Name"/>
  </div>
    
                              <input type="email" onBlur={handleEmail} placeholder="Enter your email" required /> <br />
                              <input type="password" onBlur={handlePassword} placeholder="Enter your password" required /> <br />

                              <div className="row mb-3">{error}</div>
                            
                             <div className="form-check row mb-3 ms-4">
                                  <input onChange={toggleLogin} className="form-check-input" type="checkbox" name="" id="gridCheck1" />
                                  <label  className="form-check-label"  htmlFor="gridCheck1">Already Registered?</label>
                              </div>
                             <div className="mb-3"> <button className="submitBtn">{isLogin?'Login':'Register'}</button
                              ></div>
                              <span onClick={handleGoogleLogin} className="apiProvider"><img src={GoogleIcon} alt="apiImg" />Signin with Google</span>
                        
                          </form> <br />
                          <span style={{ color: "#444", fontWeight: "500", marginTop: "10px"}}>Already have an account ?<Link to="/account"> Login</Link></span>
                      </div>
                 </div>
             </div>
         </div>
    </div>
);
};

 export default Reagistration;


