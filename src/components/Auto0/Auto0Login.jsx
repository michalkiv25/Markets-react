import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

//Imports from the project
import './Auto0Login.css'


const Auto0Login = () => {
    const { loginWithRedirect, isAuthenticated } = useAuth0();

    
    return (
      !isAuthenticated &&(
      <button 
        className="auto0Login" 
        onClick={() => {loginWithRedirect()}}>
        Log-In Auto0
      </button>)
    )
  };

export default Auto0Login;
