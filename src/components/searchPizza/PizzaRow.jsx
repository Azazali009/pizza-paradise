import Image from "next/image";
import Link from "next/link";
import React from "react";

const PizzaRow = ({ title, id, image, category }) => {
  return (
    <Link
      onClick={() => document.getElementById("my_modal_3").closeModal()}
      href={`/menu/${id}`}
    >
      <li className=" mt-3 flex list-none gap-4 rounded-md hover:bg-gray-200">
        <Image
          src={image}
          width={100}
          height={100}
          alt="pizza photo"
          className=" h-12 w-12 rounded-md"
        />
        <div className=" flex flex-col text-slate-700">
          <h3 className=" text-lg font-semibold capitalize">{title}</h3>
          <p className="-mt-1 text-left text-xs">{category}</p>
        </div>
      </li>
    </Link>
  );
};

export default PizzaRow;
