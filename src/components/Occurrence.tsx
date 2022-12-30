import './Occurence.css'
import React from 'react';
import { Card, Divider, H6 } from "@blueprintjs/core"
import { OccurrenceI } from '../Interfaces/Interfaces';

const BoldWordInLine = ({line, word}: {line: string, word: string}) => {
  const words = line.split(" ")
  return (
    <>
      {words.map((w, i) => {

        const wordWithSpace = i === words.length-1 ? w : w + " "

        return (word === "&" && w === "&")
        || (w.toLowerCase().replace(/\W/g, "") === word) ? 
          <b key={"word"+w+i}>{wordWithSpace}</b> 
          : <React.Fragment key={"word"+w+i}>{wordWithSpace}</React.Fragment>}
          )}
    </>
  )
}

export const Occurrence = ({word, num, occurrence}: 
  {word: string, num: number, occurrence: OccurrenceI}
  ) => {

    return (
      <Card className="Occurrence">
        <H6>
            ({num}) {occurrence.location}
        </H6>
        <Divider/>
        "<BoldWordInLine line={occurrence.line_text} word={word}/>"
      </Card>
    )
}