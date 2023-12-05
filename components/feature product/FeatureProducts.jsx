import React from "react";
import FeatureCard from "../../ui/Card";

const FeatureProducts = () => {
  return (
    <div className=" mx-auto max-w-6xl border-t border-gray-200 pt-20">
      <h2 className=" mb-12 text-center text-4xl font-black capitalize text-secondary">
        Our best pizzas &rarr;
        <span className="text-primary">One step away</span>
      </h2>

      <div className="  grid grid-cols-[repeat(auto-fill,minmax(10rem,15rem))] justify-center gap-2  text-center">
        <FeatureCard src={"/pizza.jpg"} />
        <FeatureCard src={"/pizza-3.jpg"} />
        <FeatureCard src={"/pizza-2.jpg"} />
        <FeatureCard src={"/pizza-2.jpg"} />
      </div>
    </div>
  );
};

export default FeatureProducts;
