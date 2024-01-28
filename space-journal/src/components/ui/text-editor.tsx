import React, { useMemo, useState, useEffect } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import "../../app/styles/textbox.css";
import { getJournalAtDate, getJournalEntries, setJournal } from '../../Helpers/Helper'
var sentiment = require('wink-sentiment');

// THIS WHOLE PART LOADS THE PREV JOURNAL
var prevJournal = "";
const storedJournalEntries = getJournalEntries();
const date = new Date();
const str = "" + date.getFullYear() + date.getMonth() + date.getDate();
if (storedJournalEntries.includes(str)) {
    prevJournal = JSON.parse(getJournalAtDate(str) ?? "{}").text;
}

// for converting rgb to hex
function componentToHex(c : number) {
    var hex = c.toString(16);
    return hex.length == 1 ? "0" + hex : hex;
}
const rgbToHex = (r : number, g : number, b : number) => {
    return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
}

// Function to get border color based on data value
const convertSentimentToColor = (value: number) => {
    return rgbToHex(125 - (value * 10), 125 + (value * 10), 0);
}


function runthispls(content: string) {
    // THIS REMOVES ALL HTML TAGS
    const adjustedContent = content.replace(/(<([^>]+)>)/ig, '');
    // Get Sentiment score
    const sentimentValue = sentiment(adjustedContent).score;

    const textbox = document.getElementsByClassName("ql-container")[0] as HTMLDivElement;
    const toolbar = document.getElementsByClassName("ql-toolbar")[0] as HTMLDivElement;
    
    //remove old border colors (can be generated)
    
    // change the css of the color-sentiment class based on sentiment value
    textbox.style.borderColor = convertSentimentToColor(sentimentValue);
    toolbar.style.borderColor = convertSentimentToColor(sentimentValue);
    
}



export default function TextEditor() {
    const [value, setValue] = useState(prevJournal);

    // THIS REMOVES ALL HTML TAGS
    const adjustedValue = value.replace(/(<([^>]+)>)/ig, '');

    // Get Sentiment score
    const sentimentValue = sentiment(adjustedValue).score;

    // Set journal
    setJournal(adjustedValue, sentimentValue);

    const modules = useMemo(() => {
        return {
            toolbar: [
                [{ header: [1, 2, 3, false] }],
                [{ 'font': [] }],
                ['bold', 'italic', 'underline', 'strike'],
                [{ 'color': [] }, { 'background': [] }],          // dropdown with defaults from theme
                ['link', 'image'],
                [{ list: 'ordered' }, { list: 'bullet' }],
                [{ 'align': [] }],
                ['blockquote', 'code-block'],
                [{ 'script': 'sub' }, { 'script': 'super' }],
                ['clean'],
            ],
        };
    }, []);

    // Run your function whenever the text changes
    useEffect(() => {
        runthispls(value);
    }, [value]);

    return (
        <div>
            <ReactQuill
                modules={modules}
                theme="snow"
                value={value}
                onChange={(e) => setValue(e)}
                className="h-[60vh] max-w-4/5 rounded-lg"
            ></ReactQuill>
        </div>
    );

}