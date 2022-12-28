import React from 'react';
import './App.css';
import { EntryI, Entry } from './components/Entry'
import { NavBar } from './components/NavBar'
import { Header } from './components/Header'  
import { EntriesPage } from './components/EntriesPage';

const concordance: EntryI[] = require('./resources/concordance.json')
const pageSize = 10

function App() {
  return (
    <>
    <NavBar/>
    <Header/>
    <EntriesPage concordance={concordance} start={0} size={pageSize}/>
    </>
  );
}

export default App;
