import React from 'react';
import './App.css';
import { Card, Divider, H2, H4, H6, InputGroup } from "@blueprintjs/core"
import { css } from "@emotion/react"

let concordance = require('./concordance.json')

interface OccurenceI {
  book: number
  canto: string
  stanza: number
  line_num: number
  whole_line: string
}

const Occurence = ({occurence, num}: {occurence: OccurenceI, num: number}) => {

  return (
    <Card className="Occurence">
      <H6>
        ({num}) Book {occurence.book}, {occurence.canto}, {occurence.stanza}.
        {occurence.line_num}
      </H6>
      <Divider/>
      "{occurence.whole_line}"
    </Card>
  )
}

interface EntryI {
  word: string
  occurences: OccurenceI[]
}

const Entry = ({entry}: {entry: EntryI}) => {
  return (
    <div className="Entry">
      <Card elevation={2} css={css`width: 150px`}>
        <H4>Concordance Entry For "{entry.word}": </H4> 
        {entry.occurences.length} total:
        <div>
          {entry.occurences.map((e, i) => <Occurence key={entry.word + i} num={i+1} occurence={e} />)}
        </div>
      </Card>
    </div>
  )
}

function App() {
  return (
    <>
    <div className="App">
      <InputGroup
        type="search"
        placeholder="search..."
        large
        fill
        leftIcon="search"
      />
    </div>
    <div className="App">
      <Entry entry={concordance[0]}/>
    </div>
    </>
  );
}

export default App;
