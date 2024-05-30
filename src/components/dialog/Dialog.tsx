import React, { useEffect, useRef } from "react";
import { GiCancel } from "react-icons/gi";
import "./Dialog.css";
import Button from "../button/Button";

// type Button = {
//   title?: string;
//   color?: string;
//   href?: string;
//   onClick?: () => void;
//   children?: React.ReactNode;
// };

type Props = {
  title: string;
  open: boolean;
  children?: React.ReactNode;
  //   footer?: Button[];
  closeIcon: (open: boolean) => void;
  onOk?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  onCancel?: (open: boolean) => void;
  onClear?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  okButtonProps: { disabled: boolean };
  cancelButtonProps: { disabled: boolean };
};

const Dialog = (props: Props) => {
  //#region Destructuring Props
  const {
    title,
    children,
    closeIcon,
    open,
    onOk,
    onCancel,
    onClear,
    okButtonProps,
    cancelButtonProps,
  } = props;
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
      console.log("drawerRef.current:  ", drawerRef.current);
      if (
        drawerRef.current &&
        !drawerRef.current.contains(event.target as Node)
      ) {
        closeIcon(false);
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
  }, [open, closeIcon]);
  //#endregion Handle Function

  return (
    <div id="modelDialog" className={`modelDialog ${open ? "" : "closing"}`}>
      <div className="dialog" ref={drawerRef}>
        <div className="headerDialog">
          <h2>{title}</h2>
          <GiCancel className="iconCancel" onClick={() => closeIcon(false)} />
        </div>
        <div className="bodyDialog">{children}</div>
        <div className="footerDialog">
          <div>
            {onClear && (
              <Button
                title="Clear"
                clear="clear"
                onClick={() => onClear}
              ></Button>
            )}
          </div>
          <div className="footerDialogRight">
            {onCancel && (
              <Button
                title="Cancel"
                color="blue"
                onClick={() => onCancel(false)}
                disabled={cancelButtonProps.disabled}
              ></Button>
            )}
            {onOk && (
              <Button
                title="OK"
                color="blue"
                disabled={okButtonProps.disabled}
                onClick={() => onOk}
              ></Button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dialog;
