import Button from "@/ui/Button";
import Image from "next/image";
import React from "react";

const FeatureCard = ({ src }) => {
  return (
    <div className="card w-64 bg-base-100 shadow-xl p-4 border-[2px] border-gray-200 hover:border-primary">
      <figure className="   ">
        <Image
          className="w-full h-60 object-cover rounded-lg"
          width={400}
          height={400}
          src={src}
          alt="Shoes"
        />
      </figure>
      <div className="card-body">
        <div className=" flex flex-col justify-center w-full  items-center py-4  ">
          <h2 className="card-title font-extrabold">
            Pizza!
            <div className="badge badge-secondary">NEW</div>
          </h2>

          <p>with 2 drinks and fries</p>
        </div>

        <div className=" flex flex-col gap-2 border-t border-gray-200 pt-4">
          <h2 className=" font-extrabold text-secondary">
            {" "}
            <span>Rs:</span> 500pkr
          </h2>
          <Button>add to cart</Button>
        </div>
      </div>
    </div>
  );
};

export default FeatureCard;

