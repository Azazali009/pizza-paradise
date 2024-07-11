import React from "react";
import Card from "../../ui/Card";

const SomeWhatSoope = ({ pizzas }) => {
  return (
    <>
      <div className="divider divider-start text-xl font-bold capitalize text-gray-700">
        somewhat soope
      </div>
      {pizzas?.length > 0 ? (
        <div className="grid grid-cols-[repeat(auto-fit,minmax(10rem,15rem))] justify-center gap-2 py-8  text-center">
          {pizzas?.map((pizza) => (
            <Card key={pizza.id} {...pizza} />
          ))}
        </div>
      ) : (
        <div className=" mt-8 text-center text-slate-500">
          <p className=" leading-8">
            There is still no pizza found of this category.
            <br /> You keep patient and feel free to browse our brand new
            delicious other pizzas. 😒
          </p>
        </div>
      )}
    </>
  );
};

export default SomeWhatSoope;
