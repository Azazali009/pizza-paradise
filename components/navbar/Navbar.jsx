import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <nav>
      <ul className="flex gap-1 text-black/[0.7]">
        <li>
          <Link
            className="  rounded-md px-4 py-1.5 text-lg font-semibold capitalize"
            href={"/"}
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            className="  rounded-md px-4 py-1.5 text-lg font-semibold capitalize"
            href={"/menu"}
          >
            menu
          </Link>
        </li>
        <li>
          <Link
            className="  rounded-md px-4 py-1.5 text-lg font-semibold capitalize"
            href={"/contact"}
          >
            contact
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
