"use client";
import { TotalCartItems } from "@/components/shopping cart/TotalCartItems";
import { useCart } from "@/components/shopping cart/useCart";
import React from "react";

const CartSvg = () => {
  const { totalCartItem, isLoading } = TotalCartItems();

  return (
    <div className=" flex items-center gap-1">
      <div className=" relative">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill=" #D40000"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="h-8 w-8 text-secondary transition-all duration-300 hover:opacity-50"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
          />
        </svg>
        {!isLoading && totalCartItem > 0 && (
          <span className=" absolute -right-[50%] top-0 flex h-6 w-6 -translate-y-[50%] items-center justify-center rounded-full border border-tertiary bg-white text-xs font-bold text-tertiary">
            {totalCartItem && totalCartItem > 15 ? (
              <div className="flex items-center">
                <span>15</span>
                <span className="  self-start">+</span>
              </div>
            ) : (
              totalCartItem
            )}
          </span>
        )}
      </div>

      {/* drop down svg */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="w-h-5 h-5 text-secondary"
      >
        <path d="m7 10 5 5 5-5z"></path>
      </svg>
    </div>
  );
};

export default CartSvg;
