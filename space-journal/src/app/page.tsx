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
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { CardDemo } from "@/components/ui/card-demo";
export default function Home() {
  return (
    //flex min-h-screen flex-col items-center justify-between pb-24
    <main className="flex-col w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
      <WelcomePage/>
      <HobbyPage/>
      <JournalPage/>
    </main>
  );
}
