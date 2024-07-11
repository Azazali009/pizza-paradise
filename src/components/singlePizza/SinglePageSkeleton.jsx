import React from "react";

const SinglePageSkeleton = () => {
  return (
    <div className=" mt-8 grid min-h-screen max-w-5xl grid-cols-[30rem_1fr] justify-items-center gap-4 px-16">
      {/* navbar skeleton */}
      <div className=" col-start-1 col-end-3 flex items-center gap-4 justify-self-start">
        <div className="skeleton h-6 w-16"></div>
        <div className="skeleton h-6 w-20"></div>
      </div>
      {/* left image skeleton */}
      <div className="skeleton h-[30rem] w-full"></div>
      {/* right detail skeleton */}
      <div className="flex flex-col gap-4 justify-self-start">
        <div className="flex w-full items-center justify-between">
          <div className="skeleton h-6 w-80 rounded-full"></div>
          <div className="skeleton h-12 w-12 rounded-full"></div>
        </div>
        <div className="skeleton h-4 w-[30rem] rounded-full"></div>
        <div className="skeleton h-4 w-72 rounded-full"></div>
        <div className="skeleton mt-8 h-12 w-[32rem] rounded-full"></div>
        <div className="mt-8 flex justify-between">
          <div className="skeleton h-8 w-40 rounded-full"></div>
          <div className="skeleton h-8 w-52 rounded-full"></div>
        </div>
      </div>
    </div>
  );
};

export default SinglePageSkeleton;
