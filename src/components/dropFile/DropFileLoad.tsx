import React, { useState } from "react";
import { FaFilePdf } from "react-icons/fa6";

const DropFileLoad = () => {
  interface fileImage {
    name: string;
    url: string;
  }

  const [files, setFiles] = useState<fileImage>({
    name: "",
    url: "",
  });

  function handleOnDropOver(e: React.DragEvent<HTMLLabelElement>) {
    e.preventDefault();
    console.log((e.dataTransfer.dropEffect = "copy"));
  }

  function handleOnDropFile(e: React.DragEvent<HTMLLabelElement>) {
    e.preventDefault();
    const file = e.dataTransfer.files;
    setFiles({
      name: file[0]?.name,
      url: URL.createObjectURL(file[0]),
    });
  }

  return (
    <div className="flex items-center justify-center w-screen h-screen">
      <label
        htmlFor="input-file"
        className="block w-96 h-80 border-2 rounded border-black border-dashed flex items-center justify-center"
        onDragOver={handleOnDropOver}
        onDragLeave={(e) => e.preventDefault()}
        onDrop={handleOnDropFile}
      >
        <input type="file" hidden accept="image/*" name="" id="input-file" />
        {files.url ? (
          <div className="w-96 h-80">
            <img src={files.url} alt={files.name} className="w-auto" />
            <span>{files.name}</span>
          </div>
        ) : (
          <FaFilePdf className="w-12 h-12" />
        )}
      </label>
    </div>
  );
}

export default DropFileLoad;
