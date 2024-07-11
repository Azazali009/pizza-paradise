import React, { useState } from "react";
import SinglePageOperation from "./SinglePageOperation";

const Variation = ({
  sizeArr,
  drinkArr,
  title,
  image,
  subTitle,
  pizzaId,
  onClose,
}) => {
  const [selectedSize, setSelectedSize] = useState("");
  const [selectedDrink, setSelectedDrink] = useState("");
  const [open1, setOpen1] = useState(true);
  const [open2, setOpen2] = useState(false);

  const selectedSizePrice = selectedSize
    ? Number(
        sizeArr?.filter((item) =>
          item.value === selectedSize ? item : null,
        )[0]?.price,
      )
    : 0;
  const selectedDrinkPrice = selectedDrink
    ? Number(
        drinkArr?.filter((item) =>
          item.value === selectedDrink ? item : null,
        )[0]?.price,
      )
    : 0;

  return (
    <div className="  grid min-h-[300px] grid-cols-1 grid-rows-[1fr_5rem] pb-4">
      <div className=" flex flex-col gap-3">
        <div className="collapse bg-base-200">
          <input
            type="checkbox"
            checked={open1}
            onChange={() => setOpen1((open) => !open)}
          />

          <div className="text-md collapse-title font-medium">
            variation
            <span
              className={`badge ml-3 rounded ${
                selectedSize === "" ? "bg-red-600" : "bg-green-400"
              } capitalize text-white`}
            >
              {selectedSize === "" ? "required" : "selected"}
            </span>
          </div>
          <div className="collapse-content bg-white">
            <ul className=" flex flex-col gap-2">
              {sizeArr?.map((item) => (
                <li
                  key={item.value}
                  className="flex justify-between border-b py-3"
                >
                  <div className=" flex items-center gap-3">
                    <input
                      type="radio"
                      name="radio-size"
                      id={item.value}
                      value={selectedSize}
                      onChange={(e) => {
                        setSelectedSize(item.value);
                        setOpen1(false);
                      }}
                      className=" test radio radio-sm  border-[2px] border-gray-400 checked:radio-warning"
                    />
                    <label className=" capitalize" htmlFor={item.value}>
                      {item.value}
                    </label>
                  </div>
                  <p className=" text-sm text-gray-500">Rs.{item.price}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="collapse bg-base-200">
          <input
            type="checkbox"
            checked={open2}
            onChange={() => setOpen2(true)}
          />

          <div className="text-md collapse-title font-medium">
            Drinks
            <span
              className={`badge ml-3 rounded ${
                selectedDrink === "" ? "bg-red-600" : "bg-green-400"
              } capitalize text-white`}
            >
              {selectedDrink === "" ? "required" : "selected"}
            </span>
          </div>
          <div className="collapse-content bg-white">
            <ul className=" flex flex-col gap-2">
              {drinkArr.map((item) => (
                <li
                  key={item.value}
                  className="flex justify-between border-b py-5 text-sm text-tertiary"
                >
                  <div className=" flex items-center gap-3">
                    <input
                      type="radio"
                      name="radio-drink"
                      id={item.value}
                      value={selectedDrink}
                      onChange={(e) => {
                        setSelectedDrink(item.value);
                        setOpen2(false);
                      }}
                      className=" radio radio-sm  border-[2px] border-gray-400 checked:radio-warning"
                    />
                    <label className=" capitalize" htmlFor={item.value}>
                      {item.value}
                    </label>
                  </div>
                  <p>Rs.{item.price}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div className=" sticky bottom-0 mt-auto rounded-lg bg-white px-2 shadow-lg">
        <SinglePageOperation
          sizePrice={selectedSizePrice}
          drinkPrice={selectedDrinkPrice}
          title={title}
          image={image}
          subTitle={subTitle}
          selectedSize={selectedSize}
          selectedDrink={selectedDrink}
          pizzaId={pizzaId}
          onClose={onClose}
        />
      </div>
    </div>
  );
};

export default Variation;
