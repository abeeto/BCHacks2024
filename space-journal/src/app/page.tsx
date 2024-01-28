import Image from "next/image";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import WelcomePage from "./hello"
import HobbyPage from "./hobby"
import JournalPage from "./journal"
import Dashboard from "./dashboard";
import MoodGrid from "@/components/ui/moodGrid";
export default function Home() {
  return (
    //flex min-h-screen flex-col items-center justify-between pb-24
    <main className="flex-col w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
      <WelcomePage/>
      <HobbyPage/>
      <JournalPage/>
      <Dashboard/>
      <div className="bg-animation">
        <div id="stars"></div>
        <div id="stars2"></div>
        <div id="stars3"></div>
        <div id="stars4"></div>
    </div>

    </main>
  );
}
