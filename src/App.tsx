import React, { useState } from 'react';
import './App.css';
import { NavBar } from './components/NavBar'
import { Header } from './components/Header'  
import { EntriesPage } from './components/EntriesPage';
import { Footer } from './components/Footer';

const page0 = require(`./resources/concordance/page0.json`)

function App() {

  const [page, setPage] = useState(0)
  const [data, setData] = useState(page0)
  console.log(data)

  function handleSetPage(value: number) {
    setPage(value)
    setData(require(`./resources/concordance/page${value}.json`))
  }

  return (
    <>
      <div id="top">
        <Header/>
        <div id="space"/>
      </div>
      <NavBar/>
      <div id="body">
        <EntriesPage 
          data={data} 
        />
      </div>
      <div id="space"/>
      <Footer 
        page={page} 
        setPage={handleSetPage}
        maxPage={537}
      />
    </>
  );
}

export default App;
