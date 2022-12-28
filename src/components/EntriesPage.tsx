import React from 'react';
import './EntriesPage.css';
import { Entry } from './Entry'
import { ConcordanceI } from '../Interfaces/Concordance';
import { H3 } from '@blueprintjs/core';


export const EntriesPage = ({data}: {data: ConcordanceI}) => {
  
  console.log("here", data)

  return (
    <>
      <div id='Entry-List-Title'>
        <H3>
          Displaying entries {0}-{0} ("
          {data[0].word}" to 
          "{data[data.length-1].word}"):
        </H3>
      </div>
      <div className="Entry-List">
        {data.map(
          (e, i) => <Entry entry={e} key={"entry"+i}/>)}
      </div>
    </>
  )
}