import './Entry.css'
import { Card,  H4 } from "@blueprintjs/core"
import { OccurenceI, Occurence } from './Occurence'

export interface EntryI {
  word: string
  occurences: OccurenceI[]
}

export const Entry = ({entry}: {entry: EntryI}) => {
  return (
    <div className="Entry">
      <Card elevation={2} className="Entry-Card">
        <H4>Concordance Entry For "{entry.word}": </H4> 
        {entry.occurences.length} total:
        <div className='Occurence-List'>
          {entry.occurences.map(
            (e, i) => 
              <Occurence 
                key={entry.word + i} 
                word={entry.word} 
                num={i+1} 
                occurence={e} 
              />)}
        </div>
      </Card>
    </div>
  )
}