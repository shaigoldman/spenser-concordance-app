import './Entry.css'
import { Card,  H4 } from "@blueprintjs/core"
import { OccurrenceI, Occurrence } from './Occurrence'

export interface EntryI {
  word: string
  total: number
  occurrences: OccurrenceI[]
  split_num: number
}

export const Entry = ({title, entry}: {title: string, entry: EntryI}) => {

  const entryId = entry.split_num <= 0 ? entry.word : title

  return (
    <div className="Entry" id={entryId}>
      <Card elevation={2} className="Entry-Card">
        <div className='Entry-Title'>
          <H4>Concordance Entry For "{title}": </H4> 
        </div>
        {entry.occurrences.length} total:
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