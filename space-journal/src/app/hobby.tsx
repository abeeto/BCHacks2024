'use client'
import React, { useState } from 'react';
import { Card,CardHeader, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
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
      <div className='flex flex-col'> 
        <div className ="text-4xl">Have you been..</div>
          {hobbies.map((hobby, index) => (
            <div key={index} className='text-xl mt-6'>{hobby.name}</div>
          ))}
          <NewHobbyDrawer hobbies={hobbies} setHobbies={setHobbies}/>
      </div>
      <div></div>
    </div>
  );
};

export default HobbyTracker;