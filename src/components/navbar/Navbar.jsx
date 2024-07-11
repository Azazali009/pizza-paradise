import Link from "next/link";
import React from "react";
import { useCurrentUser } from "../auth/useCurrentUser";

const Navbar = () => {
  const { isAuthenticated } = useCurrentUser();
  return (
    <nav className="ml-4">
      <ul className="flex items-center gap-1">
        {isAuthenticated && (
          <li>
            <Link
              className="rounded-md px-4 py-1.5 text-lg capitalize transition-all duration-300 hover:text-secondary"
              href={"/dashboard"}
            >
              dashboard
            </Link>
          </li>
        )}
        <li>
          <Link
            className="rounded-md px-4 py-1.5 text-lg capitalize transition-all duration-300 hover:text-secondary"
            href={"/"}
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            className="rounded-md px-4 py-1.5 text-lg capitalize transition-all duration-300 hover:text-secondary"
            href={"/menu"}
          >
            menu
          </Link>
        </li>
        <li>
          <Link
            className="rounded-md px-4 py-1.5 text-lg capitalize transition-all duration-300 hover:text-secondary"
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
