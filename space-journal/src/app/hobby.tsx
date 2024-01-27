'use client'
import React, { useState } from 'react';
import { Card,CardHeader, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
const pageStyles = {
    height: '100vh',
    width: '100vw',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 0,
    padding: 0,
  };
  
  // Styles for the button
  const buttonStyles = {
    marginTop: '20px',
    padding: '10px',
    borderRadius: '50%',
    border: 'none',
    fontSize: '16px',
    cursor: 'pointer',
    width: '50px',
    height: '50px', // Makes it circular
    textAlign: 'center',
    lineHeight: '30px', // Center the '+' vertically
    boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)', // Optional: adds a shadow
  };

const HobbyTracker = () => {
  const [hobbies, setHobbies] = useState([
    { name: 'working out', count: 0 },
    { name: 'eating healthy', count: 0 },
    { name: 'reading books', count: 0 },
  ]);

  const addNewHobby = () => {
    // This is where you would add logic to input a new hobby
    // For now, we'll just add a placeholder hobby
    const newHobby = { name: 'New Hobby', count: 0 };
    setHobbies([...hobbies, newHobby]);
  };

  return (
    <div className="flex min-h-screen flex-col items-center justify-between flex .h-screen">
      <div id="hobby" className="align-top"></div>
      <div className='flex flex-col'>
        <div className ="text-4xl">Have you been..</div>
          {hobbies.map((hobby, index) => (
            <div key={index} className='text-m mt-6'>{hobby.name}</div>
          ))}
          <Button onClick={addNewHobby} className="mt-5">Add new hobby</Button>
      </div>
      
    </div>
  );
};

export default HobbyTracker;