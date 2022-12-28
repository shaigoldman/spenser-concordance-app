import React from 'react';
import './App.css';
import { EntryI } from './components/Entry'
import { NavBar } from './components/NavBar'
import { Header } from './components/Header'  
import { EntriesPage } from './components/EntriesPage';
import { Footer } from './components/Footer';

const concordance: EntryI[] = require('./resources/concordance.json')
const pageSize = 10
let sticky = -1

window.onscroll = function () {

  console.log("herhe")

  const navbar = document.getElementById("navbar")
  const body = document.getElementById("body")

  if (sticky === -1) {
    sticky = navbar!.offsetTop
  }

  if (window.pageYOffset >= sticky) {
    navbar!.classList.add("sticky")
    body!.classList.add("sticky-pad")
  } else {
    navbar!.classList.remove("sticky");
    body!.classList.remove("sticky-pad")
  }
};

function App() {
  return (
    <>
      <div id="top">
        <Header/>
        <div id="space"/>
      </div>
      <NavBar/>
      <div id="body">
        <EntriesPage 
          concordance={concordance} 
          start={0} 
          size={pageSize}
        />
      </div>
      <Footer/>

    </>
  );
}

export default App;
