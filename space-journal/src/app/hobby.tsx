'use client'
import React, { useState } from 'react';
import { NewHobbyDrawer } from '@/components/ui/newHobby';
const HobbyTracker = () => {
  const [hobbies, setHobbies] = useState([
    { name: 'working out', count: 0 },
    { name: 'eating healthy', count: 0 },
    { name: 'reading books', count: 0 },
  ]);

 
  return (
    <div className="flex min-h-screen w-full flex-col items-center justify-between flex">
      <div id="hobby" className="align-top"></div>
      <div className='flex flex-col w-4/5'> 
          <div className ="text-4xl mb-5">Have you been..</div>
            {hobbies.map((hobby, index) => (
              <div key={index} className="flex flex-row">
                <div className='text-xl mt-3 pl-4 pt-2 pb-2 bg-secondary rounded-sm flex-grow'>{hobby.name}</div>
                <div  className='text-xl mt-3 ml-3 pr-4 pl-4 pt-2 pb-2 bg-blue-400 rounded-sm flex-shrink'>{hobby.count}</div>
              </div>
            ))}
            <NewHobbyDrawer hobbies={hobbies} setHobbies={setHobbies}/>
        </div>
      <div></div>
    </div>
  );
};

export default HobbyTracker;