"use client";
import { useParams } from "next/navigation";
import React from "react";
import { useSingleOrder } from "../useSingleOrder";
import { useRouter } from "next/navigation";
import { formateDateAndTime } from "@/app/helper/dateFormatter";
import { useUpdateOrder } from "@/app/order/useUpdateOrder";
import Loader from "@/ui/Loader";
import Image from "next/image";
import Personalinformation from "@/app/dashboard/Personalinformation";
import OrderDetail from "@/app/dashboard/OrderDetail";
import BillingInformation from "@/app/dashboard/BillingInformation";
import PaymentInformation from "@/app/dashboard/PaymentInformation";
import OrderAction from "@/app/dashboard/OrderAction";

const SingleOrder = () => {
  const params = useParams();
  const { orderId } = params;
  const navigate = useRouter();
  const { Order, isLoading, isError } = useSingleOrder(orderId);

  if (isLoading) return <Loader />;
  if (isError) return <p>Error</p>;

  return (
    <div className=" mx-auto my-8 max-w-5xl rounded-md px-6 py-12 shadow-2xl">
      <button
        onClick={() => navigate.back()}
        aria-label="back button"
        title="Back"
        className=" flex h-8 w-8 items-center justify-center rounded-full bg-gray-200 text-secondary shadow-2xl duration-200 hover:scale-90"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="2.5"
          stroke="currentColor"
          className="h-4 w-4"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9 15 3 9m0 0 6-6M3 9h12a6 6 0 0 1 0 12h-3"
          />
        </svg>
      </button>
      <h1 className="mb-6 text-center text-3xl font-semibold capitalize text-primary">
        order summary
      </h1>
      <div className="grid grid-cols-[1fr_2.5fr_1fr_1fr] justify-items-center gap-8">
        <Personalinformation Order={Order} />
        <OrderDetail Order={Order} />
        <BillingInformation Order={Order} />
        <PaymentInformation Order={Order} />
      </div>
      <OrderAction Order={Order} />
    </div>
  );
};

export default SingleOrder;
