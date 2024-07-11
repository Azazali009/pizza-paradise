"use client";
import React from "react";
import StarterPizzas from "./StarterPizzas";
import SomeWhatLocal from "./SomeWhatLocal";
import SomewhatSoope from "./SomewhatSoope";
import { usePizzas } from "./usePizzas";
import CardSkeleton from "@/ui/CardSkeleton";
import ErrorMessage from "@/ui/ErrorMessage";

const Pizzas = () => {
  const { Pizzas, isLoading, error } = usePizzas();

  if (isLoading)
    return (
      <div className=" grid grid-cols-[repeat(auto-fit,minmax(10rem,15rem))] justify-center gap-2 gap-x-5 gap-y-7">
        {[...new Array(20)].map((_, index) => (
          <CardSkeleton key={index} />
        ))}
      </div>
    );

  if (error)
    return (
      <ErrorMessage heading={"failed to load pizza menu."}>
        There was an unknown error occurred. Please try again.
      </ErrorMessage>
    );
  const starter = Pizzas?.filter((pizza) => pizza.category === "starter");
  const local = Pizzas?.filter((pizza) => pizza.category === "local");
  const soope = Pizzas?.filter((pizza) => pizza.category === "soope");

  return (
    <div>
      <StarterPizzas pizzas={starter} />
      <SomeWhatLocal pizzas={local} />
      <SomewhatSoope pizzas={soope} />
    </div>
  );
};

export default Pizzas;
