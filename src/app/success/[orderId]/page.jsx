"use client";
import { SHIPPINGFEE } from "@/app/helper/ShippingFee";
import { useSingleOrder } from "@/app/order/useSingleOrder";
import Button from "@/ui/Button";
import Loader from "@/ui/Loader";
import Image from "next/image";
import { useParams, useRouter } from "next/navigation";
import React from "react";

const OrderSuccess = () => {
  const router = useRouter();
  const params = useParams();
  const { orderId } = params;
  const { Order, isError, isLoading } = useSingleOrder(orderId);

  const totalPrice =
    !isLoading &&
    JSON?.parse(Order?.cartData)?.reduce((acc, cur) => acc + cur.price, 0);

  function HandleClick() {
    router.push("/menu");
  }
  if (isLoading) return <Loader />;
  if (isError) return <p>Error</p>;
  return (
    <div className=" relative my-8 p-6">
      <div className="absolute right-3 top-4 flex items-center gap-2">
        <p className=" font-normal capitalize text-gray-400">order status:</p>
        <p
          className={`rounded-full px-3 py-1.5 text-sm font-medium capitalize
        ${Order.status === "processing" && "bg-gray-200 text-gray-800"}
        ${Order.status === "completed" && "bg-green-200 text-green-800"}
        ${Order.status === "incomplete" && "bg-red-200 text-red-800"} 
        
        `}
        >
          {Order.status}
        </p>
      </div>
      <div className="mb-8 flex flex-col items-center justify-center gap-2">
        <Image
          className="w-52"
          src={"/orderPlaced.png"}
          width={400}
          height={200}
          alt="order"
        />
        <h1 className="text-xl font-bold uppercase tracking-tight text-black">
          yay!we have recieved your order
        </h1>
        <p className="text-gray-400">Your order will be delivered soon...</p>
      </div>

      <h2 className="text-center text-xl font-bold uppercase text-green-600">
        order details
      </h2>
      <div className="mx-auto mt-8 max-w-[70%]">
        <p className="mb-5 text-sm font-medium capitalize">
          order ID:{" "}
          <span className="font-medium text-red-600">#{Order?.id}</span>
        </p>
        {/* Product details */}
        <div className="flex flex-col gap-2 border-b border-gray-200 pb-8">
          {JSON.parse(Order.cartData)?.map((item, i) => (
            <div key={i} className="flex items-center justify-between">
              <div className=" pb-2">
                <p className=" font-semibold capitalize text-gray-700">
                  {item.title}{" "}
                  <span className="text-gray-500"> X {item.qty} </span>
                </p>
                {item?.drink && (
                  <p className="font-light text-gray-400">{item.drink}</p>
                )}
                {item?.size && (
                  <p className="[!important] font-light text-gray-400">
                    {item.size}
                  </p>
                )}
              </div>
              <p className="font-bold text-gray-500">{item?.price}</p>
            </div>
          ))}
          <div
            className=" flex
           flex-col gap-2 border-t border-gray-300 pt-5 font-semibold capitalize"
          >
            <div className="flex justify-between">
              <p>subtotal</p>
              <p className="font-bold text-gray-500">{totalPrice}</p>
            </div>
            <div className="flex justify-between">
              <p>Shipping fee</p>
              <p className="font-bold text-gray-500">{SHIPPINGFEE}</p>
            </div>
            <div className=" flex justify-between">
              <p>Total:</p>
              <p className="font-bold text-gray-500">
                {totalPrice + SHIPPINGFEE}
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* Customer details */}
      <div className="mx-auto mt-6 max-w-[70%]">
        <h2 className="text-center text-xl font-bold uppercase text-green-600">
          customer details
        </h2>

        <div className="flex flex-col gap-2">
          <p className="capitalize text-gray-400 ">
            customer Name:{" "}
            <span className="font-medium capitalize text-gray-700">
              {Order.firstName} {Order.lastName}
            </span>{" "}
          </p>
          <p className="capitalize text-gray-400 ">
            customer Phone number:{" "}
            <span className="font-medium capitalize text-gray-700">
              {Order.phone}
            </span>{" "}
          </p>
          <p className="capitalize text-gray-400 ">
            customer Address:{" "}
            <span className="font-medium capitalize text-gray-700">
              {Order.address}
            </span>{" "}
          </p>
        </div>
        <div className=" my-6 flex justify-center">
          <Button onClick={HandleClick}>Go to menu</Button>
        </div>
      </div>
    </div>
  );
};

export default OrderSuccess;
