import React from 'react';

//Imports from the project
import Auto0Login from '../Auto0/Auto0Login'
import Auto0LogOut from '../Auto0/Auto0LogOut'
import Profile from '../Auto0/Profile'


const Auto0 = ({singIn,dislogOut}) => {

  return (
    <div >
      <Auto0Login></Auto0Login>
      <Auto0LogOut  singIn={singIn}></Auto0LogOut>
      <Profile singIn={singIn} dislogOut={dislogOut}></Profile>
    </div>
  );
};

export default Auto0;
