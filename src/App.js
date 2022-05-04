import './App.css';
import React from 'react';
import LoginButton from './Components/login';
import LogoutButton from './Components/logout';
import {useEffect} from 'react';
import {gapi} from 'gapi-script';
import Home from './Components/Home';
import SupportAdmin from './Components/SupportAdmin';

const clientId = "522260929576-gn6staot2clfdhe808nvsi05elqcfhdf.apps.googleusercontent.com"


function App() {

  useEffect(() => {
    function start() {
      gapi.client.init({
        clientId: clientId,
        scope: ""
      })
    };
    gapi.load('client:auth2', start)
  })
  const path = window.location.pathname


  return (
    <div className="App">
    <React.StrictMode>
    { path.indexOf('/support') === -1 ? <Home /> : <SupportAdmin /> }
  </React.StrictMode>,
    <LoginButton />
    <LogoutButton />
     
    </div>
  );
}

export default App;
