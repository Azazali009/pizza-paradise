import { addItem as addItemApi } from "@/app/service/CartApi";
import {
  QueryClient,
  useMutation,
  useQueryClient,
} from "@tanstack/react-query";
import toast from "react-hot-toast";

export function useAddToCart() {
  const queryClient = useQueryClient();
  const { mutate: addItem, isPending: isAdding } = useMutation({
    mutationFn: ({
      pizzaId,
      image,
      title,
      value,
      subTitle,
      price,
      selectedSize,
      selectedDrink,
    }) =>
      addItemApi({
        pizzaId,
        image,
        title,
        price,
        quantity: value,
        subTitle,
        size: selectedSize,
        drink: selectedDrink,
      }),
    onSuccess: () => {
      toast.success("item added successfully");
      queryClient.invalidateQueries({ queryKey: ["cart"] });
    },
    onError: (err) => {
      toast.error("failed");
      console.log(err);
    },
  });

  return { addItem, isAdding };
}
