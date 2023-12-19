import React from "react";
import PizzaNavbar from "./SinglePizzaNavbar";
import SinglePizzaImage from "./SinglePizzaImage";
import SinglePizzaDetail from "./SinglePizzaDetail";
import RecommendedPizzas from "./RecommendedPizzas";
import ResturantAddress from "../resturant address/ResturantAddress";
import { useRecommendedPizza } from "./useRecommededPizza";

const SinglePizzaPage = ({ Pizza = {} }) => {
  const { title, image, category } = Pizza;

  const { Recommended, isLoading, isError } = useRecommendedPizza(category);

  return (
    <div className="">
      <div className="my-6 rounded-lg border p-4">
        <PizzaNavbar title={title} />
        <div className="grid grid-cols-[30rem_1fr] items-start gap-6 py-6">
          <SinglePizzaImage image={image} />
          <SinglePizzaDetail {...Pizza} />
        </div>
      </div>
      <div className="divider py-8 font-bold before:h-[1px] after:h-[1px] ">
        Related pizza
      </div>
      <RecommendedPizzas
        Recommended={Recommended}
        isLoading={isLoading}
        isError={isError}
      />
      <ResturantAddress />
    </div>
  );
};

export default SinglePizzaPage;
