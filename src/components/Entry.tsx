import './Entry.css'
import { Card,  H4 } from "@blueprintjs/core"
import { OccurrenceI, Occurrence } from './Occurrence'

export interface EntryI {
  word: string
  total: number
  occurrences: OccurrenceI[]
  split_num: number
}

export const Entry = ({entry}: {entry: EntryI}) => {

  return (
    <div className="Entry">
      <Card elevation={2} className="Entry-Card">
        <div className='Entry-Title'>
          <H4>Concordance Entry For "{entry.word}" {
            entry.split_num > 0 && <>({entry.split_num})</>
            }: </H4> 
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