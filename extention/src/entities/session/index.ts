import { authControllerGetSessionInfo } from "@/shared/api/generated";
import { useQuery, useQueryClient } from "@tanstack/react-query";
const sessionKey = ["session"]
export function useSessionQuery() {
  return useQuery({
    queryKey: sessionKey, ///ключ для кеширования запросов
    queryFn: authControllerGetSessionInfo,
    retry: 0,
    staleTime: 5 * 60 * 1000
  })
}

export function useResetSession() {
  const queryClient = useQueryClient()
  return () => queryClient.removeQueries()
}