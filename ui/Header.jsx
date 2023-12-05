import Navbar from "@/components/navbar/Navbar";
import Navleft from "@/components/navbar/Navleft";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import Logo from "./Logo";

const Header = () => {
  return (
    <header className=" text-tertiary flex items-center bg-primary px-12 py-2">
      <Link href={"/"}>
        {/* <Image
          src={"/logo.jpg"}
          width={200}
          height={200}
          alt="logo"
          className=" w-12 h-12 rounded-full"
        /> */}
        <Logo />
      </Link>
      <Navbar />
      <Navleft />
    </header>
  );
};

export default Header;
