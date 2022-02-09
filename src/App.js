import React, { useState, useEffect } from 'react';
import axios from "axios";
import { useAuth0 } from "@auth0/auth0-react";

//Imports from the project
import SingIn from './components/sing-in/SingIn';
import FromSuccess from './components/FromSuccess/FromSuccess';
import Auto0 from './components/AllAuto0/Auto0';
import './App.css';

const baseURL = "https://yfapi.net/v6/finance/quote/marketSummary?lang=en&region=US"; //

function App() {

  const {isLoading} = useAuth0(); //Until logged in displays loging useAuth0 Provided below
  const [markets,setmarkets] = useState([]) //All data from markets

  //Information from the filter
  const [searchExchange,setsearchExchange] = useState('')
  const [searchSymbol,setsearchSymbol] = useState('')
  const [searchexchangeTime,setsearchexchangeTime] = useState('')
  const [searchregularMarket,setsearchregularMarket] = useState('')
  const [searchregularTime,setsearchregularTime] = useState('')

  const [isLogin,setisLogin] = useState(false)//Boolean for user login
  const [isLoginAuto0,setisLoginAuto0] = useState(true)//Boolean for user login Auto0
  const [islogOut,setislogOut] = useState(false)//Boolean for log-Out- disappear

  useEffect(()=>{
    var options = {
      method: 'GET',
      url: baseURL,
      params: {modules: 'defaultKeyStatistics,assetProfile'},
      headers: {
        'x-api-key': 'Q4C35SMq5a2lTmmyEK7r438YHL43YIJFalxRlnZI'
      }
    };

    axios.request(options)
    .then(function (response) {
      console.log(response.data.marketSummaryResponse.result);
      setmarkets(response.data.marketSummaryResponse.result)
    })
    .catch(function (error) {
      console.error(error);
    });
  },[]);

  if (!markets){
    return <div>Loading...</div>;
  } ; 

  //Until logged in displays loging auto0
  if(isLoading){
    return <div>Loading...</div>;
  }


  //Function of the inputs
  const inputExchange = (event)=>{
    setsearchExchange(event.target.value)
  };

  const inputSymbol = (event)=>{
    setsearchSymbol(event.target.value)
  };

  const inputexchangeTime = (event)=>{
    setsearchexchangeTime(event.target.value)
  };

  const inputchregularMarket = (event)=>{
    setsearchregularMarket(event.target.value)
  };

  const inputTime = (event)=>{
    setsearchregularTime(event.target.value)
  };

  const clineInput = ()=>{
    setsearchExchange('')
    setsearchSymbol('')
    setsearchexchangeTime('')
    setsearchregularMarket('')
    setsearchregularTime('')
  }

  //5 filter of inputs
  const filterMarkets = markets.filter(market => {
    return (
      market.exchange.toLowerCase().startsWith(searchExchange.toLowerCase()) &&
      market.symbol.toLowerCase().startsWith(searchSymbol.toLowerCase()) &&
      market.exchangeTimezoneName.toLowerCase().startsWith(searchexchangeTime.toLowerCase()) &&
      market.regularMarketChange.fmt.toLowerCase().startsWith(searchregularMarket.toLowerCase()) &&
      market.regularMarketTime.fmt.toLowerCase().startsWith(searchregularTime.toLowerCase())
    )
  });

  //User login information for Markets
  const singIn = () => {
    isLogin === false ? setisLogin(true) : setisLogin(false)
  }

// disappear login auto0
  const auto0Login = ()=>{
    isLoginAuto0 === true ? setisLoginAuto0(false): setisLoginAuto0(true)
  }

  const dislogOut= ()=>{
    islogOut === false ? setislogOut(true) : setislogOut(false)
  }

  
  return (
    <div className="contanier">
      <div className="contanier-serch-header">
        <h1 className='contanier-title'>Markets</h1>
          <div className='contanier-Auto0'>
          {isLoginAuto0 && ( <Auto0 singIn={singIn} dislogOut={dislogOut}></Auto0>)}
          </div>
           {isLogin ? 
            <FromSuccess
              inputExchange={inputExchange}
              inputSymbol={inputSymbol}
              inputexchangeTime={inputexchangeTime}
              inputchregularMarket={inputchregularMarket}
              inputTime={inputTime}
              markets={filterMarkets}
              singIn={singIn}
              auto0Login={auto0Login}
              clineInput={clineInput}
              islogOut={islogOut}
              >
            </FromSuccess> 
            : 
            <SingIn 
              singIn={singIn} 
              setisLoginAuto0={setisLoginAuto0} 
              auto0Login={auto0Login}>
            </SingIn>
          }
        </div>
    </div>
  );
}

export default App;
