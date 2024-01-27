import React, { useMemo, useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import "../../app/styles/textbox.css";

export default function TextEditor() {
    const [value, setValue] = useState("");
    const modules = useMemo(() => {
        return {
            toolbar: [
                [{ header: [1, 2, 3, false] }],
                [{ 'font': [] }],
                ['bold', 'italic', 'underline', 'strike'],
                ['blockquote', 'code-block'],
                ['link', 'image'],
                [{ list: 'ordered' }, { list: 'bullet' }],
                [{ 'script': 'sub' }, { 'script': 'super' }],
                [{ 'color': [] }, { 'background': [] }],          // dropdown with defaults from theme
                [{ 'align': [] }],
                ['clean'],
            ],
        };
    }, []);

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