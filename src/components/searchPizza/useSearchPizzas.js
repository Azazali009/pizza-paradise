import { getSearchedPizzas } from "@/app/service/PizzaApi";
import { QueryClient, useMutation } from "@tanstack/react-query";

const queryClient = new QueryClient();
export function useSearchPizzas() {
  const {
    mutate: searchPizza,
    isPending,
    data,
  } = useMutation({
    mutationFn: (title) => getSearchedPizzas(title),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["Pizzas"],
      });
    },
    onError: () => {
      alert("Something went wrong on the server. Please try again layer!");
    },
  });
  return { searchPizza, isPending, data };
}
