import { getRecommendedPizza } from "@/app/service/PizzaApi";
import { useQuery } from "@tanstack/react-query";

export function useRecommendedPizza(category) {
  const {
    data: Recommended,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["Recommended"],
    queryFn: () => getRecommendedPizza(category),
  });

  return { Recommended, isLoading, isError };
}
