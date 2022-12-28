import React, { useState } from 'react';
import './App.css';
import { EntryI } from './components/Entry'
import { NavBar } from './components/NavBar'
import { Header } from './components/Header'  
import { EntriesPage } from './components/EntriesPage';
import { Footer } from './components/Footer';

const concordance: EntryI[] = require('./resources/concordance.json')
const pageSize = 10
let sticky = -1

function App() {

  const [navSticky, setNavSticky] = useState(false)
  const [page, setPage] = useState(0)

  window.onscroll = function () {
  
    const navbar = document.getElementById("navbar")
  
    if (sticky === -1) {
      sticky = navbar!.offsetTop
    }
  
    if (window.pageYOffset >= sticky) {
      setNavSticky(true)
    } else {
      setNavSticky(false)
    }
  };

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
          start={page*pageSize} 
          size={pageSize}
        />
      </div>
      {navSticky && 
        <Footer 
          page={page} 
          setPage={setPage}
          maxPage={Math.ceil(concordance.length/pageSize)-1}
        />}

    </>
  );
}

export default App;
