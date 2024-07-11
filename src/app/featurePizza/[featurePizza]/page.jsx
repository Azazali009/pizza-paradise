import PizzaNavbar from "@/components/singlePizza/SinglePizzaNavbar";
import RecommendedPizzas from "@/components/singlePizza/RecommendedPizzas";
import SinglePizzaDetail from "@/components/singlePizza/SinglePizzaDetail";
import SinglePizzaImage from "@/components/singlePizza/SinglePizzaImage";
import ResturantAddress from "@/components/resturant address/ResturantAddress";
import React from "react";

const FeatureSinglePizzaPage = ({ params }) => {
  const { featurePizza } = params;
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

export default FeatureSinglePizzaPage;
