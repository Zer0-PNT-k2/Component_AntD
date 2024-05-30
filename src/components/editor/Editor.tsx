import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css"; // Giao diện core

const fontFamilyArr = [
  "Roboto Condensed",
  "Times New Roman",
  "Calibri",
  "Calibri Light",
  "Sans-Serif",
];
const fontSizeArr = ["10px", "11px", "12px", "14px", "18px", "24px"];

const Editor = () => {
  const [value, setValue] = useState("");

  const formats = ["bold", "italic", "underline", "font", "size"];

  return (
    <div className="flex items-center justify-center w-screen h-screen">
      <div>
        <ReactQuill
          value={value}
          onChange={setValue}
          formats={formats}
          style={{ height: "250px", width: "650px" }}
          modules={{
            toolbar: [
              ["bold", "italic", "underline"],
              [{ font: fontFamilyArr }],
              [{ size: fontSizeArr }],
            ],
          }}
          placeholder="Please provide the content of your mail here"
        />
      </div>
    </div>
  );
}

export default Editor;
