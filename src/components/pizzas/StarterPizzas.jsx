import React from "react";
import Card from "../../ui/Card";

const StarterPizzas = ({ pizzas }) => {
  return (
    <>
      <div className="divider divider-start text-xl font-bold capitalize text-gray-700">
        starter
      </div>
      <div className="grid grid-cols-[repeat(auto-fit,minmax(10rem,15rem))] justify-center gap-2 py-8  text-center">
        {pizzas?.map((pizza) => (
          <Card key={pizza.id} {...pizza} />
        ))}
      </div>
    </>
  );
};

export default StarterPizzas;
