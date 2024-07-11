import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteAllCart as deleteAllCartApi } from "../service/CartApi";
import toast from "react-hot-toast";

export function useDeleteCart() {
  const queryClient = useQueryClient();
  const { mutate: deleteAllCart, isPending: isDeleting } = useMutation({
    mutationFn: deleteAllCartApi,
    onSuccess: () => {
      queryClient.invalidateQueries("cart");
    },
    onError: (err) => toast.error(err.message),
  });
  return { deleteAllCart, isDeleting };
}
