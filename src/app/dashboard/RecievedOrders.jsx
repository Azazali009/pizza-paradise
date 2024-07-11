"use client";

import Loader from "@/ui/Loader";
import Link from "next/link";
import { useOrders } from "../order/useOrders";
import { SHIPPINGFEE } from "../helper/ShippingFee";

const NewOrders = () => {
  const { Orders, isLoading, isError } = useOrders();
  if (isLoading) return <Loader />;
  if (isError) return <p>Error</p>;

  return (
    <div className="mx-auto max-w-6xl py-12">
      <h1 className=" mb-8 text-center text-4xl font-bold uppercase text-primary">
        Recieved Orders
      </h1>

      <div className="no-scrollbar max-h-[400px] overflow-auto">
        <table className=" table ">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>order id</th>
              <th>order details</th>
              <th>price</th>
              <th>cutomer email</th>
              <th>cutomer phone</th>
              <th>cutomer address</th>
              <th>order status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {Orders?.map((order) => (
              <tr
                key={order.id}
                className=" cursor-pointer gap-2 transition-all duration-500 even:bg-gray-100 hover:bg-primary hover:text-tertiary"
              >
                <th></th>
                <td className="font-bold text-gray-500">{order.id}</td>
                <td className="flex flex-col">
                  {JSON.parse(order.cartData)?.map((item, i) => (
                    <p key={i} className="capitalize text-gray-600">
                      {item.title}{" "}
                      <span className=" text-gray-400">X{item.qty}</span>{" "}
                    </p>
                  ))}
                </td>
                <td>
                  {JSON.parse(order.cartData)?.reduce(
                    (acc, cur) => acc + cur.price,
                    0,
                  ) + SHIPPINGFEE}
                </td>
                <td>{order.email}</td>
                <td>{order.phone}</td>
                <td>{order.address}</td>
                <td>
                  <span
                    className={`block w-fit rounded-full px-3 py-1.5 font-medium capitalize ${
                      order.status === "processing" &&
                      "bg-gray-200 text-gray-800"
                    }
                    ${
                      order.status === "completed" &&
                      "bg-green-200 text-green-800"
                    }
                    ${
                      order.status === "incomplete" && "bg-red-200 text-red-800"
                    }  
                    `}
                  >
                    {order.status}
                  </span>
                </td>
                <td>
                  <Link
                    className="flex items-center gap-1 text-sky-500 hover:underline"
                    href={`order/${order.id}`}
                  >
                    <span>View</span>
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
                        d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                      />
                    </svg>
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default NewOrders;
