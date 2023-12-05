"use client";
import React from "react";
import CloseSvg from "./CloseSvg";

const SearchSvg = () => {
  return (
    <div className=" flex items-center justify-center ">
      {/* You can open the modal using document.getElementById('ID').showModal() method */}
      <button onClick={() => document.getElementById("my_modal_3").showModal()}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="3"
          stroke="currentColor"
          className="h-6 w-6 text-secondary transition-all duration-200 hover:opacity-50"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
          />
        </svg>
      </button>
      <dialog id="my_modal_3" className="modal backdrop-blur-md">
        <div className="modal-box">
          <form method="dialog">
            <button className="btn btn-circle btn-ghost btn-sm absolute right-2 top-2">
              <CloseSvg />
            </button>
          </form>

          <input
            type="text"
            placeholder="Search product here..."
            className="input input-bordered input-md mt-5 w-full rounded-full border-primary focus:outline-primary"
          />
          <div className=" flex min-h-[200px] items-center justify-center">
            <p className="py-4 text-gray-400">
              Search with product name to get better result.
            </p>
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default SearchSvg;
