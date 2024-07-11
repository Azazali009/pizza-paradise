import { useQuery } from "@tanstack/react-query";
import { getOrders } from "../service/OrderApi";

export function useOrders() {
  const {
    data: Orders,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["Orders"],
    queryFn: getOrders,
  });

  return { Orders, isLoading, isError };
}
