import React from "react";
import ErrorSvg from "./ErrorSvg";

const ErrorMessage = ({ children, heading }) => {
  return (
    <div className=" flex flex-col items-center justify-center gap-3 border-b border-gray-200 py-6">
      <ErrorSvg />
      <div className=" flex flex-col gap-2">
        {heading && (
          <h2 className=" text-center font-semibold capitalize">{heading}</h2>
        )}
        <p>{children}</p>
      </div>
    </div>
  );
};

export default ErrorMessage;
