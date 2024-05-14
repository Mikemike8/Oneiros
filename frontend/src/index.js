import React from 'react';
import ReactDOM from 'react-dom';
import { Auth0Provider } from '@auth0/auth0-react';
import App from './App';
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <Auth0Provider
    domain="dev-3rssm0obxsti4mvd.us.auth0.com"
    clientId="NKGLCpPPDx8P32LOEpIgnBQwd6TBgbyO"
    redirectUri={window.location.origin}
  >
    <App />
  </Auth0Provider>
);
