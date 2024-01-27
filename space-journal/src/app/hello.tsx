"use client"
import { Input } from "@/components/ui/input"
import React, {useState} from 'react';
import { jumpToSection } from "@/Helpers/Helper";
import './globals.css';
const WelcomePage = () => {
    const [name, setName] = useState('');
    const handleInputChange = (e: { target: { value: React.SetStateAction<string>; }; }) => {
        setName(e.target.value);
        jumpToSection("hobby")
        console.log(name);
        localStorage.setItem('name', e.target.value.toString());
      };
  return (
    <div className="h-screen flex row items-center ">
      <div className="text-4xl pr-2">Welcome,</div>
      <Input className="border-0 border-b-2 border-blue-300 focus:none text-blue-300 text-4xl focus-visible:ring-0 "
      placeholder="sexy" onChange={handleInputChange} />
    </div>
    
  )
};

export default WelcomePage;