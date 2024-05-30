import React from "react";
import "./Button.css";

type Props = {
  title?: string;
  color?: string;
  href?: string;
  disabled?: boolean; 
  clear?: string; 
  onClick?: () => void;
  children?: React.ReactNode;
};

const Button = (props: Props) => {
  //#region Destructuring Props
  const { title, color, onClick, clear, disabled } = props;
  //#endregion Destructuring Props

  //#region Declare Hook
  //#endregion Declare Hook

  //#region Selector
  //#endregion Selector

  //#region Declare State
  //#endregion Declare State

  //#region Implement Hook
  //#endregion Implement Hook

  //#region Handle Function
  //#endregion Handle Function

  return (
    <div className="text-center">
      <button className={`defaultStyle ${clear} ${color} ${disabled ? "disabled": "" }`} onClick={onClick} disabled={disabled} >{title}</button>
    </div>
  );
}

export default Button;
