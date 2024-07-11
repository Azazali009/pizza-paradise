"use client";
import SinglePizzaPage from "@/components/singlePizza/SinglePizzaPage";
import { usePizza } from "@/components/pizzas/usePizza";
import ErrorSvg from "@/ui/ErrorSvg";
import React from "react";
import SinglePageSkeleton from "@/components/singlePizza/SinglePageSkeleton";

const SinglePizza = ({ params }) => {
  const { pizzaId } = params;
  const { Pizza, isError, isLoading } = usePizza(pizzaId);

  if (isLoading) return <SinglePageSkeleton />;
  if (isError)
    return (
      <div className=" flex min-h-screen w-full flex-col items-center justify-center gap-3">
        <ErrorSvg />
        <p className=" text-center text-3xl font-bold capitalize text-secondary">
          Failed to fetch pizza. Try again letter!
        </p>
      </div>
    );

  return (
    <div className=" mx-auto mt-6 min-h-screen max-w-6xl  ">
      <SinglePizzaPage Pizza={Pizza} />
    </div>
  );
};

export default SinglePizza;
