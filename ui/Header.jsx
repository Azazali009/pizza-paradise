import Navbar from "@/components/navbar/Navbar";
import Navleft from "@/components/navbar/Navleft";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import Logo from "./Logo";

const Header = () => {
  return (
    <header className=" flex items-center bg-primary px-12 py-2 text-tertiary shadow-lg">
      <Link href={"/"}>
        <Logo />
      </Link>
      <Navbar />
      <Navleft />
    </header>
  );
};

export default Header;
