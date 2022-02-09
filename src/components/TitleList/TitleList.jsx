import React from 'react';

//Imports from the project
import './TitleList.css';


//Title of table Markets
const TitleList = () => {
  return (
    <div className='title-List'>
        <p className='title one'>Exchange</p>
        <p className='title two'>Symbol</p>
        <p className='title'>Exchange Time zone Name</p>
        <p className='title'>Rgular Market Change</p>
        <p className='title'>Rgular Market Time</p>
        
    </div>
  );
};
export default TitleList;
