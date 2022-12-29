import './NavBar.css'
import { Alignment, InputGroup, Navbar } from "@blueprintjs/core"
import { useEffect, useState } from 'react'
import { WordIndex } from '../Interfaces/Interfaces'


interface NavBarProps {
  setPage: (val: number) => void
  wordIndex: WordIndex
  page: number
}

export const NavBar = ({page, setPage, wordIndex}: NavBarProps) => {

  const [searchVal, setSearchVal] = useState("")

  useEffect(() => {

    if (searchVal === "") {
      return
    }

    const element = document.getElementById(searchVal)
    if (element) {
      console.log(element)
      element.scrollIntoView(true)
      window.scrollBy(0, -100)
    }

    return () => {}
  }, [searchVal, page]);
  
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