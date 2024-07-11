import { useMutation } from "@tanstack/react-query";
import { signUp } from "../service/apiAuth";
import toast from "react-hot-toast";

export function useSignUp() {
  const { mutate: createUser, isPending: isCreating } = useMutation({
    mutationFn: ({ email, password, name, avatar }) =>
      signUp({ email, password, name, avatar }),
    onSuccess: () => {
      toast.success("YaY, Account Created ✔️👍");
    },
    onError: (err) => {
      toast.error(err.message);
    },
  });
  return { createUser, isCreating };
}
