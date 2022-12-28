import './Occurence.css'
import React from 'react';
import { Card, Divider, H6 } from "@blueprintjs/core"

const BoldWordInLine = ({line, word}: {line: string, word: string}) => {
  const words = line.split(" ")
  return (
    <>
      {words.map((w, e) => 
        (word === "&" && w === "&")
        || (w.toLowerCase().replace(/\W/g, "") === word) ? 
          <b key={"word"+w+e}>{w + " "}</b> 
          : <React.Fragment key={"word"+w+e}>{w + " "}</React.Fragment>)}
    </>
  )
}

export interface OccurrenceI {
  location: string
  line_text: string
}

export const Occurrence = ({word, num, occurrence}: 
  {word: string, num: number, occurrence: OccurrenceI}
  ) => {

    return (
      <Card className="Occurrence">
        <H6>
            ({num}) Book {occurrence.location}
        </H6>
        <Divider/>
        "<BoldWordInLine line={occurrence.line_text} word={word} />"
      </Card>
    )
}