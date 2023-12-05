import Image from "next/image";
import React from "react";

const SinglePizzaImage = () => {
  return (
    <figure className=" min-h-[500px] rounded-lg bg-gray-100 p-8">
      <Image
        src={"/pizza-2.jpg"}
        alt="pizza"
        width={700}
        height={700}
        className="h-full w-full rounded-lg object-cover"
      />
    </figure>
  );
};

export default SinglePizzaImage;
