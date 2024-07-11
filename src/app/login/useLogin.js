import { useMutation } from "@tanstack/react-query";
import { login as loginApi } from "../service/apiAuth";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

export function useLogin() {
  const { mutate: login, isPending: isLogging } = useMutation({
    mutationFn: ({ email, password }) => loginApi({ email, password }),

    onError: (err) => {
      toast.error(err.message);
    },
  });
  return { login, isLogging };
}
