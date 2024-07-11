import Button from "@/ui/Button";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";
// import gif from "../../public/gif";
import Image from "next/image";
const EmptyCart = () => {
  const router = useRouter();
  return (
    <div className=" mt-12 flex flex-col items-center justify-center gap-5">
      <Image src={"/pizzaAnimated.gif"} width={200} height={200} alt="image" />
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
