import React, { useState } from 'react';
import './App.css';
import { EntryI } from './components/Entry'
import { NavBar } from './components/NavBar'
import { Header } from './components/Header'  
import { EntriesPage } from './components/EntriesPage';
import { Footer } from './components/Footer';

const concordance: EntryI[] = require('./resources/concordance.json')
const pageSize = 10

function App() {

  const [page, setPage] = useState(0)

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
      <div id="space"/>
      <Footer 
        page={page} 
        setPage={setPage}
        maxPage={Math.ceil(concordance.length/pageSize)-1}
      />
    </>
  );
}

export default App;
