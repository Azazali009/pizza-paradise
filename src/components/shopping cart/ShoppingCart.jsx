"use client";
import React, { useEffect, useState } from "react";
import SubTotal from "./SubTotal";
import { useCart } from "./useCart";
import ErrorMessage from "@/ui/ErrorMessage";
import CartLoading from "./CartLoading";
import EmptyCart from "./EmptyCart";
import CartItem from "./CartItem";

const ShoppingCart = () => {
  const { Cart: CartData, isLoading, isError } = useCart();

  const [totalItemsPrice, setTotalItemsPrice] = useState(0);

  useEffect(() => {
    const curTotalPrice = CartData?.map(
      (item) => item.price * item.quantity,
    )?.reduce((acc, cur) => acc + cur, 0);

    setTotalItemsPrice(curTotalPrice);
  }, [CartData]);

  if (CartData?.length === 0) return <EmptyCart />;
  if (isLoading) return <CartLoading />;
  if (isError)
    return (
      <div className=" mt-4">
        <ErrorMessage heading={"Failed."}>
          There was an error while loading cart items. Please try again or
          refresh the page.
        </ErrorMessage>
      </div>
    );
  return (
    <>
      {/* component */}
      {/* Create By Joker Banny */}
      <style
        dangerouslySetInnerHTML={{
          __html:
            '\n    @layer utilities {\n    input[type="number"]::-webkit-inner-spin-button,\n    input[type="number"]::-webkit-outer-spin-button {\n      -webkit-appearance: none;\n      margin: 0;\n    }\n  }\n',
        }}
      />
      <div className="h-screen bg-gray-100 pt-20">
        <h1 className="mb-10 text-center text-2xl font-bold">Cart Items</h1>
        <div className="mx-auto max-w-5xl justify-center px-6 md:flex md:space-x-6 xl:px-0">
          <div className="no-scrollbar max-h-80 overflow-y-scroll rounded-lg md:w-2/3">
            {CartData?.map((item) => (
              <CartItem key={item.id} {...item} />
            ))}
          </div>
          {/* Sub total */}
          <SubTotal Cart={CartData} totalItemsPrice={totalItemsPrice} />
        </div>
      </div>
    </>
  );
};

export default ShoppingCart;
