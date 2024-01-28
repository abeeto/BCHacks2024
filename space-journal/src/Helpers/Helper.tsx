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
  //console.log("string: ", str);
  try {
    return localStorage.getItem(str);
  } catch (error) {
    return "ERROR";
  }
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

export function averageSentimentForPastYear() {
  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();
  
  let totalSentiment = 0;
  let numberOfEntries = 0;

  // Iterate through all keys in localStorage
  for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);

      // Check if the key matches the journal entry format
      if (key.startsWith('journalEntry')) {
          // Extract the year from the key
          const yearMatch = key.match(/(\d{4})/);
          const entryYear = yearMatch ? parseInt(yearMatch[0], 10) : null;

          // Check if the entry is from the past year
          if (entryYear === currentYear - 1) {
              const entry = JSON.parse(window.localStorage.getItem(key));

              // Ensure the entry has sentiment property
              if (entry && entry.sentiment !== undefined) {
                  totalSentiment += entry.sentiment;
                  console.log(entry.sentiment)
                  numberOfEntries++;
              }
          }
      }
  }

  // Calculate average sentiment
  const averageSentiment = numberOfEntries > 0 ? totalSentiment / numberOfEntries : 0;

  return averageSentiment;
}

export function countJournalEntriesLastYear() {
  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();
  
  let numberOfEntries = 0;

  // Iterate through all keys in localStorage
  for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);

      // Check if the key matches the journal entry format
      if (key.startsWith('journalEntry')) {
          // Extract the year from the key
          const yearMatch = key.match(/(\d{4})/);
          const entryYear = yearMatch ? parseInt(yearMatch[0], 10) : null;

          // Check if the entry is from the past year
          if (entryYear === currentYear - 1) {
              numberOfEntries++;
          }
      }
  }

  return numberOfEntries;
}

export function sentimentsArrayForThisYear() {
  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();
  
  const sentimentsArray = [];

  // Iterate through all keys in localStorage
  for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);

      // Check if the key matches the journal entry format
      if (key.startsWith('journalEntry')) {
          // Extract the year from the key
          const yearMatch = key.match(/(\d{4})/);
          const entryYear = yearMatch ? parseInt(yearMatch[0], 10) : null;

          // Check if the entry is from this year
          if (entryYear === currentYear) {
              const entry = JSON.parse(localStorage.getItem(key));

              // Add sentiment to the array, or NaN if not available
              sentimentsArray.push(entry && entry.sentiment !== undefined ? entry.sentiment : NaN);
          }
      }
  }

  return sentimentsArray;
}

export function countSentimentsForThisYear() {
  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();
  
  let sentimentsCount = 0;

  // Iterate through all keys in localStorage
  for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);

      // Check if the key matches the journal entry format
      if (key.startsWith('journalEntry')) {
          // Extract the year from the key
          const yearMatch = key.match(/(\d{4})/);
          const entryYear = yearMatch ? parseInt(yearMatch[0], 10) : null;

          // Check if the entry is from this year
          if (entryYear === currentYear) {
              const entry = JSON.parse(localStorage.getItem(key));

              // Check if sentiment is available in the entry
              if (entry && entry.sentiment !== undefined) {
                  sentimentsCount++;
              }
          }
      }
  }

  return sentimentsCount;
}