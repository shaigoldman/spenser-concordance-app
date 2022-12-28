import React from 'react';
import './App.css';
import { EntryI, Entry } from './components/Entry'
import { NavBar } from './components/NavBar'
import { Header } from './components/Header'  

const concordance: EntryI[] = require('./resources/concordance.json')

function App() {
  return (
    <>
    <NavBar/>
    <Header/>
    <div className="Entry-List">
      {concordance.slice(0, 100).map(
        (e, i) => <Entry entry={e} key={"entry"+i}/>)}
    </div>
    </>
  );
}

export default App;
