import React from 'react';

//Imports from the project
import MarketItem from '../MarketItem/MarketItem';
import TitleList from '../TitleList/TitleList';


const MarketList = ({markets,descriptionMarket}) => {
  return (
    <div>
      <TitleList></TitleList>
      {
        markets.map((market,index) => <MarketItem key={index} market={market} descriptionMarket={descriptionMarket}></MarketItem>)
      }
    </div>
  );
};

export default MarketList;
