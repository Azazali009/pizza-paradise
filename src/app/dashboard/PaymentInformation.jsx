import React from "react";

const PaymentInformation = ({ Order }) => {
  return (
    <div className="flex flex-col gap-2">
      <h2 className="text-xl font-medium capitalize text-gray-800">
        Payment information
      </h2>
      <p>
        <span className="font-medium text-gray-600">Payment method:</span>{" "}
        {Order.payment ? Order.payment : "No payment method selected"}
      </p>
    </div>
  );
};

export default PaymentInformation;
