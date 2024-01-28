'use client';
import React, { useRef, useEffect } from 'react';
import { Chart, registerables } from 'chart.js';
import './styles/graphs.css';

Chart.register(...registerables);

// dummy sentiment data
const monthSentiments = [1, 4, 6, 8, 3, 5, 2, 1, 4, 6, 8, 3, 5, 2];
const last7DaysSentiments = [1, 4, 6, 8, 3, 5, 2];

// Function to get month name from a Date object
const getMonthName = (date: Date) => {
    const year = date.getFullYear().toString().substr(-2); // get last two digits of year
    const month = date.toLocaleString('default', { month: 'short' });
    return `${month} '${year}`;
}

// Generate an array of month labels for the past year
const generateLast12Months = () => {
    const months = [];
    let date = new Date();
    for (let i = 0; i < 12; i++) {
        months.unshift(getMonthName(date));
        date.setMonth(date.getMonth() - 1);
    }
    return months;
}

const generateLast7Days = () => {
    const days = [];
    let date = new Date();
    for (let i = 0; i < 7; i++) {
        days.unshift(date.toLocaleString('default', { weekday: 'short' }));
        date.setDate(date.getDate() - 1);
    }
    return days;
}


// Function to get color based on data value
const getColor = (value: number) => {
    return `rgb(${255 - (value * 25.5)}, ${value * 25.5}, 0)`;
}

// Function to get border color based on data value
const getBorderColor = (value: number) => {
    return `rgb(${255 - (value * 25.5)}, ${value * 25.5}, 0)`;
}

const Dashboard = () => {

    //
    // CHART 1 (12 months)
    //

    const chartContainer = useRef(null);
    const chartRef = useRef<Chart<"line", number[], string> | null>(null);

    // Dummy sentiment analysis data
    const sentimentData = {
        labels: generateLast12Months(),
        datasets: [
            {
                label: 'Sentiment',
                data: monthSentiments,
                backgroundColor: (context: { dataset: { data: { [x: string]: number; }; }; dataIndex: string | number; }) => getColor(context.dataset.data[context.dataIndex]),
                borderColor: (context: { dataset: { data: { [x: string]: number; }; }; dataIndex: string | number; }) => getBorderColor(context.dataset.data[context.dataIndex]),
                borderWidth: 3,
                tension: 0.4,
            }
        ],
    };

    useEffect(() => {
        if (chartContainer && chartContainer.current) {
            if (chartRef.current) {
                chartRef.current.destroy();  // destroy previous chart instance
            }
            const newChartInstance = new Chart<"line", number[], string>(chartContainer.current, {
                type: 'line',
                data: sentimentData,
                options: {
                    plugins: {
                        legend: {
                            display: false, 
                        }
                    }
                }
            });

            chartRef.current = newChartInstance;
        }
    }, [chartContainer]);

    // 
    // CHART 2 (7 days)
    //

    const chartContainer2 = useRef(null);
    const chartRef2 = useRef<Chart<"line", number[], string> | null>(null);

    // Dummy sentiment analysis data
    const sentimentData2 = {
        labels: generateLast7Days(),
        datasets: [
            {
                label: 'Sentiment',
                data: last7DaysSentiments,
                backgroundColor: (context: { dataset: { data: { [x: string]: number; }; }; dataIndex: string | number; }) => getColor(context.dataset.data[context.dataIndex]),
                borderColor: (context: { dataset: { data: { [x: string]: number; }; }; dataIndex: string | number; }) => getBorderColor(context.dataset.data[context.dataIndex]),
                borderWidth: 3,
                tension: 0.4,
            }
        ],
    };

    useEffect(() => {
        if (chartContainer2 && chartContainer2.current) {
            if (chartRef2.current) {
                chartRef2.current.destroy();  // destroy previous chart instance
            }
            const newChartInstance2 = new Chart<"line", number[], string>(chartContainer2.current, {
                type: 'line',
                data: sentimentData2,
                options: {
                    plugins: {
                        legend: {
                            display: false,
                        }
                    }
                }
            });

            chartRef2.current = newChartInstance2;
        }
    }, [chartContainer2]);

    return (
        <div className="flex min-h-screen flex-col items-center justify-between .h-screen w-4/5">
            <div id="dashboard">
                <h2 className='text-4xl'>Your Moods</h2>
                <div id='graph-holder' className="align-top flex content-center w-[80vw]">
                    <div className='m-2 w-1/2'>
                        <h3 className='text-xl pr-2'>Last 7 days</h3>
                        <canvas id='chart2' className='' ref={chartContainer2} />
                    </div>
                    <div className='m-2 w-1/2'>
                        <h3 className='text-xl pr-2'>Last 12 Months</h3>
                        <canvas id='chart1' className='' ref={chartContainer} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;