import React from 'react';
import './App.css';
import { Alignment, Card, Divider, H1, H2, H3, H4, H6, InputGroup, Navbar } from "@blueprintjs/core"
import { css } from "@emotion/react"
import spenserImg from './spenser.jpeg'

const BoldWordInLine = ({line, word}: {line: string, word: string}) => {
  const words = line.split(" ")
  return (
    <>
      {words.map((w, e) => w === word ? <b key={"word"+w+e}>{w + " "}</b> : <React.Fragment key={"word"+w+e}>{w + " "}</React.Fragment>)}
    </>
  )
}

interface OccurenceI {
  book: number
  canto: string
  stanza: number
  line_num: number
  whole_line: string
}

const Occurence = ({word, num, occurence}: {word: string, num: number, occurence: OccurenceI}) => {

  return (
    <Card className="Occurence">
      <H6>
        ({num}) Book {occurence.book}, {occurence.canto}, {occurence.stanza}.
        {occurence.line_num}
      </H6>
      <Divider/>
      "<BoldWordInLine line={occurence.whole_line} word={word} />"
    </Card>
  )
}

interface EntryI {
  word: string
  occurences: OccurenceI[]
}


const concordance: EntryI[] = require('./concordance.json')

const Entry = ({entry}: {entry: EntryI}) => {
  return (
    <div className="Entry">
      <Card elevation={2} css={css`width: 150px`}>
        <H4>Concordance Entry For "{entry.word}": </H4> 
        {entry.occurences.length} total:
        <div className='Occurence-List'>
          {entry.occurences.map((e, i) => <Occurence key={entry.word + i} word={entry.word} num={i+1} occurence={e} />)}
        </div>
      </Card>
    </div>
  )
}

const NavBar = () => <Navbar fixedToTop>
<Navbar.Group align={Alignment.LEFT} className="Header">
  <Navbar.Heading className='Title-Name'>
    <h2>Spenser Concordance</h2>
  </Navbar.Heading>
  <Navbar.Divider/>
  <div className='Search-Bar'>
  <InputGroup
    type="search"
    placeholder="search a word..."
    fill
    leftIcon="search"
  />
  </div>
</Navbar.Group>
</Navbar>

const Header = () => <div className="Title">
  <H1>Spenser Concordance</H1>
  <H4>An Online Concordance For the Works</H4>
  <H4>Of Edmund Spenser</H4>
  <H6>By Shai Goldman</H6>
  <img src={spenserImg} alt="Edmund Spenser" className="Image"/>
</div>

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
