import React,{useState} from 'react';

//Imports from the project
import InputSearch from '../inputSearch/InputSearch';
import MarketList from '../MarketList/MarketList';
import  './FromSuccess.css'
import MarketDescription from '../MarketDescription/MarketDescription';

const FromSuccess = ({
  inputExchange,
  inputSymbol,
  inputexchangeTime,
  inputchregularMarket,
  inputTime,
  markets,
  clineInput,
  singIn={singIn},
  islogOut={islogOut},
  auto0Login}) => {
  
  const [showDescription,setshowDescription] = useState(true)//Boolean for show Description item
  const [oneItemMarket,setoneItemMarket] = useState({})//One market object

  //unction that changes boolean View a description of a single market
  const descriptionMarket= (marketOneItem)=>{
    setoneItemMarket(marketOneItem)
    showDescription ? setshowDescription(false) : setshowDescription(true)
  }

  return (
    <div>
      <InputSearch 
        inputExchange={inputExchange} 
        inputSymbol={inputSymbol}
        inputexchangeTime={inputexchangeTime}
        inputchregularMarket={inputchregularMarket}
        inputTime={inputTime}>
      </InputSearch>
  
      {showDescription ?
         <MarketList 
          markets={markets} 
          descriptionMarket={descriptionMarket}>
         </MarketList> 
         :
        <MarketDescription 
          oneItemMarket={oneItemMarket} 
          descriptionMarket={descriptionMarket}>
        </MarketDescription>
      }

      {showDescription && !islogOut && (
        <button
          className='log-out-button' 
          type='submit' 
          onClick={()=>{singIn();clineInput();auto0Login()}}
          >Log-out
        </button>
      )}
      
    </div>
  );
};

export default FromSuccess;
