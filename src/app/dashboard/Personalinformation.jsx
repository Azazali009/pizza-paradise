import React from "react";

const Personalinformation = ({ Order }) => {
  return (
    <div className="mb-8 flex flex-col gap-2">
      <h2 className="whitespace-nowrap text-xl font-medium capitalize text-gray-800">
        Personal information
      </h2>
      <p>
        <span className="font-medium text-gray-600">Customer Name:</span>
        {Order.firstName} {Order.lastName}
      </p>
      <p>
        <span className="font-medium text-gray-600">Customer Email:</span>{" "}
        {Order.email}
      </p>
    </div>
  );
};

export default Personalinformation;
