import React from 'react';
import './EntriesPage.css';
import { Entry } from './Entry'
import { ConcordanceI } from '../Interfaces/Concordance';

interface EntriesPageProps {
  concordance: ConcordanceI
  start: number
  size: number
}
export const EntriesPage = ({concordance, start, size}: EntriesPageProps) =>
  <div className="Entry-List">
        {concordance.slice(start, start+size).map(
          (e, i) => <Entry entry={e} key={"entry"+i}/>)}
  </div>