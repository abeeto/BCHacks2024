import Image from "next/image";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import WelcomePage from "./hello"
import HobbyPage from "./hobby"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { CardDemo } from "@/components/ui/card-demo";
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between pb-24">
      <WelcomePage/>
      <HobbyPage/>
    </main>
  );
}
