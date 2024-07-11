import Link from "next/link";
import React from "react";

const PizzaNavbar = ({ title }) => {
  return (
    <ul className=" flex items-center gap-2 text-sm capitalize text-gray-500 ">
      <li>
        <Link href={"/menu"} className=" link font-semibold hover:no-underline">
          home
        </Link>
      </li>
      <li>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="h-3 w-3"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M8.25 4.5l7.5 7.5-7.5 7.5"
          />
        </svg>
      </li>
      <li>
        <p className=" font-semibold text-primary">{title}</p>
      </li>
    </ul>
  );
};

export default PizzaNavbar;
