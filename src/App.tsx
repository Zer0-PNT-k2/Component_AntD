import React from "react";
import { SocketChat } from "./components";
// import Drawer from "./components/drawer/Drawer";
// import Table from "./components/table/Table";
// import { columns, datas } from "./components/table/props";

function App() {
  return (
    <div className="flex items-center justify-center w-screen h-screen">
      <div className="flex items-center justify-center">
        <SocketChat />
      </div>
    </div>
  );
}

export default App;
