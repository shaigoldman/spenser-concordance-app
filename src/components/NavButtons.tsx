import { Button, Icon } from '@blueprintjs/core'
import './NavButtons.css'

interface NavButtonProps {
  page: number
  maxPage: number
  setPage: (val: number) => void
  backwards?: boolean
}

export const NavButton = ({page, maxPage, setPage, backwards=false}: NavButtonProps) => {

  const adder = backwards ? -1 : +1
  const icon = backwards ? "chevron-left" : "chevron-right"
  const cName = "NavButton" + (backwards ? "Backwards" : "Forwards")
  const disabled = backwards ? page === 0 : page === maxPage

  return (
    <div className={"NavButton " + cName}>
      <Button 
        minimal 
        large
        disabled={disabled}
        icon={<Icon icon={icon} size={60}/>}
        onClick={()=>{setPage(page+adder)}}
      />
    </div>
  )
}

