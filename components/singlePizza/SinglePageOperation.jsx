import Button from "@/ui/Button";
import React, { useState } from "react";
import { useAddToCart } from "../shopping cart/useAddToCart";
import { useRouter } from "next/navigation";
import RoundButton from "@/ui/RoundButton";

const SinglePageOperation = ({
  sizePrice,
  drinkPrice,
  title,
  image,
  subTitle,
  selectedSize,
  selectedDrink,
  pizzaId,
}) => {
  const router = useRouter();
  const [value, setValue] = useState(1);
  const isPrice = sizePrice || drinkPrice;
  const price = Number(sizePrice + drinkPrice);
  const { addItem, isAdding } = useAddToCart();

  const handleAddToCart = () => {
    addItem(
      {
        pizzaId,
        image,
        title,
        value,
        subTitle,
        price: Number(price * value),
        selectedSize,
        selectedDrink,
      },
      {
        onSuccess: () => router.push("/cart"),
      },
    );
  };

  if (!isPrice) return null;
  return (
    <div className=" flex items-center justify-between gap-3 py-4">
      <div className="flex items-center gap-2">
        <RoundButton
          onClick={() =>
            setValue((curvalue) => (curvalue > 1 ? curvalue - 1 : 1))
          }
        >
          -
        </RoundButton>

        <input
          type="text"
          className="  h-10 max-w-[5rem] rounded-full border px-2 text-center outline-none hover:border-black focus:border-none focus:ring-1 focus:ring-primary"
          value={value}
          min={1}
          onChange={(e) => setValue(e.target.value)}
        />
        <RoundButton onClick={() => setValue((curvalue) => curvalue + 1)}>
          +
        </RoundButton>
      </div>

      <Button disabled={isAdding} onClick={handleAddToCart}>
        <p className=" flex gap-3">
          <span>
            {isPrice ? (
              value * price
            ) : (
              <span className=" text-sm">no items selected</span>
            )}
          </span>
          <span>add to cart</span>
        </p>
      </Button>
    </div>
  );
};

export default SinglePageOperation;
