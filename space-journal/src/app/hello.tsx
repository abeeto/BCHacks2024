"use client"
import { Input } from "@/components/ui/input"
import React, {useState} from 'react';
import './globals.css';
const WelcomePage = () => {
    const [name, setName] = useState('');
    const handleInputChange = (e: { target: { value: React.SetStateAction<string>; }; }) => {
        setName(e.target.value);
        console.log(name);
      };
  return (
<<<<<<< HEAD
    <div className="h-screen flex row items-center ">
      <div className="text-4xl pr-2">Welcome,</div>
      <Input className="border-0 border-b-2 border-blue-300 focus:none text-blue-300 text-4xl focus-visible:ring-0 "
      placeholder="sexy" onChange={handleInputChange} />
=======
    <div className="welcome-container">
      <h1 className="welcome-text">Welcome,</h1>
      <Input onChange={handleInputChange} placeholder="sexy "/>
>>>>>>> 073e3c61a3f77934ebfff72a9c6a3521734433cc
    </div>
    
  )
};

export default WelcomePage;