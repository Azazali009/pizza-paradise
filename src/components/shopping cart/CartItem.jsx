import Image from "next/image";
import React, { useState } from "react";
import { useUpdateCart } from "./useUpdateCart";
import { useDeleteCart } from "./useDeleteCart";
import Modal from "@/ui/Modal";

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
  const [showModal, setShowModal] = useState(false);
  const [deleteItemId, setDeleteItemId] = useState(null);

  const onClose = () => setShowModal(false);

  const handleDelete = () => {
    deleteCart(deleteItemId);
  };

  function increaseQuantity(cartId, field) {
    setValue((curVal) => curVal + 1);
    updateCart({ updateObj: { [field]: value + 1 }, id: cartId });
  }
  function decreaseQuantity(cartId, field) {
    setValue((curVal) => (curVal > 1 ? curVal - 1 : 1));
    updateCart({ updateObj: { [field]: value - 1 }, id: cartId });
  }

  return (
    <>
      <div className="mb-6 justify-between rounded-lg bg-white p-6 shadow-md sm:flex sm:justify-start">
        <div className=" max-h-20">
          <Image
            src={image}
            width={200}
            height={200}
            alt="product-image"
            className=" h-full w-32 rounded-lg object-cover sm:w-40"
          />
        </div>
        <div className="sm:ml-4 sm:flex sm:w-full sm:justify-between">
          <div className="mt-5 sm:mt-0">
            <h2 className="text-lg font-bold text-gray-900">{title}</h2>
            <p className="mt-1 text-xs text-gray-700">{subTitle}</p>
            <p className="mt-1 text-xs text-gray-700">
              {size && (
                <span className=" font-semibold capitalize">
                  size : <span className=" font-normal">{size}</span>{" "}
                </span>
              )}
            </p>
            <p className="mt-1 text-xs text-gray-700">
              {drink && (
                <span className=" font-semibold capitalize">
                  drink : <span className=" font-normal">{drink}</span>{" "}
                </span>
              )}
            </p>
          </div>

          <div className="mt-4 flex justify-between sm:mt-0 sm:block sm:space-x-6 sm:space-y-6">
            <div className="flex items-center border-gray-100">
              <button
                disabled={isPending || value === 1}
                onClick={() => decreaseQuantity(id, "quantity")}
                className="cursor-pointer rounded-l bg-gray-100 px-3.5 py-1 duration-100 hover:bg-blue-500 hover:text-blue-50 disabled:cursor-not-allowed disabled:bg-gray-300 disabled:hover:text-black"
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
                onClick={() => {
                  setDeleteItemId(id);
                  setShowModal(true);
                }}
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
      {showModal && (
        <Modal size="mini" onClose={onClose}>
          <div className="text-slate-800">
            <h2 className="p-3 font-semibold">
              Confirm to delete selected item?
            </h2>
            <div className="flex flex-col gap-8 px-5 py-2">
              <div className="border-b border-white/[.1] pb-3 leading-6">
                Are you sure you want to delete the selected item?
                <br /> This action cannot be undone.
              </div>

              <div className=" flex gap-2 self-end">
                <button
                  disabled={isPending || isDeleting}
                  onClick={onClose}
                  className=" rounded border px-4 py-1.5 capitalize hover:bg-gray-300/[.4] disabled:cursor-not-allowed disabled:bg-gray-400"
                >
                  cancel
                </button>
                <button
                  disabled={isPending || isDeleting}
                  onClick={handleDelete}
                  className="  rounded bg-red-950 px-4 py-1.5 capitalize text-red-400 duration-200 hover:bg-red-500 hover:text-red-50 disabled:cursor-not-allowed disabled:bg-opacity-70"
                >
                  delete
                </button>
              </div>
            </div>
          </div>
        </Modal>
      )}
    </>
  );
};

export default CartItem;
