import { smooch } from "@/app/helper/stylishFont";
import Image from "next/image";
import React from "react";

const Banner = ({
  image,
  discPer,
  subTitle,
  discTitle,
  originalPrice,
  discPrice,
}) => {
  return (
    <div className=" banner-image-box relative">
      <Image
        src={image}
        alt={discTitle}
        width={500}
        height={500}
        className="banner-image rounded-2xl"
      />
      <div className="absolute left-[50%] top-[50%] w-full -translate-x-[50%] translate-y-[50%] bg-black/[0.5]">
        <h2
          className={`text-9xl font-bold capitalize text-primary ${smooch.className}`}
        >
          {discTitle}
        </h2>
      </div>

      <div className=" absolute right-2 top-2 flex  aspect-square w-72 flex-col items-center justify-center rounded-full border-[3px] border-primary bg-secondary/[0.3] text-5xl font-bold capitalize">
        <p className=" text-white">
          Rs. <del className={smooch.className}>{originalPrice}</del>{" "}
        </p>
        <p className={"   text-primary"}>Rs.{discPrice}</p>
      </div>
      <button
        title="add to cart"
        className=" absolute bottom-6 left-6 rounded-full  bg-secondary px-6 py-2 font-extrabold capitalize text-red-200 duration-300 hover:bg-primary hover:text-black/[0.9] "
      >
        buy now
      </button>

      <div className="absolute left-4 top-4 overflow-hidden rounded-full  bg-primary p-8  pl-24 font-extrabold shadow-2xl  ">
        <h1 className="  text-9xl text-sky-600">
          <span className="relative z-10 animate-pulse">{discPer}% </span>
          <span className=" rounded-full  bg-secondary p-4 text-primary">
            off
          </span>{" "}
        </h1>
        <span className=" skew-z-12 absolute left-0 top-12 inline-block -translate-x-[35%]  -rotate-45  rounded-sm bg-sky-600 px-32 py-1.5 font-medium text-white">
          {subTitle}
        </span>
      </div>
    </div>
  );
};

export default Banner;
