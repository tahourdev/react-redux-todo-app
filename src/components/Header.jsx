import React from "react";
import todoLogo from "../assets/todo-logo.png";

export const Header = () => {
  return (
    <header className="w-full h-20 flex items-center justify-center bg-clr1">
      <img className="w-24" src={todoLogo} alt="logo" />
    </header>
  );
};
