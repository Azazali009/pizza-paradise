import React from "react";
import Pizzas from "@/components/pizzas/Pizzas";

const Menu = () => {
  return (
    <div className="min-h-screen p-8 ">
      <div className="mb-20 text-center">
        <h1 className="mb-2 text-2xl font-extrabold capitalize tracking-wide text-secondary">
          Pizzas of multiple choice
        </h1>
        <p className=" text-center tracking-wide text-gray-500 ">
          The delicious pizzas ever in the world is one step away from you go
          and order your choice&apos;s{" "}
          <span className=" text-secondary">pizza</span>.
        </p>
      </div>

      <Pizzas />
    </div>
  );
};

export default Menu;
