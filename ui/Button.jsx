import React from "react";

const Button = ({ children, onClick, disabled }) => {
  return (
    <div>
      <button
        disabled={disabled}
        onClick={onClick}
        title="add to cart"
        className="cursor-pointer rounded-full bg-secondary px-4 py-2  font-extrabold capitalize tracking-wider text-white duration-300 hover:bg-primary hover:text-black/[0.9] disabled:cursor-not-allowed disabled:opacity-40 "
      >
        {children}
      </button>
    </div>
  );
};

export default Button;
