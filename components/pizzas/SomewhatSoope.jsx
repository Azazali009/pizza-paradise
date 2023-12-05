import React from "react";
import Card from "../../ui/Card";

const SomewhatSoope = () => {
  return (
    <>
      <div className="divider divider-start text-xl font-bold capitalize text-tertiary">
        somewhat soope
      </div>
      <div className="grid grid-cols-[repeat(auto-fit,minmax(10rem,15rem))] justify-center gap-2 py-8  text-center">
        {[...new Array(8)].map((_, index) => (
          <Card key={index} src={"/pizza.jpg"} />
        ))}
      </div>
    </>
  );
};

export default SomewhatSoope;
