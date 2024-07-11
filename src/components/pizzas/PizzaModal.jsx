import Image from "next/image";
import React, { useEffect } from "react";
import { createPortal } from "react-dom";
import CloseSvg from "../../ui/CloseSvg";
import Variation from "@/components/singlePizza/Variation";

const PizzaModal = ({ Pizza, isLoading, onClose }) => {
  const image = Pizza?.image;
  const title = Pizza?.title;
  const subTitle = Pizza?.subTitle;
  const size = Pizza?.size;
  // const drink = Pizza?.drink
  const drink = Pizza?.pizza_extras.drinks;
  const id = Pizza?.id;
  const sizeArr = typeof size === "string" && JSON.parse(size);
  const drinkArr = typeof drink === "string" && JSON.parse(drink);

  useEffect(() => {
    document.body.style.overflowY = "hidden";

    return () => {
      document.body.style.overflowY = "scroll";
    };
  }, []);
  return createPortal(
    <div className="fixed inset-0 z-50 bg-gray-700 bg-opacity-40 backdrop-blur-md ">
      {!isLoading ? (
        <div className="no-scrollbar fixed left-[50%] top-[50%] max-h-[calc(100vh-5em)] w-11/12 max-w-5xl -translate-x-[50%] -translate-y-[50%] overflow-y-scroll rounded-xl bg-white shadow-xl">
          <div className="grid grid-cols-2">
            <button
              className="fixed right-2 top-2 z-50 flex h-8 w-8 items-center justify-center rounded-lg  bg-secondary duration-200 hover:scale-90 hover:bg-primary"
              onClick={onClose}
            >
              <CloseSvg color={"white"} />
            </button>

            <figure className="sticky top-0 h-[500px]">
              <Image
                alt="pizza image"
                width={400}
                height={400}
                src={image}
                className=" h-full w-full"
              />
            </figure>

            <Variation
              sizeArr={sizeArr}
              drinkArr={drinkArr}
              title={title}
              image={image}
              subTitle={subTitle}
              pizzaId={id}
              onClose={onClose}
            />
          </div>
        </div>
      ) : (
        <div className=" fixed left-[50%] top-[50%] max-h-[calc(100vh-5em)] w-11/12 max-w-5xl -translate-x-[50%] -translate-y-[50%]  rounded-lg  shadow-xl">
          <div className=" skeleton flex h-[500px] items-center justify-center text-xl capitalize">
            loading...
          </div>
        </div>
      )}
    </div>,
    document.body,
  );
};

export default PizzaModal;
