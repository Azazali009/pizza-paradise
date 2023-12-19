import Button from "@/ui/Button";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";

const EmptyCart = () => {
  const router = useRouter();
  return (
    <div className=" mt-12 flex flex-col items-center justify-center gap-5">
      <p className=" text-center font-medium text-slate-700">
        Cart is empty.
        <br /> Go to menu and order your favourite pizzas
      </p>
      <Button>
        <Link href={"/menu"}>Go to menu</Link>
      </Button>
    </div>
  );
};

export default EmptyCart;
