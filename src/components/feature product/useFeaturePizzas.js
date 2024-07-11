import { getFeaturePizzas } from "@/app/service/PizzaApi";
import { useQuery } from "@tanstack/react-query";

export function useFeaturePizzas() {
  const {
    data: featurePizzas,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["featurePizzas"],
    queryFn: getFeaturePizzas,
  });
  return { featurePizzas, isLoading, isError };
}
