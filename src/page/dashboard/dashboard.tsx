import React from "react";
import { Course } from "../../utils/interface/interfaceCourse";
export default function Dashboard() {

  const listCourse: Course[] = [
    {
      id: 0,
      name: "Bajaj Finery",
      price: 1839.0,
      discount: "10% Profit",
    },
    {
      id: 1,
      name: "TTML",
      price: 100.0,
      discount: "10% loss",
    },
    {
      id: 2,
      name: "Reliance",
      price: 200.0,
      discount: "10% Profit",
    },
    {
      id: 3,
      name: "TTML",
      price: 189.0,
      discount: "10% loss",
    },
    {
      id: 4,
      name: "Stolon",
      price: 189.0,
      discount: "10% loss",
    },
  ];

  return (
    <>
      <div className="h-20 flex bg-gray-300 items-center">
        <div className="w-64">
          <h1>Header image</h1>
        </div>
        <div className="flex-1">
          <div className="flex justify-between">
            <div>Header search</div>
            <div>Header icon</div>
          </div>
        </div>
      </div>
      <div className="flex">
        <div className="w-64 bg-gray-300">SideBar</div>
        <div className="flex-1 mx-6 my-4">
          <div className="grid grid-cols-3 gap-4">
            <div className="w-82 h-64 bg-blue"></div>
            <div className="w-82 h-64 bg-blue"></div>
            <div className="w-82 h-64 grid grid-rows-2 gap-4">
              <div className="bg-blue"></div>
              <div className="bg-blue"></div>
            </div>
            <div className="col-span-2 w-82 h-64 bg-blue"></div>
            <div className="w-auto h-auto bg-blue">
              <ul>
                {listCourse.map((course) => {
                  return (
                    <li key={course.id} className="flex justify-between mx-4 mb-2 pb-2 border-b border-b-stone-950">
                      <div>
                        <h1>{course.name}</h1>
                        <span>{course.discount}</span>
                      </div>
                      <div>
                        <h2>{course.price}</h2>
                      </div>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
