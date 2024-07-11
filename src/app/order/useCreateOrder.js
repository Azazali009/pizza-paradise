import { useMutation } from "@tanstack/react-query";
import { createOrder as createOrderApi } from "../service/OrderApi";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

export function useCreateOrder() {
  const router = useRouter();
  const {
    mutate: createOrder,
    isPending,
    isError,
  } = useMutation({
    mutationFn: createOrderApi,
    onSuccess: (data) => {
      router.push(`/success/${data.id}`);

      toast.success("Order created successfully");
    },
    onError: (err) => toast.error(err.message),
  });

  return { createOrder, isPending, isError };
}
