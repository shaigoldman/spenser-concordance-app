import React from 'react';
import './EntriesPage.css';
import { Entry } from './Entry'
import { ConcordanceI } from '../Interfaces/Concordance';
import { H3 } from '@blueprintjs/core';

interface EntriesPageProps {
  concordance: ConcordanceI
  start: number
  size: number
}
export const EntriesPage = ({concordance, start, size}: EntriesPageProps) => {
  
  const slice = concordance.slice(start, start+size)

  return (
    <>
      <div id='Entry-List-Title'>
        <H3>
          Displaying entries {start}-{start+size} ("
          {slice[0].word}" to 
          "{slice[slice.length-1].word}"):
        </H3>
      </div>
      <div className="Entry-List">
        {slice.map(
          (e, i) => <Entry entry={e} key={"entry"+i}/>)}
      </div>
    </>
  )
}