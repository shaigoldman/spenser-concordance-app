import './Occurence.css'
import React from 'react';
import { Card, Divider, H6 } from "@blueprintjs/core"

const BoldWordInLine = ({line, word}: {line: string, word: string}) => {
  const words = line.split(" ")
  return (
    <>
      {words.map((w, e) => w === word ? <b key={"word"+w+e}>{w + " "}</b> : <React.Fragment key={"word"+w+e}>{w + " "}</React.Fragment>)}
    </>
  )
}

export interface OccurenceI {
  book: number
  canto: string
  stanza: number
  line_num: number
  whole_line: string
}

export const Occurence = ({word, num, occurence}: 
  {word: string, num: number, occurence: OccurenceI}
  ) => {

    return (
      <Card className="Occurence">
        <H6>
            ({num}) Book {occurence.book}
            , {occurence.canto}
            , {occurence.stanza}.
            {occurence.line_num}
        </H6>
        <Divider/>
        "<BoldWordInLine line={occurence.whole_line} word={word} />"
      </Card>
    )
}