'use client';
import React, { useRef, useEffect } from 'react';
import { Chart, registerables } from 'chart.js';

Chart.register(...registerables);

// Function to get month name from a Date object
const getMonthName = (date: Date) => {
    return date.toLocaleString('default', { month: 'short' });
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

// Function to get color based on data value
const getColor = (value: number) => {
    return `rgb(${255 - (value * 25.5)}, ${value*25.5}, 0)`;
}

// Function to get border color based on data value
const getBorderColor = (value: number) => {
    return `rgb(${255 - (value * 25.5)}, ${value*25.5}, 0)`;
}

const Dashboard = () => {
    const chartContainer = useRef(null);
    const chartRef = useRef<Chart<"line", number[], string> | null>(null);

    // Dummy sentiment analysis data
    const sentimentData = {
        labels: generateLast12Months(),
        datasets: [
            {
                label: 'Sentiment',
                data: [1, 4, 6, 8, 3, 5, 2, 1, 4, 6, 8, 3, 5, 2],
                backgroundColor: (context: { dataset: { data: { [x: string]: number; }; }; dataIndex: string | number; }) => getColor(context.dataset.data[context.dataIndex]),
                borderColor: (context: { dataset: { data: { [x: string]: number; }; }; dataIndex: string | number; }) => getBorderColor(context.dataset.data[context.dataIndex]),
                borderWidth: 1,
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
            });
    
            chartRef.current = newChartInstance;
        }
    }, [chartContainer]);

    return (
        <div className="flex min-h-screen flex-col items-center justify-between .h-screen w-4/5">
            <div id="dashboard" className="align-top w-[80vw]">
                <h2 className='text-4xl pr-2'>Your Moods</h2>
                <canvas ref={chartContainer} />
            </div>
        </div>
    );
};

export default Dashboard;