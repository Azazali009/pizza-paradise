import { useQuery } from "@tanstack/react-query";
import { getSingleOrder } from "../service/OrderApi";

export function useSingleOrder(id) {
  const {
    data: Order,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["Order", id],
    queryFn: () => getSingleOrder(id),
  });
  return { Order, isLoading, isError };
}
