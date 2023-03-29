import { useQuery } from "@tanstack/react-query";
import { getMe } from "src/api";

export default function useUser() {
  const { isLoading, data, isError } = useQuery(["me"], getMe, {
    retry: false,
    refetchOnWindowFocus: false,
  });
  return {
    userLoading :isLoading,
    user: data,
    isLoggedIn: !isError
  }
}
