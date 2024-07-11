"use client";
import Card from "@/ui/Card";
import CardSkeleton from "@/ui/CardSkeleton";
import ErrorMessage from "@/ui/ErrorMessage";
import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4,
  },
  tablet: {
    breakpoint: { max: 1024, min: 500 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 499, min: 0 },
    items: 1,
  },
};
const RecommendedPizzas = ({ Recommended, isLoading, isError }) => {
  if (isLoading)
    return (
      <div className=" grid grid-cols-[repeat(auto-fit,minmax(10rem,15rem))] justify-center gap-2 gap-x-5 gap-y-7">
        {[...new Array(4)].map((_, i) => (
          <CardSkeleton key={i} />
        ))}
      </div>
    );

  if (isError)
    return (
      <ErrorMessage heading={"Failed to fetch related pizzas"}>
        There was an unknown error on the server. Please try again later!
      </ErrorMessage>
    );
  return (
    <div className="my-6 rounded-lg border p-4">
      <Carousel responsive={responsive} itemClass="px-[10px]">
        {Recommended?.length > 0 ? (
          Recommended?.map((Pizza) => <Card key={Pizza.id} {...Pizza} />)
        ) : (
          <p className=" text-center text-tertiary">No related pizza found</p>
        )}
      </Carousel>
    </div>
  );
};

export default RecommendedPizzas;
