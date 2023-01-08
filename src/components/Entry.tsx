import './Entry.css'
import { Card,  H4 } from "@blueprintjs/core"
import { Occurrence } from './Occurrence'
import { EntryI } from '../Interfaces/Interfaces'

interface EntryProps {
  title: string
  entry: EntryI
  num: number
}
export const Entry = ({title, entry, num}: EntryProps) => {

  const entryId = entry.split_num <= 0 ? entry.word : title

  return (
    <div className="Entry" id={entryId}>
      <Card elevation={2} className="Entry-Card">
        <div className='Entry-Title'>
          <H4>[{num}] Concordance Entry For "{title}": </H4> 
        </div>
        {entry.total} total
        {entry.split_num !== -1 && <> (Showing {entry.occurrences.length})</>}
        :
        <div className='Occurence-List'>
          {entry.occurrences.map(
            (e, i) => 
              <Occurrence
                key={entry.word + i} 
                word={entry.word} 
                num={i+1} 
                occurrence={e} 
              />)}
        </div>
      </Card>
    </div>
  )
}