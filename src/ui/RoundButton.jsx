import React from "react";

const RoundButton = ({ children, onClick, disabled, bgColor }) => {
  return (
    <button
      disabled={disabled}
      onClick={onClick}
      className={`flex h-9 w-9 items-center justify-center rounded-full bg-secondary text-2xl text-white hover:bg-primary hover:text-black disabled:cursor-not-allowed disabled:bg-opacity-60`}
    >
      {children}
    </button>
  );
};

export default RoundButton;
