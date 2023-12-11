"use client";
import Button from "@/ui/Button";
import React, { useState } from "react";

const SinglePizzaDetail = ({ title, description }) => {
  const [value, setValue] = useState(1);

  return (
    <div>
      <div className=" mb-8">
        <div className="mb-4 flex items-center">
          <h1 className=" text-4xl font-extrabold capitalize">{title}</h1>
          <div className=" ml-auto rounded-full bg-gray-200 p-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              className="h-6 w-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
              />
            </svg>
          </div>
        </div>
        <p className=" text-gray-400">{description}</p>
      </div>

      <div className="collapse bg-base-200">
        <input type="checkbox" />

        <div className="text-md collapse-title font-medium">
          variation
          <span className="badge ml-3 rounded bg-red-500  capitalize text-white">
            required
          </span>
        </div>
        <div className="collapse-content">
          <ul className=" flex flex-col gap-2">
            <li className="flex justify-between border-b py-3">
              <div className=" flex items-center gap-3">
                <input
                  type="radio"
                  name="radio-6"
                  id="small"
                  className=" radio radio-sm  border-[2px] border-gray-400 checked:radio-warning"
                />
                <label className=" capitalize" htmlFor="small">
                  small
                </label>
              </div>
              <p className=" text-sm text-gray-500">Rs.300.00</p>
            </li>
            <li className="flex justify-between border-b py-3">
              <div className=" flex gap-3">
                <input
                  type="radio"
                  name="radio-6"
                  id="medium"
                  className=" radio radio-sm  border-[2px] border-gray-400 checked:radio-warning"
                />
                <label className=" capitalize" htmlFor="medium">
                  medium
                </label>
              </div>
              <p className=" text-sm text-gray-500">Rs.300.00</p>
            </li>
            <li className="flex justify-between border-b py-3">
              <div className=" flex gap-3">
                <input
                  type="radio"
                  name="radio-6"
                  id="large"
                  className=" radio radio-sm  border-[2px] border-gray-400 checked:radio-warning"
                />
                <label className=" capitalize" htmlFor="large">
                  large
                </label>
              </div>
              <p className=" text-sm text-gray-500">Rs.300.00</p>
            </li>
          </ul>
        </div>
      </div>

      <div className="mt-8 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <button className=" flex h-10 w-10 items-center justify-center rounded-full bg-secondary text-2xl text-white hover:bg-primary hover:text-tertiary">
            -
          </button>

          <input
            type="text"
            className="  h-10 max-w-[5rem] rounded-full border px-2 text-center outline-none hover:border-black focus:border-none focus:ring-1 focus:ring-primary"
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
          <button className=" flex h-10 w-10 items-center justify-center rounded-full bg-secondary text-2xl text-white hover:bg-primary hover:text-tertiary">
            +
          </button>
        </div>

        <Button>
          <p className=" flex gap-6">
            <span>300.00</span>
            <span>add to cart</span>
          </p>
        </Button>
      </div>
    </div>
  );
};

export default SinglePizzaDetail;
