import './NavBar.css'
import { Alignment, InputGroup, Navbar } from "@blueprintjs/core"


export const NavBar = () => (
  <div id="navbar">
    <Navbar>
      <Navbar.Group align={Alignment.LEFT} className="NavBar">
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
</div>
)