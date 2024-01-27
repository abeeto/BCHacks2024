"use client"
import { Input } from "@/components/ui/input"
import React, {useState} from 'react';
import './globals.css';
const WelcomePage = () => {
    const [name, setName] = useState('');
    const handleInputChange = (e: { target: { value: React.SetStateAction<string>; }; }) => {
        setName(e.target.value);
        localStorage.setItem('name', e.target.value.toString());
      };
      function isEnterKeyPressed(event: KeyboardEvent): boolean {
        return event.key === "Enter";
      }
      
      // Example usage:
      document.addEventListener("keydown", (event: KeyboardEvent) => {
        if (isEnterKeyPressed(event)) {
          (document.getElementById("nameInput") as HTMLInputElement).disabled = true;
        }
      });

      
  return (
    <div className="h-screen flex row items-center ">
      <div className="text-4xl pr-2">Welcome,</div>
      <Input id="nameInput" className="border-0 border-b-2 border-blue-300 focus:none text-blue-300 text-4xl focus-visible:ring-0 "
      placeholder="sexy" onChange={handleInputChange}  />
    </div>
    
  )
};

export default WelcomePage;