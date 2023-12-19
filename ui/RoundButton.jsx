import React from "react";

const RoundButton = ({ children, onClick }) => {
  return (
    <button
      onClick={onClick}
      className=" flex h-10 w-10 items-center justify-center rounded-full bg-secondary text-2xl text-white hover:bg-primary hover:text-tertiary"
    >
      {children}
    </button>
  );
};

export default RoundButton;
