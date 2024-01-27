"use client"
import { Input } from "@/components/ui/input"
import React, {useState} from 'react';
import { jumpToSection } from "@/Helpers/Helper";
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
        let nameInput = document.getElementById("nameInput");
        if (isEnterKeyPressed(event) && event.target === nameInput) {
          (nameInput as HTMLInputElement).disabled = false;
          jumpToSection("hobby")
          if(nameInput != null){
            nameInput.className = "flex h-9 w-full rounded-md bg-transparent px-3 py-1 shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 border-0 focus:none text-blue-300 text-4xl focus-visible:ring-0";
            nameInput?.blur();
          }
        }
      });

      
  return (
    <div onClick = {  () => jumpToSection("hobby")} className="h-screen flex row items-center ">
      <div className="text-4xl pr-2">Welcome,</div>
      <Input id="nameInput" className="border-0 border-b-2 border-blue-300 focus:none text-blue-300 text-4xl focus-visible:ring-0 "
      placeholder="sexy" onChange={handleInputChange}  />
    </div>
    
  )
};

export default WelcomePage;