'use client'
import React, { useState } from 'react';

const ColorChanger: React.FC = () => {
    const [happyColor, setHappyColor] = useState('#008000');
    const [unhappyColor, setUnhappyColor] = useState('#FF0000');

    const handleHappyColorChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setHappyColor(event.target.value);
    };

    const handleUnhappyColorChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setUnhappyColor(event.target.value);
    };

    return (
        <div id='color-pickers' className="flex flex-col items-center justify-between w-4/5">
        <div className="flex justify-center w-full">
            <div className='m-3 flex flex-col items-center'>
                <label htmlFor="happyColor">Happy Color</label>
                <input type="color" id="happyColor" value={happyColor} onChange={handleHappyColorChange} />
            </div>

            <div className='m-3 flex flex-col items-center'>
                <label htmlFor="unhappyColor">Unhappy Color</label>
                <input type="color" id="unhappyColor" value={unhappyColor} onChange={handleUnhappyColorChange} />
            </div>
        </div>
    </div>
    );
};

export default ColorChanger;
