import React from 'react';
import {averageSentimentForPastYear, countJournalEntriesLastYear} from '../Helpers/Helper'
const Insights = () => {

  return (
    <div className="flex min-h-screen flex-col items-center justify-between .h-screen w-4/5">
        <h2 className='text-4xl'>Your Insights</h2>
        <h3 className='text-2xl align-text-top'>You were <span className="text-green-500 text-2xl font-extrabold">happy</span> on average last year. </h3>
        <h3 className="text-2xl"> with a average score of <span className="text-4xl font-extrabold"> {averageSentimentForPastYear()} </span>over <span className="text-4xl font-extrabold">{countJournalEntriesLastYear()}</span> entries!</h3>
        <div></div>
    </div>
  );
};

export default Insights;
