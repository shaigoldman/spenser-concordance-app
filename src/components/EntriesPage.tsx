import React from 'react';
import './EntriesPage.css';
import { Entry } from './Entry'
import { H3 } from '@blueprintjs/core';
import { EntryI } from '../Interfaces/Interfaces';

function getTitle(entry: EntryI) {
  return entry.word + (entry.split_num !== -1 ? ` (${entry.split_num+1})` : "")
}

interface EntriesPageProps {
  page: number
  data: EntryI[]
  start: number
}

export const EntriesPage = ({page, data, start}: EntriesPageProps) => {
    
  return (
    <>
      <div id='Entry-List-Title'>
        <H3>
          Page {page+1}: {" "}
          {data.length > 1 ?
            <>
              Entries {start+1}-{start+data.length} ("
              {getTitle(data[0])}" to "{getTitle(data[data.length-1])}"):
            </>
            : <>
              Entry {start+1} ({getTitle(data[0])})
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
              num={i+1}
            />)}
      </div>
    </>
  )
}