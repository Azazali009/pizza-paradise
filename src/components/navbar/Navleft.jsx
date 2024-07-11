import CartSvg from "@/ui/CartSvg";
import DarkModeToggle from "@/ui/DarkModeToggle";
import PersonSvg from "@/ui/PersonSvg";
import Search from "@/components/searchPizza/SearchPizza";
import Link from "next/link";
import React from "react";
import VerticalDivider from "@/ui/VerticalDivider";
import { useCurrentUser } from "../auth/useCurrentUser";

const Navleft = () => {
  const { isAuthenticated } = useCurrentUser();
  return (
    <div className=" ml-auto flex gap-1">
      <Search />
      {/* divider */}
      <VerticalDivider />

      <Link href={"/cart"} className=" flex items-center justify-center">
        <CartSvg />
      </Link>
      <VerticalDivider />
      {isAuthenticated && (
        <>
          <Link
            href={"/profile"}
            className=" flex items-center justify-center "
          >
            <PersonSvg />
          </Link>
          <VerticalDivider />
        </>
      )}
    </div>
  );
};

export default Navleft;
