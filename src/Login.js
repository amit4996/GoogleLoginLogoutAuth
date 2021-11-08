
import { useState } from "react";
import {GoogleLogin,GoogleLogout } from "react-google-login";
require('dotenv').config()


const Login =()=>{
    const [showLoginButton,setShowLoginButton]=useState(true);
    const [showLogoutButton,setShowLogoutButton]=useState(false);
    
    const onLoginSuccess=(res)=>{
    console.log("Login Successfull",res.profileObj)
   setShowLoginButton(false)
   setShowLogoutButton(true)
}

   const onFailureSuccess=(res)=>{
     console.log("Login Failed",res)
   }

   const onSignoutSuccess=()=>{
       alert("Signed out Successfully")
       setShowLoginButton(true)
       setShowLogoutButton(false)
       console.clear()
   }
 
   return(
       <div>
        {showLoginButton?
        <GoogleLogin
    clientId={process.env.REACT_APP_CLIENT_ID}
    buttonText="Login"
    onSuccess={onLoginSuccess}
    onFailure={onFailureSuccess}
    cookiePolicy={'single_host_origin'}
    />:null }

     {showLogoutButton?
        <GoogleLogout
      clientId="623615460174-undrui8pi574v6qqtra0vo35vr58olqr.apps.googleusercontent.com"
      buttonText="Logout"
      onLogoutSuccess={onSignoutSuccess}
    >
    </GoogleLogout>:null}
       </div>
   )

}

export default Login;