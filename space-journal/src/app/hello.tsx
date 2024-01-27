"use client"
import { Input } from "@/components/ui/input"
import React, {useState} from 'react';
import './globals.css';
const WelcomePage = () => {
    const [name, setName] = useState('');
    const handleInputChange = (e) => {
        setName(e.target.value);
        console.log(name);
      };
  return (
    <div className="h-screen flex row items-center ">
      <h1 className="pr-2">Welcome,</h1>
      <Input className="border-0 border-b-2 border-blue-300 focus:none text-blue-300 focus-visible:ring-0 "
      placeholder="sexy" onChange={handleInputChange} />
    </div>
    
  )
};

export default WelcomePage;