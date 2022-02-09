import React from 'react';

//Imports from the project
import './MarketDescription.css'

const MarketDescription = ({oneItemMarket,descriptionMarket}) => {
  //destructuring of market
  const {
    exchange,
    exchangeDataDelayedBy,
    exchangeTimezoneName,
    exchangeTimezoneShortName,
    firstTradeDateMilliseconds,
    fullExchangeName,
    gmtOffSetMilliseconds,
    language,
    market,
    marketState,
    priceHint,
    quoteSourceName,
    quoteType,
    region,
    regularMarketChangePercent,
    regularMarketPrice,
    regularMarketTime,
    shortName,
    sourceInterval,
    symbol,
    tradeable,
    triggerable
  } =oneItemMarket

  return (
    <div className='pop-up' >  
        <div className='pop-up-inner' onClick={()=>{descriptionMarket()}}> 
          <h3>All market information </h3>                         
          <p className='pop-up-inner p'>exchange: 
            <strong className='details'>{exchange}</strong>
          </p>
          <p className='pop-up-inner p'>exchangeDataDelayedBy: 
            <strong className='details'>{exchangeDataDelayedBy}</strong> 
          </p>
          <p className='pop-up-inner p'>exchangeTimezoneName: 
            <strong className='details'>{exchangeTimezoneName}</strong>
          </p>
          <p className='pop-up-inner p'>exchangeTimezoneShortName: 
            <strong className='details'>{exchangeTimezoneShortName}</strong>
          </p>
          <p className='pop-up-inner p'>firstTradeDateMilliseconds:
            <strong className='details'> {(firstTradeDateMilliseconds)}</strong>  
          </p>
          <p className='pop-up-inner p'>fullExchangeName: 
            <strong className='details'> {fullExchangeName}</strong>
          </p>
          <p className='pop-up-inner p'>gmtOffSetMilliseconds: 
            <strong className='details'>{gmtOffSetMilliseconds}</strong>
          </p>                        
          <p className='pop-up-inner p'>language: 
            <strong className='details'>{language}</strong> 
          </p>
          <p className='pop-up-inner p'>market: 
            <strong className='details'>{market}</strong>
          </p>
          <p className='pop-up-inner p'>market State: 
            <strong className='details'>{marketState}</strong> 
          </p>     
          <p className='pop-up-inner p'>marketState: 
            <strong className='details'>{priceHint}</strong>
          </p>
          <p className='pop-up-inner p'>quoteSourceName: 
            <strong className='details'>{quoteSourceName}</strong> 
          </p>
          <p className='pop-up-inner p'>quoteType: 
            <strong className='details'>{quoteType}</strong> 
          </p>
          <p className='pop-up-inner p'>region:  
            <strong className='details'>{region}</strong> 
          </p>
          <p className='pop-up-inner p'>regularMarketChangePercent-raw: 
            <strong className='details'>{(regularMarketChangePercent.raw).toFixed(2)}</strong>
           </p>
          <p className='pop-up-inner p'>regularMarketChangePercent-fmt: 
            <strong className='details'>{regularMarketChangePercent.fmt}</strong> 
          </p>
          <p className='pop-up-inner p'>regularMarketPrice-raw: 
            <strong className='details'>{regularMarketPrice.raw}</strong> 
          </p>
          <p className='pop-up-inner p'>regularMarketPrice-gmt: 
            <strong className='details'>{regularMarketPrice.fmt}</strong> 
          </p>
          <p className='pop-up-inner p'>regularMarketTime-raw: 
            <strong className='details'>{regularMarketTime.raw}</strong> 
          </p>
          <p className='pop-up-inner p'>regularMarketTime-fmt: 
            <strong className='details'> {regularMarketTime.fmt}</strong>
          </p>
          <p className='pop-up-inner p'>shortName: 
            <strong className='details'>{shortName}</strong>
          </p>
          <p className='pop-up-inner p'>sourceInterval: 
            <strong className='details'>{sourceInterval}</strong> 
          </p>
          <p className='pop-up-inner p'>symbol: 
            <strong className='details'> {symbol}</strong>
          </p>
          {!tradeable ?
            (
            <p className='pop-up-inner p'>tradeable:
              <strong className='details'> false </strong>
            </p> 
            )
            :
            (
            <p className='pop-up-inner p'>tradeable:
              <strong className='details'> true </strong>
            </p>
            )
          }

         {!triggerable ?
          (
          <p className='pop-up-inner p'>triggerable: 
            <strong className='details'>false</strong> 
          </p>
          )
          :
          (<p className='pop-up-inner p'>triggerable: 
           <strong className='details'>true</strong> 
          </p>
          )
        }
        </div>
    </div>
  );
};

export default MarketDescription;
