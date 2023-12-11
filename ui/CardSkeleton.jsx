import React from "react";

const CardSkeleton = () => {
  return (
    <div className=" flex flex-col items-center justify-center gap-6 rounded-3xl border-[2px] py-10 text-center shadow-lg">
      <div className="skeleton h-60 w-52"></div>
      <div className="skeleton h-8 w-32"></div>
      <div className="flex gap-2">
        <div className="skeleton h-6 w-16"></div>
        <div className="skeleton h-6 w-10"></div>
      </div>

      <div className="skeleton h-6 w-20"></div>
      <div className="skeleton h-10 w-28 rounded-full"></div>
    </div>
  );
};

export default CardSkeleton;
