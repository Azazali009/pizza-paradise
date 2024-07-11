import { deletCartItem } from "@/app/service/CartApi";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";

export function useDeleteCart() {
  const queryClient = useQueryClient();
  const { mutate: deleteCart, isPending: isDeleting } = useMutation({
    mutationFn: deletCartItem,
    onSuccess: () => {
      toast.success("Cart item deleted");
      queryClient.invalidateQueries({ queryKey: ["cart"] });
    },
    onError: () => toast.error("Failed to delete item."),
  });
  return { deleteCart, isDeleting };
}
