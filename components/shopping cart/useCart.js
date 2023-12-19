import { getCartData } from "@/app/service/CartApi";
import { useQuery } from "@tanstack/react-query";

export function useCart() {
  const {
    data: Cart,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["cart"],
    queryFn: getCartData,
  });

  return { Cart, isLoading, isError };
}
