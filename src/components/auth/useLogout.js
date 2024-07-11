import { logout as logoutApi } from "@/app/service/apiAuth";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

export function useLogout() {
  const queryClient = useQueryClient();
  const router = useRouter();
  const {
    mutate: logout,
    isPending,
    isError,
  } = useMutation({
    mutationFn: logoutApi,
    onSuccess: () => {
      router.push("/");
      queryClient.invalidateQueries({ queryKey: ["User"] });
    },
    onError: (err) => {
      toast.error(err.message);
    },
  });

  return { logout, isPending, isError };
}
