import Button from "@/ui/Button";
import React, { useEffect, useState } from "react";
import { useAddToCart } from "../shopping cart/useAddToCart";
import { useRouter } from "next/navigation";
import RoundButton from "@/ui/RoundButton";
import { useCart } from "../shopping cart/useCart";
import { useUpdateCart } from "../shopping cart/useUpdateCart";

const SinglePageOperation = ({
  sizePrice,
  drinkPrice,
  title,
  image,
  subTitle,
  selectedSize,
  selectedDrink,
  pizzaId,
  onClose,
}) => {
  const [value, setValue] = useState(1);
  const [isInCart, setIsInCart] = useState(null);
  const isPrice = sizePrice || drinkPrice;
  const price = Number(sizePrice + drinkPrice);
  const { addItem, isAdding } = useAddToCart();
  const { Cart } = useCart();
  const { updateCart, isPending } = useUpdateCart();

  const isWorking = isAdding || isPending;

  const handleAddToCart = () => {
    if (isInCart) {
      updateCart({
        updateObj: {
          size: selectedSize,
          drink: selectedDrink,
          quantity: Number(isInCart.quantity + value),
        },
        id: isInCart.id,
      });

      return;
    }
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
        onSuccess: () => onClose?.(),
      },
    );
  };

  useEffect(() => {
    const alreadyInCart = Cart?.find(
      (cartItem) =>
        cartItem.pizzaId === pizzaId &&
        cartItem?.size === selectedSize &&
        cartItem?.drink === selectedDrink,
    );
    setIsInCart(alreadyInCart);
    console.log(alreadyInCart);
  }, [Cart, pizzaId, selectedDrink, selectedSize]);
  if (!isPrice) return null;

  return (
    <div className=" flex items-center justify-between gap-3 py-4">
      <div className="flex items-center gap-2">
        <RoundButton
          bgColor={"secondary"}
          color={"white"}
          disabled={value === 0}
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
          disabled
          min={1}
          onChange={(e) => setValue(e.target.value)}
        />
        <RoundButton
          bgColor={"secondary"}
          color={"white"}
          onClick={() => setValue((curvalue) => curvalue + 1)}
        >
          +
        </RoundButton>
      </div>

      <Button disabled={isWorking} onClick={handleAddToCart}>
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
