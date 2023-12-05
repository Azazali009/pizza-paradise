import React from "react";

const Button = ({ children }) => {
  return (
    <div>
      <button
        title="add to cart"
        className=" test capitalize  bg-secondary font-extrabold hover:bg-primary duration-300 hover:text-black/[0.9] text-white px-4 py-2 rounded-full "
      >
        {children}
      </button>
    </div>
  );
};

export default Button;
