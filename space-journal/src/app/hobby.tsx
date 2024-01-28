'use client'
import React, { useState } from 'react';
import { NewHobbyDrawer } from '@/components/ui/newHobby';
import StreakCounter from '@/components/ui/streakCounter';
import {getHobbies} from '../Helpers/Helper'
const HobbyTracker = () => {
  const [hobbies, setHobbies] = useState([
    { name: 'working out', count: 9 },
    { name: 'eating healthy', count: 0 },
    { name: 'reading books', count: 999 },
  ]);
  const updateStreakCount = (index: number, toAdd: boolean) => {
    
    const newHobbies = hobbies.map((hobby, i) => 
      toAdd ? (i === index ? { ...hobby, count: hobby.count + 1 } : hobby):
              (i === index ? { ...hobby, count: Math.max(hobby.count -1, 0)} : hobby)
    );
    setHobbies(newHobbies);
  };
 
  return (
    <div className="flex min-h-screen w-full flex-col items-center justify-between flex">
      <div id="hobby" className="align-top"></div>
      <div className='flex flex-col w-4/5'> 
          <div className ="text-4xl mb-5">Have you been..</div>
            {hobbies.map((hobby, index) => (
              <div key={index} className="flex flex-row">
                <div className='text-xl mt-3 pl-4 pt-2 pb-2 bg-secondary rounded-sm flex-grow'>{hobby.name}</div>
                <StreakCounter hobby={hobby} index={index} updateStreakCount={updateStreakCount}/>
              </div>
            ))}
            <NewHobbyDrawer hobbies={hobbies} setHobbies={setHobbies}/>
        </div>
      <div></div>
    </div>
  );
};

export default HobbyTracker;