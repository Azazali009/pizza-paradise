import Image from "next/image";
import React from "react";
import { formateDate } from "../helper/dateFormatter";

const OrderDetail = ({ Order }) => {
  return (
    <div className="mb-8 flex flex-col gap-2 text-xs">
      <h2 className="text-xl font-medium capitalize text-gray-800">
        order details
      </h2>
      <div className="mb-3 flex flex-col gap-4">
        {JSON.parse(Order.cartData)?.map((item, i) => (
          <div key={i}>
            <div className=" flex items-start gap-2">
              <Image
                alt="image"
                src={item.image}
                height={500}
                width={500}
                className="aspect-square w-10 rounded-md border border-gray-400"
              />
              <div>
                <p>
                  <span className="whitespace-nowrap font-medium capitalize text-gray-600">
                    {item.title} x {item.qty}
                  </span>
                </p>

                {item?.size && (
                  <p>
                    <span className=" font-medium text-gray-600">Size:</span>{" "}
                    {item?.size}
                  </p>
                )}
                {item?.drink && (
                  <p>
                    <span className=" font-medium text-gray-600">Drink:</span>{" "}
                    {item?.drink}
                  </p>
                )}

                <p>
                  <span className=" font-medium text-gray-600">
                    Price({item?.price} * {item.qty}):
                  </span>{" "}
                  {item?.price * item?.qty}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <p>
        <span className="font-medium text-gray-600">Time:</span>{" "}
        {formateDate(Order.created_at)}
      </p>
    </div>
  );
};

export default OrderDetail;
