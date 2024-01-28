import React from 'react';
import { averageSentimentForPastYear, countJournalEntriesLastYear, calculateRegressionForLast30Days} from '../Helpers/Helper'
const Insights = () => {
    const { regressionResult, predictedSentiment } = calculateRegressionForLast30Days();
    return (
        <div className="flex min-h-screen flex-col items-center justify-between w-4/5">
            <div id="notlast" className="section"></div>
            <h2 className="text-4xl">Your Insights</h2>
            <h3 className="text-2xl happiness-info">
                You were <span className="text-2xl font-extrabold">happy</span> on average last year.
                 with an average score of <span className="text-2xl font-extrabold">{averageSentimentForPastYear()} </span>
                 over <span className="text-2xl font-extrabold">{countJournalEntriesLastYear()}</span> entries!
                 <br></br><br></br>
                 Our models predict a happiness value of <span className="text-2xl font-extrabold">{predictedSentiment}</span> next month. {regressionResult > 0 ? "Looks good!" : "Take it easy!"}
            </h3>
            <div id="newlast" className="section"></div>
        </div>

    );
};

export default Insights;
