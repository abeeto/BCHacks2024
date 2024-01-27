"use client"
import { Input } from "@/components/ui/input"
import React, {useState} from 'react';
import './globals.css';
const WelcomePage = () => {
    const [name, setName] = useState('');
    const handleInputChange = (e: { target: { value: React.SetStateAction<string>; }; }) => {
        setName(e.target.value);
      };
  return (
    <div className="welcome-container">
      <h1 className="welcome-text">Welcome,</h1>
      <Input onChange={handleInputChange} placeholder="sexy "/>
    </div>
    
  );
};

export default WelcomePage;