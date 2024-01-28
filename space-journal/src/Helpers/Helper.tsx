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

export function getHobbies(){
  console.log("getting")
  return JSON.parse(localStorage.getItem('hobbies') ?? "[]");
}

export function saveHobbies(hobbies: Hobby){
  localStorage.setItem('hobbies', JSON.stringify(hobbies));
}