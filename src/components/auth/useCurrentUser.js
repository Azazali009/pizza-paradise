import { getCurrentUser } from "@/app/service/apiAuth";
import { useQuery } from "@tanstack/react-query";

export function useCurrentUser() {
  const {
    data: User,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["User"],
    queryFn: getCurrentUser,
  });

  return {
    User,
    isLoading,
    isError,
    isAuthenticated: User?.role === "authenticated",
  };
}
