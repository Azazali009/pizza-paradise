import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateOrder as updateOrderApi } from "../service/OrderApi";
import toast from "react-hot-toast";

export function useUpdateOrder() {
  const queryClient = useQueryClient();
  const { mutate: updateOrder, isPending: isUpdating } = useMutation({
    mutationFn: updateOrderApi,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["Orders", "Order"] });
      toast.success("Order updated successfully");
    },
    onError: (err) => toast.error(err.message),
  });
  return { updateOrder, isUpdating };
}
