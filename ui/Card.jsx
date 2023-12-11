import Button from "@/ui/Button";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Card = ({ image: src, title, price, subTitle, id }) => {
  return (
    <Link
      href={`/menu/${id}`}
      className="card border-[2px] border-gray-300 border-opacity-60 bg-base-100 p-4 shadow-xl hover:border-primary"
    >
      <figure className=" relative rounded-lg bg-gray-300">
        <Image
          className="h-60 w-full rounded-lg object-cover"
          width={400}
          height={400}
          src={src}
          alt="Shoes"
        />
        <div className=" absolute right-2 top-2 rounded-full bg-gray-200 p-2">
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
        </div>
      </figure>
      <div className="card-body flex flex-col items-center justify-between">
        <div className=" flex w-full flex-col items-center justify-center py-4  ">
          <h2 className="card-title font-extrabold">{title?.slice(0, 8)}...</h2>

          <p>{subTitle}</p>
        </div>

        <div className=" flex flex-col gap-2 border-t border-gray-200 pt-4">
          <h2 className=" text-xs font-extrabold text-secondary">
            {" "}
            <span>Rs:</span> {price}
          </h2>
          <Button>add to cart</Button>
        </div>
      </div>
    </Link>
  );
};

export default Card;
