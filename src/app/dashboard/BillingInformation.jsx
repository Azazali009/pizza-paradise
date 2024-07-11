import React from "react";

const BillingInformation = ({ Order }) => {
  return (
    <div className="flex flex-col gap-2">
      <h2 className="text-xl font-medium capitalize text-gray-800">
        Billing information
      </h2>
      <p>
        <span className="font-medium text-gray-600">Customer Address:</span>{" "}
        {Order.address}
      </p>
      <p>
        <span className="font-medium text-gray-600">Customer Email:</span>{" "}
        {Order.email}
      </p>
    </div>
  );
};

export default BillingInformation;
