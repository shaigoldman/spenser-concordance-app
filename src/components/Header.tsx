import './Header.css'
import { H1, H4 } from "@blueprintjs/core"

export const Header = () => <div className="Title">
  <H1>Spenser Concordance</H1>
  <H4>An Online Concordance For the Works</H4>
  <H4>Of Edmund Spenser</H4>
  <img src="https://raw.githubusercontent.com/shaigoldman/spenser-concordance-app/main/src/resources/spenser.jpeg" 
       alt="Edmund Spenser" 
       className="Image"
  />
  <div className='header-space'></div>
</div>