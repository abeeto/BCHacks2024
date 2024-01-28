import { Hobby } from '../app/types/Hobby';
export function jumpToSection(sectionId: string) {
    var element = document.getElementById(sectionId);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
    }
}

export function initLocalstorage(){
    console.log("initing")
  let hobbies = [
        { name: 'working out', count: 9 },
        { name: 'eating healthy', count: 0 },
        { name: 'reading books', count: 0 },
      ]
  localStorage.setItem('hobbies', JSON.stringify(hobbies));
}

export function getHobbies(): Hobby[] {
  const storedHobbies = localStorage.getItem('hobbies') ?? "[]";
  return JSON.parse(storedHobbies);
}

export function saveHobbies(hobbies: Hobby[]){
  localStorage.setItem('hobbies', JSON.stringify(hobbies));
}

export function getJournalEntries(){
  const storedJournalEntries = localStorage.getItem('journalEntries');
  
  // First time user
  if(storedJournalEntries == null){
    localStorage.setItem('journalEntries', "null");
    return "0";
  }
  return storedJournalEntries;
}

export function getJournalAtDate(date : string){

  // journalEntry202412
  // This is an example for feb2 of 2024
  const str = "journalEntry" + date;
  console.log("string: ", str);
  return localStorage.getItem(str);
}

export function setJournal(journalText: string, sentiment: number){
  let journalEntry = {
    text: journalText,
    sentiment: sentiment,
    year: new Date().getFullYear(),
    month: new Date().getMonth(),
    day: new Date().getDate(),
  }
  if(journalEntry.sentiment > 20){
    journalEntry.sentiment = 20;
  } else if (journalEntry.sentiment < -20){
    journalEntry.sentiment = -20;
  }

  localStorage.setItem("journalEntry"+journalEntry.year + journalEntry.month + journalEntry.day ,JSON.stringify(journalEntry));

  let journalEntries = getJournalEntries();

  // DO NOT LET EVEN GOD SEE THIS CODE!
  // basically it checks if there is no journalEntries and makes one if one doesnt exist and if not appends the new date
  if(journalEntries == "null"){
    localStorage.setItem('journalEntries', (""+journalEntry.year + journalEntry.month + journalEntry.day));
  } else {
    if(!journalEntries.includes(""+journalEntry.year + journalEntry.month + journalEntry.day)){
      localStorage.setItem('journalEntries', (journalEntries + "," + ""+journalEntry.year + journalEntry.month + journalEntry.day));
    }
  }
}