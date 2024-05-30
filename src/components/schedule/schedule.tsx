import React from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";

export default function Schedule() {
  return (
    <div className="container">
      <FullCalendar
        plugins={[ dayGridPlugin ]}
        initialView="dayGridMonth"
        headerToolbar={{
          start: "title prev next",
          center: "",
          end: ""
        }}
        height={725}
      />
    </div>
  );
}
