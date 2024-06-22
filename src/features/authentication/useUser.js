import { useQuery } from "@tanstack/react-query";
import { gteCurrentUser } from "../../services/apiAuth";

export function useUser() {
  const { isLoading, data: user } = useQuery({
    queryKey: ["user"],
    queryFn: gteCurrentUser,
  });

  return { isLoading, user, isAuthenticated: user?.role === "authenticated" };
}
