import React, { useState } from 'react';
import {Alignment, Navbar, InputGroup, Button, ButtonProps} from "@blueprintjs/core"
import './Footer.css';


interface PageButtonProps extends Partial<ButtonProps> {
  page: number
  setPage: (val: number) => void
}

const PageButton = ({page, setPage, ...props}: PageButtonProps) => {
  return (
    <div className='Page-Button'>
      <Button
        onClick={()=>setPage(page)}
        {...props}
      >
        {page+1}
      </Button>
    </div>
  )
}

const ElipsesButtonSpace = () => (
  <div className='Page-Button'>
      <Button
        disabled
        minimal
      >
        ...
      </Button>
    </div>
)

interface FooterProps {
  page: number
  setPage: (val: number) => void
  maxPage: number
}

const PageButtons = ({page, setPage, maxPage}: FooterProps) => {

  return (
    <>
      {page > 2 && <>
        <PageButton page={0} setPage={setPage}/>
        <ElipsesButtonSpace/>
      </>}
      {page >= maxPage-1 && <PageButton page={page-2} setPage={setPage}/>}
      {page!==0 && <PageButton page={page-1} setPage={setPage}/>}
      <PageButton page={page} setPage={setPage} disabled/>
      {page < maxPage-1 && <PageButton page={page+1} setPage={setPage}/>}
      {page < maxPage-2 && <>
        {page===0 && <PageButton page={page+2} setPage={setPage}/>}
        <ElipsesButtonSpace/>
        <PageButton page={maxPage} setPage={setPage}/>
      </>}
    </>
  )
}

export const Footer = ({page, setPage, maxPage}: FooterProps) => {
  const [choosePageVal, setChoosePageVal] = useState("")

  return (
    <div id="Footer">
      <Navbar>
        <Navbar.Group align={Alignment.LEFT} className="NavBar">
          <Navbar.Heading className='Title-Name'>
            <h2>Pages:</h2>
          </Navbar.Heading>
          <Navbar.Divider/>
          <PageButtons 
            page={page}
            setPage={setPage} 
            maxPage={maxPage}
          />
          <Navbar.Divider/>
          <div className='Select-Page'>
            <form 
              onSubmit={(e)=>{
                  e.preventDefault();
                  const val = parseInt(choosePageVal)
                  if (val) {
                    setPage(val)
                  }
                }}
            >
              <InputGroup
                placeholder="choose page..."
                type="text"
                fill
                leftIcon="double-chevron-right"
                value={choosePageVal}
                onChange = {(event) => {
                  setChoosePageVal(event.target.value)}
                }
              />
            </form>
          </div>
        </Navbar.Group>
      </Navbar>
    </div>
  )
}