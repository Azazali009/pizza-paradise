import Image from "next/image";
import React, { useState } from "react";
import { useUpdateCart } from "./useUpdateCart";
import { useDeleteCart } from "./useDeleteCart";

const CartItem = ({
  id,
  image,
  price,
  subTitle,
  quantity,
  title,
  size,
  drink,
}) => {
  const [value, setValue] = useState(quantity);
  const { updateCart, isPending } = useUpdateCart();
  const { deleteCart, isDeleting } = useDeleteCart();

  const handleDelete = (id) => {
    deleteCart(id);
  };

  function increaseQuantity(cartId, field) {
    setValue((curVal) => curVal + 1);
    updateCart({ updateObj: { [field]: value + 1 }, id: cartId });
  }
  function decreaseQuantity(cartId, field) {
    setValue((curVal) => curVal - 1);
    updateCart({ updateObj: { [field]: value - 2 }, id: cartId });
  }

  return (
    <div className="mb-6 justify-between rounded-lg bg-white p-6 shadow-md sm:flex sm:justify-start">
      <div>
        <Image
          src={image}
          width={200}
          height={200}
          alt="product-image"
          className="h-18 w-32 rounded-lg sm:w-40"
        />
      </div>
      <div className="sm:ml-4 sm:flex sm:w-full sm:justify-between">
        <div className="mt-5 sm:mt-0">
          <h2 className="text-lg font-bold text-gray-900">{title}</h2>
          <p className="mt-1 text-xs text-gray-700">{subTitle}</p>
          <p className="mt-1 text-xs text-gray-700">
            {size && `Size : ${size}`}
          </p>
          <p className="mt-1 text-xs text-gray-700">
            {drink && `Drink : ${drink}`}
          </p>
        </div>

        <div className="mt-4 flex justify-between sm:mt-0 sm:block sm:space-x-6 sm:space-y-6">
          <div className="flex items-center border-gray-100">
            <button
              disabled={isPending}
              onClick={() => decreaseQuantity(id, "quantity")}
              className="cursor-pointer rounded-l bg-gray-100 px-3.5 py-1 duration-100 hover:bg-blue-500 hover:text-blue-50 disabled:cursor-not-allowed disabled:bg-gray-300"
            >
              {" "}
              -{" "}
            </button>
            <input
              className="h-8 w-8 border bg-white text-center text-xs outline-none"
              type="number"
              min={1}
              disabled
              value={value}
              onChange={(e) => setValue(e.target.value)}
            />
            <button
              disabled={isPending}
              onClick={() => increaseQuantity(id, "quantity")}
              className="cursor-pointer rounded-l bg-gray-100 px-3.5 py-1 duration-100 hover:bg-blue-500 hover:text-blue-50 disabled:cursor-not-allowed disabled:bg-gray-300"
            >
              {" "}
              +{" "}
            </button>
          </div>
          <div className="flex items-center space-x-4">
            <p className="text-sm">Rs.{value * price} </p>
            <button
              onClick={() => handleDelete(id)}
              disabled={isDeleting}
              className="rounded-sm hover:text-secondary disabled:cursor-not-allowed disabled:bg-gray-200 disabled:hover:text-tertiary"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="h-5 w-5 duration-150"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
