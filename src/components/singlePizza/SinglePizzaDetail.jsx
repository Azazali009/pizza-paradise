"use client";
import React from "react";
import Variation from "./Variation";

const SinglePizzaDetail = ({
  title,
  description,
  size,
  pizza_extras,
  // drink,
  image,
  subTitle,
  id,
}) => {
  const sizeArr = JSON.parse(size);
  // const drinkArr = JSON.parse(drink);
  const drinkArr = JSON.parse(pizza_extras.drinks);

  return (
    <div>
      <div className=" mb-8">
        <div className="mb-4 flex items-center">
          <h1 className=" text-4xl font-extrabold capitalize">{title}</h1>
          <div className=" ml-auto rounded-full bg-gray-200 p-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              className="h-6 w-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
              />
            </svg>
          </div>
        </div>
        <p className=" text-gray-400">{description}</p>
      </div>
      <Variation
        sizeArr={sizeArr}
        drinkArr={drinkArr}
        title={title}
        image={image}
        subTitle={subTitle}
        pizzaId={id}
      />
    </div>
  );
};

export default SinglePizzaDetail;
