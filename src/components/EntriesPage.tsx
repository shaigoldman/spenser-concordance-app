import React from 'react';
import './EntriesPage.css';
import { Entry, EntryI } from './Entry'
import { ConcordanceI } from '../Interfaces/Concordance';
import { H3 } from '@blueprintjs/core';

function getTitle(entry: EntryI) {
  return entry.word + (entry.split_num !== -1 ? ` (${entry.split_num+1})` : "")
}

export const EntriesPage = ({data, start}: {data: ConcordanceI, start: number}) => {
    

  return (
    <>
      <div id='Entry-List-Title'>
        <H3>
          {data.length > 1 ?
            <>
              Displaying entries {start+1}-{start+data.length} ("
              {getTitle(data[0])}" to "{getTitle(data[data.length-1])}"):
            </>
            : <>
              Displaying entry {start+1} ({getTitle(data[0])})
            </>
          }
        </H3>
      </div>
      <div className="Entry-List">
        {data.map(
          (e, i) => 
            <Entry 
              entry={e} 
              title={getTitle(e)}
              key={"entry"+i}
            />)}
      </div>
    </>
  )
}