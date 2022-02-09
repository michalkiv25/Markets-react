import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Auth0Provider } from "@auth0/auth0-react";

const domain= 'dev-po3ux2mn.us.auth0.com';
const cliendId= '8OSIgJZgcSeOKoKmrwOnxqzBR2NMPEr6';

ReactDOM.render(
  <Auth0Provider
    domain={domain}
    clientId={cliendId}
    redirectUri={window.location.origin}>
  <App />
</Auth0Provider>,
  document.getElementById('root')
);


