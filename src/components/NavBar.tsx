import './NavBar.css'
import { Alignment, InputGroup, Navbar } from "@blueprintjs/core"
import { useState } from 'react'
import { WordIndex } from '../Interfaces/Interfaces'

interface NavBarProps {
  setPage: (val: number) => void;
  wordIndex: WordIndex
}

export const NavBar = ({setPage, wordIndex}: NavBarProps) => {

  const [searchVal, setSearchVal] = useState("")
  
  return (
    <div id="navbar">
      <Navbar>
        <Navbar.Group align={Alignment.LEFT} className="NavBar">
          <Navbar.Heading className='Title-Name'>
            <h2>Spenser Concordance</h2>
          </Navbar.Heading>
          <Navbar.Divider/>
          <div className='Search-Bar'>
          <form
            onSubmit={(e)=>{
              e.preventDefault();
              setPage(wordIndex[searchVal])
              setSearchVal("")
            }}
          >
            <InputGroup
              type="search"
              placeholder="search a word..."
              fill
              leftIcon="search"
              value={searchVal}
              onChange = {(event) => {
                setSearchVal(event.target.value)}
              }
            />
          </form>
          </div>
        </Navbar.Group>
      </Navbar>
    </div>
  )
}