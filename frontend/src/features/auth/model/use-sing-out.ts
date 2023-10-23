import { authControllerSignOut } from "@/shared/api/generated";
import { ROUTES } from "@/shared/constants/routes";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/router";
import { useState } from "react";

export function useSignOut() {
  const router = useRouter();
  const [errorMessage, setErrorMessage] = useState<string | undefined>()
  const signOutMutation =
    useMutation({
      mutationFn: authControllerSignOut,
      onSuccess() {
        router.push(ROUTES.HOME);
      },
      onError(error: any) {
        if (error.response && error.response.data && error.response.data.statusCode === 401) {
          setErrorMessage("Вы не авторизованы");
        }
      }
    })

  return {
    isLoading: signOutMutation.isPending,
    signOut: signOutMutation.mutate,
    errorMessage
  }
}