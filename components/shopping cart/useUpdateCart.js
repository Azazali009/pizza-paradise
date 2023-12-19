import { updateCartItem } from "@/app/service/CartApi";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";

export function useUpdateCart() {
  const queryClient = useQueryClient();
  const { mutate: updateCart, isPending } = useMutation({
    mutationFn: ({ updateObj, id }) => updateCartItem(updateObj, id),
    onSuccess: () => {
      toast.success("Cart updated");
      queryClient.invalidateQueries({ queryKey: ["cart"] });
    },
    onError: (err) => {
      toast.error("failed to update");
      console.log(err);
    },
  });

  return { updateCart, isPending };
}
