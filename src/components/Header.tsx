import { H1, H4, H6 } from "@blueprintjs/core"
import spenserImg from '../resources/spenser.jpeg'

export const Header = () => <div className="Title">
  <H1>Spenser Concordance</H1>
  <H4>An Online Concordance For the Works</H4>
  <H4>Of Edmund Spenser</H4>
  <H6>By Shai Goldman</H6>
  <img src={spenserImg} alt="Edmund Spenser" className="Image"/>
</div>