"use client"
import { Input } from "@/components/ui/input"
import React, {useState} from 'react';
import './globals.css';
const WelcomePage = () => {
    const [name, setName] = useState('');
    const handleInputChange = (e) => {
        setName(e.target.value);
      };
  return (
    <div className="welcome-container">
      <h1 className="welcome-text">Welcome,</h1>
      <Input placeholder="sexy "/>
    </div>
    
  );
};

export default WelcomePage;