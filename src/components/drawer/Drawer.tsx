import React, { useEffect, useRef } from "react";
import "./Drawer.css";
import { GiCancel } from "react-icons/gi";

type Props = {
  title: string;
  onClose: (open: boolean) => void;
  open: boolean;
  children: React.ReactNode;
};

function Drawer(props: Props) {
  //#region Destructuring Props
  const { title, onClose, open, children } = props;
  //#endregion Destructuring Props

  //#region Declare Hook
  const drawerRef = useRef<HTMLDivElement>(null);
  //#endregion Declare Hook

  //#region Selector
  //#endregion Selector

  //#region Declare State
  //#endregion Declare State

  //#region Implement Hook
  //#endregion Implement Hook

  //#region Handle Function
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        drawerRef.current &&
        !drawerRef.current.contains(event.target as Node)
      ) {
        onClose(false);
      }
    }

    if (open) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [open, onClose]);
  //#endregion Handle Function

  return (
    <div id="dialogDrawer">
      <div className={`dialog ${open ? "opening" : "closing"}`} ref={drawerRef}>
        <div className="headerDialogDraw">
          <h1>{title}</h1>
          <GiCancel className="iconCancel" onClick={() => onClose(false)} />
        </div>
        <div className="bodyDialogDraw">{children}</div>
      </div>
    </div>
  );
}

export default Drawer;
