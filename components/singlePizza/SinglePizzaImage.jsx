import Image from "next/image";
import React from "react";

const SinglePizzaImage = ({ image }) => {
  return (
    <figure className=" rounded-lg bg-gray-100 p-8">
      <Image
        src={image}
        alt="pizza"
        width={700}
        height={700}
        className="h-[450px] w-full rounded-lg object-cover"
      />
    </figure>
  );
};

export default SinglePizzaImage;
