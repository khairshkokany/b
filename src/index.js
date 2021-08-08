import React from 'react';
import ReactDOM from 'react-dom';
import { Auth0Provider } from '@auth0/auth0-react';
// import env from "react-dotenv";
import App from './App';
ReactDOM.render(
  <Auth0Provider
    domain="khair-shkokany.eu.auth0.com"
    clientId="idzuaBWW0PEfU3XRIHPccHUYdYVd1v7c"
    redirectUri={window.location.origin}
>
  <App />
</Auth0Provider>,
document.getElementById('app')
);
