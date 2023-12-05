import Loader from "@/ui/Loader";
import React from "react";

const Loading = () => {
  return (
    <div className=" absolute left-0 top-0 z-20 flex min-h-screen w-full items-center justify-center backdrop-blur-md">
      <Loader />
    </div>
  );
};

export default Loading;
