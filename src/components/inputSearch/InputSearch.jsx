import React from 'react';

//Imports from the project
import './InputSearch.css';

const InputSearch = ({
  inputExchange, 
  inputSymbol,
  inputexchangeTime,
  inputchregularMarket,
  inputTime}) => {
 
  return (
    <div className='all-input'> 
        <input 
          type="text" 
          onChange={inputExchange} 
          className="input" 
          placeholder='Exchange...'/>
        <input 
          type="text" 
          onChange={inputSymbol} 
          className="input" 
          placeholder='Symbol...'/>
        <input 
          type="text" 
          onChange={inputexchangeTime} 
          className="input" 
          placeholder='Exchange Time zone Name...'/>
        <input 
          type="text" 
          onChange={inputchregularMarket} 
          className="input" 
          placeholder='Regular Market Change...'/>
        <input 
          type="text" 
          onChange={inputTime} 
          className="input" 
          placeholder='Regular Market Time...'/>
   </div>
  );
};

export default InputSearch;
