import './App.css';
import React, {useState} from 'react';
import LoginButton from './Components/login';
import LogoutButton from './Components/logout';
import {useEffect} from 'react';
import {gapi} from 'gapi-script';
import Home from './Components/Home';
import SupportAdmin from './Components/SupportAdmin';
import Nav from './Components/Nav';
import Gallery from './Components/Gallery';
import ContactForm from './Components/Contact';
import About from './Components/About';

const clientId = "522260929576-gn6staot2clfdhe808nvsi05elqcfhdf.apps.googleusercontent.com"




function App() {

  const [categories] = useState([
    {
      name: 'CMS',
      description: 'Drupal and Wordpress Sites and web apps built using the CMS Drupal',
    },
    { name: 'NodeJS', description: 'NodeJS for backend development' },
    { name: 'PlainScript', description: 'Built on vanilla JS, HTML, CSS' },
    { name: 'FutureProj', description: 'Projects planned for the future' },
  ]);

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

  const [currentCategory, setCurrentCategory] = useState(categories[0]);

  const [contactSelected, setContactSelected] = useState(false);



  return (
    <div className="App">
  <Nav
        categories={categories}
        setCurrentCategory={setCurrentCategory}
        currentCategory={currentCategory}
        contactSelected={contactSelected}
        setContactSelected={setContactSelected}
      ></Nav>

<main>
        {!contactSelected ? (
          <>
            <Gallery currentCategory={currentCategory}></Gallery>
            <About />
          </>
        ) : (
            <ContactForm></ContactForm>
          )}
      </main>


    <React.StrictMode>
    { path.indexOf('/support') === -1 ? <Home /> : <SupportAdmin /> }
  </React.StrictMode>,
    <LoginButton />
    <LogoutButton />
     
    </div>
  );
}

export default App;
