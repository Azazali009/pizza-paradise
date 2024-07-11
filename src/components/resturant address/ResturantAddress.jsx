import React from "react";
import ResturantContact from "./ResturantContact";
import ResturantTiming from "./ResturantTiming";

const ResturantAddress = () => {
  return (
    <div className="my-12 rounded-lg border p-8">
      <div className="flex justify-between px-12">
        <ResturantContact />
        <ResturantTiming />
      </div>
    </div>
  );
};

export default ResturantAddress;
