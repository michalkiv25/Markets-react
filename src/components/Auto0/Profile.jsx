import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

import './Auto0Login.css'

const Profile = ({singIn,dislogOut}) => {
  const { user, isAuthenticated, isLoading } = useAuth0();


  return (
    isAuthenticated &&  (
      <div className="profile" onClick={()=>{singIn();dislogOut()}}>
        <img src={user.picture} alt={user.name} className="profile-img" />
        <h2 className="profileImg">{user.name}</h2>
        <p className="profileimg">{user.email}</p>
      </div>
    )
  );
};

export default Profile;