"use client";
import { useCart } from "./useCart";

export function TotalCartItems() {
  const { Cart, isLoading } = useCart();

  const totalCartItem = Cart?.map((item) => item.quantity)?.reduce(
    (acc, cur) => acc + cur,
    0,
  );

  return { totalCartItem, isLoading };
}
