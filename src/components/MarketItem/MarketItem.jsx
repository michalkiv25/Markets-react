import React from 'react';

//Imports from the project
import './MarketItem.css';

const MarketItem = ({market,descriptionMarket}) => {
  //destructuring of market
  const {exchange,symbol,exchangeTimezoneName, regularMarketChange,regularMarketTime}= market 

  return (
    <div>
      <div className='contanier'>
       <div className='columns' onClick={()=>{descriptionMarket(market)}}>
        <div className='exchangeSymbol'>
          <h1>{exchange}</h1>
          <p>{symbol}</p>
        </div>
        <div className='data'>
          <p className='exchangeTimezoneName'>{exchangeTimezoneName}</p>
          {regularMarketChange.fmt < 0 ? (
            <strong className='regularMarketChange red'>{regularMarketChange.fmt}</strong>
          ) : (<strong className='regularMarketChange green'>{regularMarketChange.fmt}</strong>)}
          <p className='regularMarketTime'>{regularMarketTime.fmt}</p>
        </div>
       </div> 
      </div>
    </div>
  );
};

export default MarketItem;
