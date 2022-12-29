import React, { useState } from 'react';
import './App.css';
import { NavBar } from './components/NavBar'
import { Header } from './components/Header'  
import { EntriesPage } from './components/EntriesPage';
import { Footer } from './components/Footer';
import { EntryI } from './components/Entry';
import { Index } from './Interfaces/Interfaces';

const index: Index = require('./resources/concordance/index.json')
const page0: EntryI[] = require(`./resources/concordance/page0.json`)

function App() {

  const [page, setPage] = useState(0)
  const [data, setData] = useState(page0)
  const [showFooter, setShowFooter] = useState(false)

  function handleSetPage(value: number) {
    setPage(value)
    setData(require(`./resources/concordance/page${value}.json`))
    document.getElementById("body")!.scrollIntoView(true)
    window.scrollBy(0, -100)
  }

  window.onscroll = function() {
    const top = document.getElementById("top")
    if (top) {
      const rect = top.getBoundingClientRect();
      if (rect.top < -100) {
        setShowFooter(true)
      }
      else {
        setShowFooter(false)
      }
    }
  };

  return (
    <>
      <div id="top">
        <Header/>
        <div className="space"/>
      </div>
      <NavBar setPage={handleSetPage} wordIndex={index.words} page={page}/>
      <div id="body">
        <EntriesPage 
          data={data}
          start={index.page_starts[page]}
        />
      </div>
      {showFooter && <>
        <div className="space"/>
        <Footer 
          page={page} 
          setPage={handleSetPage}
          maxPage={index.metadata.num_pages-1}
        />
      </>}
    </>
  );
}

export default App;
