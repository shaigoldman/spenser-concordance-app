import React from 'react';
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
        {page}
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
      {page!==0 && <PageButton page={page-1} setPage={setPage}/>}
      <PageButton page={page} setPage={setPage} disabled/>
      <PageButton page={page+1} setPage={setPage}/>
      {page===0 && <PageButton page={page+2} setPage={setPage}/>}
      <ElipsesButtonSpace/>
      <PageButton page={maxPage} setPage={setPage}/>
    </>
  )
}

export const Footer = ({page, setPage, maxPage}: FooterProps) => (
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
          <InputGroup
            placeholder="choose page..."
            fill
            leftIcon="double-chevron-right"
          />
        </div>
      </Navbar.Group>
    </Navbar>
  </div>
)