import CartSvg from "@/ui/CartSvg";
import DarkModeToggle from "@/ui/DarkModeToggle";
import PersonSvg from "@/ui/PersonSvg";
import SearchSvg from "@/ui/SearchSvg";
import Link from "next/link";
import React from "react";

const Navleft = () => {
  return (
    <div className=" ml-auto flex gap-1">
      <SearchSvg />
      {/* divider */}
      <div className="divider divider-horizontal m-0 h-10 opacity-40 before:w-[1px] before:bg-secondary after:w-[1px] after:bg-secondary"></div>

      <Link href={"/profile"} className=" flex items-center justify-center ">
        <PersonSvg />
      </Link>

      {/* divider */}
      <div className="divider divider-horizontal m-0 h-10 opacity-40 before:w-[1px] before:bg-secondary after:w-[1px] after:bg-secondary"></div>

      <Link href={"/cart"} className=" flex items-center justify-center">
        <CartSvg />
      </Link>

      <div className="divider divider-horizontal m-0 h-10 opacity-40 before:w-[1px] before:bg-secondary after:w-[1px] after:bg-secondary"></div>

      <DarkModeToggle />
    </div>
  );
};

export default Navleft;
