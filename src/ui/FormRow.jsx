import React from "react";

const FormRow = ({ children, lable, error }) => {
  return (
    <div
      className={` grid grid-cols-1 gap-x-8 gap-y-2 sm:grid-cols-[10rem_1fr]`}
    >
      <label className="text-lg font-normal capitalize leading-6 text-inherit ">
        {lable}:
      </label>
      <div className=" space-y-2">
        {children}
        {error && <p className=" text-sm font-medium text-red-600">{error}</p>}
      </div>
    </div>
  );
};

export default FormRow;
