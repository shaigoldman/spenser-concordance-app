import React from 'react';
import './App.css';

let concordance = require('./concordance.json')
console.log(concordance)

interface OccurenceI {
  book: number
  canto: string
  stanza: number
  line_num: number
  whole_line: string
}

const Occurence = ({occurence}: {occurence: OccurenceI}) => {
  return (
    <p>
      Book {occurence.book}, {occurence.canto}, {occurence.stanza}.
      {occurence.line_num}: "{occurence.whole_line}"
    </p>
  )
}

interface EntryI {
  word: string
  occurences: OccurenceI[]
}

const Entry = ({entry}: {entry: EntryI}) => {
  return (
    <div>
      <b>{entry.word}</b>
      {entry.occurences.map((e) => <Occurence occurence={e} />)}
    </div>
  )
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Entry entry={concordance[0]}/>
      </header>
    </div>
  );
}

export default App;
