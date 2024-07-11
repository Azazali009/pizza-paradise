import React from "react";
import { useRouter } from "next/navigation";
import { useUpdateOrder } from "../order/useUpdateOrder";

const OrderAction = ({ Order }) => {
  const navigate = useRouter();
  const { updateOrder, isUpdating } = useUpdateOrder();

  function handleCompleteOrder(id) {
    updateOrder(
      { updateObj: { status: "completed" }, id },
      {
        onSuccess: () => navigate.push("/dashboard"),
      },
    );
  }
  function handleDenyOrder(id) {
    updateOrder(
      { updateObj: { status: "incomplete" }, id },
      {
        onSuccess: () => navigate.push("/dashboard"),
      },
    );
  }
  return (
    <div className="mt-6 flex items-center justify-end gap-3">
      {Order.status === "processing" && (
        <>
          <button
            disabled={isUpdating}
            onClick={() => handleCompleteOrder(Order.id)}
            className="rounded-full bg-green-600 px-6 py-2 font-semibold capitalize text-white duration-300 hover:bg-green-700 disabled:cursor-not-allowed disabled:bg-green-600 disabled:opacity-60"
          >
            complete
          </button>
          <button
            disabled={isUpdating}
            onClick={() => handleDenyOrder(Order.id)}
            className="rounded-full bg-red-600 px-6 py-2 font-semibold capitalize text-white duration-300 hover:bg-red-700 disabled:cursor-not-allowed disabled:bg-red-600 disabled:opacity-60"
          >
            deny
          </button>
        </>
      )}
      {Order.status === "completed" && (
        <p className="rounded-full bg-green-200 px-5 py-2 font-medium  tracking-wide text-green-800">
          Order already completed
        </p>
      )}
      {Order.status === "incomplete" && (
        <p className="rounded-full bg-red-200 px-5 py-2 font-medium text-red-500">
          This order has been cancelled.
        </p>
      )}
    </div>
  );
};

export default OrderAction;
