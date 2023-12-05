"use client";
import React from "react";
import { Watch } from "react-loader-spinner";

const Loader = () => {
  return (
    <div className=" flex flex-col gap-2">
      <Watch color="#FFCB04" height={100} width={100} />;
      <p className=" text-2xl font-semibold capitalize text-white">
        loading...
      </p>
    </div>
  );
};

export default Loader;
