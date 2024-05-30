import React, { useRef, useState } from "react";
import "./dragDrop.css";
import { Element } from "../../utils/interface/interfaceForm";

export default function DragDrop() {
  const [data, setData] = useState<Element[]>([]);
  const dragPerson = useRef<number>(0);
  const draggedOverPerson = useRef<number>(0);

  const arrButton = [
    {
      type: "text",
      title: "Input",
    },
    {
      type: "checkbox",
      title: "CheckBox",
    },
    {
      type: "textarea",
      title: "TextBox",
    },
  ];

  // Handle onDragStart get item
  function handleOnDrag(
    e: React.DragEvent<HTMLDivElement>,
    type: string,
    id: number
  ) {
    let data = {
      type,
      id,
    };

    e.dataTransfer.setData("data", JSON.stringify(data));
  }

  // Handle dragover short block default browser behavior
  function handleDragOver(e: React.DragEvent<HTMLDivElement>) {
    e.preventDefault();
  }

  // Handle onDrop add item render content
  function handleOnDrop(e: React.DragEvent<HTMLDivElement>) {
    try {
      let dataCoppy = JSON.parse(e.dataTransfer.getData("data"));
      if (
        e.currentTarget.className === "boxInput" ||
        e.currentTarget.className === "box"
      ) {
        setData((prev) => [...prev, dataCoppy]);
      }
    } catch (error) {
      return;
    }
  }

  // Handle sort content item right
  function handleSort() {
    const indexStart = dragPerson.current; // chỉ mục phần tử cần lấy
    const indexTarget = draggedOverPerson.current; // chỉ mục muốn dặt
    const sortData = [...data];
    let item = sortData.splice(indexStart, 1)[0];
    sortData.splice(indexTarget, 0, item);
    setData(sortData);
  }

  // Handle onDragEnd remove item in content
  function handleRemove(id: number) {
    const newData = data.filter((t) => t.id !== Number(id));
      setData(newData)
  }

  return (
    <div className="main">
      <div className="box">
        <div className="boxSelect">
          {arrButton.map((button, i) => {
            const uniqueId = Math.random();
            return (
              <div
                className="button"
                key={i}
                draggable
                onDragStart={(e) => handleOnDrag(e, button.type, uniqueId)}
              >
                {button.title}
              </div>
            );
          })}
        </div>

        <div
          className="boxInput"
          onDrop={handleOnDrop}
          onDragOver={handleDragOver}
        >
          {data.map((item, i) => {
            if (item.type === "text") {
              return (
                <div className="item">
                  <input
                    key={i}
                    type="text"
                    draggable
                    onDragStart={(e) => (dragPerson.current = i)}
                    onDragEnter={() => (draggedOverPerson.current = i)}
                    onDragEnd={handleSort}
                    onDragOver={handleDragOver}
                  />
                  <h1 className="delete" onClick={() => handleRemove(item.id)}>Delete</h1>
                </div>
              );
            }
            if (item.type === "checkbox") {
              return (
                <div  className="item">
                  <input
                    key={i}
                    type="checkbox"
                    name=""
                    id=""
                    draggable
                    onDragStart={(e) => (dragPerson.current = i)}
                    onDragEnter={() => (draggedOverPerson.current = i)}
                    onDragEnd={handleSort}
                    onDragOver={handleDragOver}
                  />
                  <div className="delete" onClick={() => handleRemove(item.id)}>Delete</div>
                </div>
              );
            }
            if (item.type === "textarea") {
              return (
                <div  className="item">
                  <textarea
                    key={i}
                    name=""
                    id=""
                    cols={30}
                    rows={10}
                    draggable
                    onDragStart={() => (dragPerson.current = i)}
                    onDragEnter={() => (draggedOverPerson.current = i)}
                    onDragEnd={handleSort}
                    onDragOver={(e) => e.preventDefault()}
                  ></textarea>
                  <div className="delete" onClick={() => handleRemove(item.id)}>Delete</div>
                </div>
              );
            }
            return "";
          })}
        </div>
      </div>
    </div>
  );
}
