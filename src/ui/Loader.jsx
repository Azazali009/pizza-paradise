"use client";
import React from "react";
import { Watch } from "react-loader-spinner";

const Loader = () => {
  return (
    <div className=" absolute left-0 top-0 z-20 flex min-h-screen w-full flex-col items-center justify-center gap-2 backdrop-blur-lg">
      <Watch color="#FFCB04" height={100} width={100} />
      <p className=" text-xl font-medium capitalize text-gray-600">
        loading...
      </p>
    </div>
  );
};

export default Loader;
