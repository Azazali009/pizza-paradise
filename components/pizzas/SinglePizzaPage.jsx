import React from "react";
import PizzaNavbar from "./PizzaNavbar";
import SinglePizzaImage from "./SinglePizzaImage";
import SinglePizzaDetail from "./SinglePizzaDetail";
import RecommendedPizzas from "./RecommendedPizzas";
import ResturantAddress from "../resturant address/ResturantAddress";

const SinglePizzaPage = () => {
  return (
    <div className="">
      <div className="my-6 rounded-lg border p-4">
        <PizzaNavbar />
        <div className="grid grid-cols-[30rem_1fr] gap-6 py-6">
          <SinglePizzaImage />
          <SinglePizzaDetail />
        </div>
      </div>
      <div className="divider py-8 font-bold before:h-[1px] after:h-[1px] ">
        More in Somewhat Local
      </div>
      <RecommendedPizzas />
      <ResturantAddress />
    </div>
  );
};

export default SinglePizzaPage;
