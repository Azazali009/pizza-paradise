import React from "react";

const CartLoading = () => {
  return (
    <div className=" mt-8 flex min-h-screen flex-col items-center justify-center gap-8">
      <div className="skeleton h-8 w-32"></div>
      <div className=" flex gap-8">
        <div className=" no-scrollbar max-h-[400px] space-y-3 overflow-hidden">
          {[...new Array(4)].map((_, i) => (
            <div key={i} className="skeleton h-32 w-[36rem]"></div>
          ))}
        </div>
        <div className="skeleton h-72 w-80 rounded-lg"></div>
      </div>
    </div>
  );
};

export default CartLoading;
