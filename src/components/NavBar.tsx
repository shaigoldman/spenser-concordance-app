import './NavBar.css'
import { Alert, Alignment, Callout, InputGroup, Navbar } from "@blueprintjs/core"
import { useEffect, useState } from 'react'
import { WordIndex } from '../Interfaces/Interfaces'

const height = Math.max(
  document.body.scrollHeight, 
  document.body.offsetHeight,
  document.documentElement.clientHeight, 
  document.documentElement.scrollHeight, 
  document.documentElement.offsetHeight
);

const GithubLink = () => (
  <a href="https://github.com/shaigoldman/spenser-concordance-app"
    className='Githublink-Container'
    title="Star me on Githbub!"
    target="_blank"
    rel="noreferrer"
  >
    <img 
      className='Githublink'
      src="https://raw.githubusercontent.com/shaigoldman/spenser-concordance-app/main/src/resources/github-mark.png"
      alt="Star me on Githbub!"
    />
  </a>
)

interface NavBarProps {
  setPage: (val: number) => void
  wordIndex: WordIndex
  page: number
}

export const NavBar = ({page, setPage, wordIndex}: NavBarProps) => {

  const [searchVal, setSearchVal] = useState("")
  const [submitVal, setSubmitVal] = useState("")
  const [notFound, setNotFound] = useState(false)
  const [searchSuccess, setSearchSuccess] = useState(false)

  const HeaderText = document.body.clientWidth > 600 ? "Spenser Concordance" : "Spenser"

  useEffect(() => {
    
    const element = document.getElementById(submitVal)
    if (element) {
      element.scrollIntoView(true)
      window.scrollBy(0, -(height*.003))
    }

    return () => {}
  }, [searchVal, page, submitVal]);
  
  return (
    <div id="navbar">
      <Alert
        canEscapeKeyCancel
        canOutsideClickCancel
        isOpen={notFound || searchSuccess}
        onClose={()=>{
          setNotFound(false)
          setSearchSuccess(false)
        }}
        intent="primary"
      >
        {notFound ?
          <Callout intent="danger">
            The word "{submitVal}" was not found in the concordance!
          </Callout>
          : <Callout intent="primary">
            The word "{submitVal}" was found on page {page}.
          </Callout>
        }
      </Alert>
      <Navbar>
        <Navbar.Group align={Alignment.LEFT} className="NavBar-Main">
          <Navbar.Heading className='Title-Name'>
            <h2>{HeaderText}</h2>
          </Navbar.Heading>
          <Navbar.Divider/>
          <div className='Search-Bar'>
            <form
              onSubmit={(e)=>{
                e.preventDefault();
                setSubmitVal(searchVal.toLowerCase())
                if (wordIndex[searchVal.toLowerCase()] === undefined) {
                  setNotFound(true)
                  return
                }
                setPage(wordIndex[searchVal.toLowerCase()])
                setSearchVal("")
                setSearchSuccess(true)
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
        <Navbar.Group align={Alignment.RIGHT} className="Nav-Right-Group">
          <GithubLink />
        </Navbar.Group>
      </Navbar>
    </div>
  )
}