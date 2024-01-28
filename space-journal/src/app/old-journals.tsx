"use client"

import * as React from "react"
import { CalendarIcon } from "@radix-ui/react-icons"
import { format } from "date-fns"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { useState } from "react"
import { getJournalAtDate } from "@/Helpers/Helper"

// TODO: make it so once you click on a calendar, it shows up with the text of the entry for that day


export default function OldJournals() {
    const [date, setDate] = React.useState<Date>()
    
    var title = date?.getFullYear() + "" + date?.getMonth() + "" + date?.getDate();
    console.log(title);
    const titleElement = document?.getElementById("title");
    // lol
    if (titleElement !== null && title != "undefinedundefinedundefined") {
        if(date?.toDateString() != null){
            titleElement.innerHTML = date?.toDateString();
        }
    }
    var data = getJournalAtDate(title);
    var text;
    var sentiment;
    if(data != null){
        data = JSON.parse(data);
        if(data != null){  
            text = data.text;
            sentiment = data.sentiment;
        }
    } else {
        text = null;
        sentiment = null;
        const contentElement = document?.getElementById("content");
        const titleElement = document?.getElementById("title");
        // lol
        if (contentElement !== null && titleElement !== null) {
            contentElement.innerHTML = "NO JOURNAL FOR THIS DATE";
            titleElement.innerHTML = "NO JOURNAL FOR THIS DATE";
        }
    }
    if(text != null && sentiment != null){
        const contentElement = document?.getElementById("content");
        // lol
        if (contentElement !== null) {
            contentElement.innerHTML = text;
        }
    }

    return (
        <div className="flex flex-col items-center justify-center m-10">
            <h2 className='text-xl'>View Previous Journals</h2>
            <Popover>
                <PopoverTrigger asChild>
                    <Button
                        variant={"outline"}
                        className={cn(
                            "w-[240px] justify-start text-left font-normal",
                            !date && "text-muted-foreground"
                        )}
                    >
                        <CalendarIcon className="mr-2 h-4 w-4" />
                        {date ? format(date, "PPP") : <span>Pick a date</span>}
                    </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0" align="start">
                    <Calendar
                        mode="single"
                        selected={date}
                        onSelect={setDate}
                        initialFocus
                    />
                </PopoverContent>
            </Popover>
            <div>
                <br></br>
                <Card>
                    <CardHeader>
                        <CardTitle>
                        <p id="title">title</p>
                        </CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p id="content"> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum at risus eget lectus tempor luctus nec et arcu. Etiam consequat vitae mauris ac iaculis. Duis facilisis posuere libero, ut ultrices enim finibus at. Suspendisse at mattis libero. Nulla aliquam, leo eget placerat iaculis, justo odio sodales nisl, vel mollis purus eros at nibh. Sed efficitur placerat neque, ac sollicitudin nisi cursus id. Fusce nec nibh elit. Phasellus convallis erat ligula, id tincidunt orci blandit a. Praesent consequat, neque et euismod varius, massa ipsum mattis est, vel volutpat lectus dolor et neque. Integer pharetra sed ligula eu pulvinar. Maecenas ut lacus efficitur nisl posuere congue. Nunc maximus rutrum nibh, id feugiat sem auctor vitae. Pellentesque tempor libero sit amet porta malesuada. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae;

                            Cras eu magna pulvinar, congue enim vitae, cursus elit. Cras neque nisl, mattis non consectetur consequat, imperdiet egestas mauris. Maecenas posuere quis eros in rutrum. Phasellus eu maximus lectus. Duis imperdiet auctor cursus. Nunc quis mattis enim. Sed nisl turpis, placerat id vulputate ut, venenatis a purus. Donec non magna nunc. Integer et hendrerit ante, ut aliquet nisl. Mauris ornare laoreet metus non facilisis. Donec commodo, ante sit amet aliquam tristique, erat ipsum maximus massa, eu eleifend urna diam ac nisi. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Maecenas dapibus pulvinar lectus quis porttitor. Cras nec maximus ante. Ut non nisl auctor, posuere odio vel, finibus velit.

                            Fusce ut ornare libero, nec viverra ante. Pellentesque pretium leo at tellus porta, sit amet pellentesque eros sollicitudin. Sed faucibus erat dui, ac luctus neque aliquet sollicitudin. Maecenas nec odio in ante consequat ultricies nec et dui. Praesent aliquet id ante sed porttitor. Fusce sit amet lacinia urna. Praesent sed posuere dui. Morbi mattis mollis varius. Integer lobortis vehicula egestas. Suspendisse cursus cursus odio at fermentum. Integer sollicitudin elit purus, nec euismod enim consequat eget. Donec blandit lacinia odio, sit amet aliquet dolor pretium vitae. Nam vitae tempus lacus. </p>
                    </CardContent>
                </Card>
            </div>
        </div>
    )
}