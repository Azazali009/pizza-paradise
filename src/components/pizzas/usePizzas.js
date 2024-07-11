"use client";
import { getPizzas } from "@/app/service/PizzaApi";
import { useQuery } from "@tanstack/react-query";

export function usePizzas() {
  const {
    data: Pizzas,
    error,
    isLoading,
  } = useQuery({
    queryKey: ["Pizzas"],
    queryFn: getPizzas,
  });
  return { Pizzas, error, isLoading };
}
