import React from "react";

const Button = ({ children, onClick, disabled, type }) => {
  return (
    <div>
      <button
        type={type}
        disabled={disabled}
        onClick={onClick}
        title="add to cart"
        className="w-full cursor-pointer rounded-full bg-secondary px-4 py-2 font-extrabold capitalize  tracking-wider text-white duration-300 hover:bg-primary hover:text-black/[0.9] disabled:cursor-not-allowed disabled:bg-secondary disabled:text-white disabled:opacity-40 "
      >
        {children}
      </button>
    </div>
  );
};

export default Button;
