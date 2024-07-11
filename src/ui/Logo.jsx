import Image from "next/image";
import React from "react";

const Logo = () => {
  return (
    <Image
      src={"/logo.jpg"}
      width={200}
      height={200}
      alt="logo"
      className=" w-16 h-16 rounded-full"
    />
  );
};

export default Logo;
