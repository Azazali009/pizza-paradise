import Button from "@/ui/Button";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { usePizza } from "@/components/pizzas/usePizza";
import Modal from "../components/pizzas/PizzaModal";
import { useCart } from "@/components/shopping cart/useCart";
import RoundButton from "./RoundButton";
import { useUpdateCart } from "@/components/shopping cart/useUpdateCart";
import { useDeleteCart } from "@/components/shopping cart/useDeleteCart";

const Card = ({ image: src, title, price, subTitle, id }) => {
  const router = useRouter();
  const [show, setShow] = useState(false);
  const [isInCart, setIsInCart] = useState(null);
  const [selectedId, setSelectedId] = useState(null);
  const { Pizza, isLoading } = usePizza(selectedId);
  const { updateCart, isPending } = useUpdateCart();
  const { deleteCart, isDeleting } = useDeleteCart();
  const { Cart } = useCart();

  const isWorking = isPending || isDeleting;

  const onClose = () => setShow(false);

  function handleClick(e, selId) {
    e.stopPropagation();
    e.preventDefault();
    setSelectedId(selId);
    setShow(true);
  }

  function stopPropagation(e) {
    e.stopPropagation();
  }

  function increaseQuantity(cartId, field) {
    updateCart({ updateObj: { [field]: isInCart.quantity + 1 }, id: cartId });
  }
  function decreaseQuantity(cartId, field) {
    if (isInCart.quantity === 1) return deleteCart(isInCart.id);
    updateCart({
      updateObj: { [field]: isInCart.quantity > 1 ? isInCart.quantity - 1 : 1 },
      id: cartId,
    });
  }

  useEffect(() => {
    const isCheckInCart = Cart?.find((cartItem) => cartItem.pizzaId === id);
    setIsInCart(isCheckInCart);
  }, [Cart, id]);
  return (
    <>
      <div
        onClick={() => {
          router.push(`/menu/${id}`);
        }}
        className="card border-[2px] border-gray-300 border-opacity-60 bg-white p-4 text-gray-700 shadow-xl hover:cursor-pointer hover:border-primary"
      >
        <figure className=" relative rounded-lg bg-gray-300">
          <Image
            className="h-60 w-full rounded-lg object-cover"
            width={400}
            height={400}
            src={src}
            alt="Shoes"
          />
          {/* <div
            onClick={(e) => {
              e.stopPropagation();
              alert("hi 2");
            }}
            className=" absolute right-2 top-2 cursor-pointer rounded-full bg-gray-200 p-2"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              className="h-6 w-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
              />
            </svg>
          </div> */}
        </figure>
        <div className="card-body flex flex-col items-center justify-between">
          <div className=" flex w-full flex-col items-center justify-center py-4  ">
            <h2 className="card-title line-clamp-1 font-medium ">{title}</h2>

            <p className=" text-sm">{subTitle}</p>
          </div>

          <div className="  flex flex-col gap-2 border-t border-gray-200 pt-4">
            <h2 className=" text-xs font-extrabold text-secondary">
              {" "}
              <span>Rs:</span> {price}
            </h2>

            {!isInCart ? (
              <Button onClick={(e) => handleClick(e, id)}>add to cart</Button>
            ) : (
              <div
                className=" flex items-center gap-1 rounded-full bg-secondary px-2  "
                onClick={stopPropagation}
              >
                <RoundButton
                  bgColor={"white"}
                  color={"secondary"}
                  disabled={isWorking}
                  onClick={() => decreaseQuantity(isInCart.id, "quantity")}
                >
                  -
                </RoundButton>
                <input
                  type="text"
                  value={isInCart.quantity}
                  disabled
                  className="h-10 max-w-[2rem] rounded-full px-2 text-center text-white outline-none hover:border-black focus:border-none focus:ring-1 focus:ring-primary disabled:cursor-not-allowed disabled:bg-transparent disabled:hover:border-none"
                />
                <RoundButton
                  bgColor={"white"}
                  color={"secondary"}
                  disabled={isWorking}
                  onClick={() => increaseQuantity(isInCart.id, "quantity")}
                >
                  +
                </RoundButton>
              </div>
            )}
          </div>
        </div>
      </div>
      {!isLoading && show && (
        <Modal Pizza={Pizza} isLoading={isLoading} onClose={onClose} />
      )}
    </>
  );
};

export default Card;
