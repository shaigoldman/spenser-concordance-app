import './NavBar.css'
import { Alert, Alignment, Callout, InputGroup, Navbar } from "@blueprintjs/core"
import { useEffect, useState } from 'react'
import { WordIndex } from '../Interfaces/Interfaces'


interface NavBarProps {
  setPage: (val: number) => void
  wordIndex: WordIndex
  page: number
}

export const NavBar = ({page, setPage, wordIndex}: NavBarProps) => {

  const [searchVal, setSearchVal] = useState("")
  const [submitVal, setSubmitVal] = useState("")
  const [notFound, setNotFound] = useState(false)

  useEffect(() => {
    
    const element = document.getElementById(submitVal)
    if (element) {
      element.scrollIntoView(true)
      window.scrollBy(0, -100)
    }

    return () => {}
  }, [searchVal, page, submitVal]);
  
  return (
    <div id="navbar">
      <Alert
        canEscapeKeyCancel
        canOutsideClickCancel
        isOpen={notFound}
        onClose={()=>setNotFound(false)}
        intent="primary"
      >
        <Callout intent="danger">
          The word "{submitVal}" was not found in the concordance!
        </Callout>
      </Alert>
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
              setSubmitVal(searchVal)
              if (!wordIndex[searchVal]) {
                setNotFound(true)
                return
              }
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