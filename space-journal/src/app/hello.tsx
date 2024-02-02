"use client"
import { Input } from "@/components/ui/input"
import React, { useState, useEffect } from 'react';
import { jumpToSection } from "@/Helpers/Helper";
import { initLocalstorage } from '../Helpers/Helper'
import './globals.css';
import 'animate.css';
const WelcomePage = () => {
  const [name, setName] = useState('');
  useEffect(() => {
    const storedName = localStorage.getItem('name');
    if (storedName == undefined) {
      initLocalstorage();
    } else if (storedName.length > 0 && storedName != name) {
      console.log("NAME ALREADY EXISTS IN LOCALSTORAFE")
      setName(storedName);
      submitName(storedName);
      setTimeout(function()
      {
        jumpToSection("hobby")
      }, 1500);
    }
  }, [name]);
  //check if name is in localstorage when page loads
  const handleInputChange = (e: { target: { value: React.SetStateAction<string>; }; }) => {
    setName(e.target.value);
    localStorage.setItem('name', e.target.value.toString());
  };
  function isEnterKeyPressed(event: KeyboardEvent): boolean {
    return event.key === "Enter";
  }

  function submitName(thename: string) {
    console.log("Submitted")
    let nameInput = document.getElementById("nameInput");
    if (nameInput != null) nameInput.value = thename
    if (nameInput != null) nameInput.className = "animate__animated animate__bounce flex h-9 w-full rounded-md bg-transparent px-3 py-1 shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 border-0 focus:none text-blue-300 text-4xl focus-visible:ring-0";
    nameInput?.blur();
  }
  // Example usage:
  document.addEventListener("keydown", (event: KeyboardEvent) => {
    let nameInput = document.getElementById("nameInput");
    if (isEnterKeyPressed(event) && event.target === nameInput) {
      (nameInput as HTMLInputElement).disabled = false;
      jumpToSection("hobby")
      submitName(name)
    }
  });


  return (
    <div className="h-screen flex row items-center ">
      <div className="text-4xl pr-2">Welcome,</div>
      <Input id="nameInput" autoComplete="off" className="border-0 border-b-2 border-blue-300 focus:none text-blue-300 text-4xl focus-visible:ring-0 "
        placeholder="sexy" onChange={handleInputChange} />
    </div>

  )
};

export default WelcomePage;