import Image from "next/image";
import React from "react";

const Banner = ({ image }) => {
  return (
    <div key={image.id} className=" banner-image-box relative">
      <Image
        src={image.imageSrc}
        alt={image.imageName}
        width={700}
        height={700}
        className=" banner-image  "
      />

      <button
        title="add to cart"
        className=" absolute bottom-6 left-6 rounded-full  bg-secondary px-6 py-2 font-extrabold capitalize text-red-200 duration-300 hover:bg-primary hover:text-black/[0.9] "
      >
        buy now
      </button>

      <div className="absolute left-4 top-4 overflow-hidden rounded-full  bg-primary p-8  pl-24 font-extrabold shadow-2xl  ">
        <h1 className="  text-9xl text-sky-600">
          <span className="relative z-10 animate-pulse">50% </span>
          <span className=" rounded-full  bg-secondary p-4 text-primary">
            off
          </span>{" "}
        </h1>
        <span className=" skew-z-12 absolute left-0 top-12 inline-block -translate-x-[35%]  -rotate-45  rounded-sm bg-sky-600 px-32 py-1.5 font-medium text-white">
          Big deal of the day
        </span>
      </div>

      {/* <div className="absolute bottom-4 right-4 overflow-hidden  rounded-full bg-secondary p-8 pr-20 font-extrabold  transition-all duration-500">
              <h1 className="  text-9xl text-sky-600">
                <span className=" rounded-full bg-primary p-4 text-secondary">
                  off
                </span>{" "}
                <span className="relative z-10 inline-block -translate-y-4 animate-pulse text-8xl capitalize text-success">
                  Discount
                </span>
              </h1>
              <span className="text-tertiary absolute right-0 top-12  inline-block translate-x-[30%] rotate-45 bg-primary px-32 py-1.5 font-semibold">
                Eat and enjoy
              </span>
            </div> */}
    </div>
  );
};

export default Banner;
