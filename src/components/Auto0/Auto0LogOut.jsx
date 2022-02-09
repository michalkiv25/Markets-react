import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

//Imports from the project
import './Auto0Login.css'

const Auto0LogOut = () => {
  const { logout, isAuthenticated } = useAuth0();

  return (
    isAuthenticated &&(
    <button
      className="auto0LogOut" 
      onClick={() => logout({ returnTo: window.location.origin })}>
      Log-Out Auto0
    </button>
    )
  );
};

export default Auto0LogOut;