import { getSinglePizza } from "@/app/service/PizzaApi";
import { useQuery } from "@tanstack/react-query";

export function usePizza(id) {
  const {
    data: Pizza,
    isError,
    isLoading,
  } = useQuery({
    queryKey: ["Pizza", id],
    queryFn: () => getSinglePizza(id),
  });

  return { Pizza, isError, isLoading };
}
