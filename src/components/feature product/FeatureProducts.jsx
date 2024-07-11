"use client";
import React from "react";
import { useFeaturePizzas } from "./useFeaturePizzas";
import CardSkeleton from "@/ui/CardSkeleton";
import Card from "@/ui/Card";

const FeatureProducts = () => {
  const { featurePizzas, isLoading, isError } = useFeaturePizzas();
  if (isError)
    return (
      <div className=" my-16 text-center">
        <p>Failed to fetch pizzas. Try again later</p>
      </div>
    );
  return (
    <div className=" mx-auto max-w-6xl border-t border-gray-200 pt-20">
      <h2 className=" mb-12 text-center text-4xl font-black capitalize text-secondary">
        Our best pizzas &rarr;
        <span className="text-primary">One step away</span>
      </h2>

      {!isLoading ? (
        <div className="  grid grid-cols-[repeat(auto-fill,minmax(10rem,15rem))] gap-2 text-center">
          {featurePizzas?.map((pizza) => (
            <Card key={pizza.id} {...pizza} />
          ))}
        </div>
      ) : (
        <div className="grid grid-cols-[repeat(auto-fit,minmax(10rem,15rem))] justify-center gap-2 gap-x-5 gap-y-7">
          {[...new Array(4)].map((_, index) => (
            <CardSkeleton key={index} />
          ))}
        </div>
      )}
    </div>
  );
};

export default FeatureProducts;
