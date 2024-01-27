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
    <main className="flex min-h-screen flex-col items-center justify-between pb-24">
      <WelcomePage/>
      <HobbyPage/>
      <JournalPage/>
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        <Alert>
            <AlertTitle>Heads up!</AlertTitle>
            <AlertDescription>
              You can add components and dependencies to your app using the cli.
            </AlertDescription>
        </Alert>
        <CardDemo/>
      </div>
    </main>
  );
}
