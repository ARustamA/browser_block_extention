import { authControllerSignIn } from "@/shared/api/generated";
import { ROUTES } from "@/shared/constants/routes";
import { useMutation } from "@tanstack/react-query";

import { useRouter } from "next/router";
import { useState } from "react";
import { useForm } from "react-hook-form";

export function useSignInForm() {
  const router = useRouter();
  const [errorMessage, setErrorMessage] = useState<string | undefined>()
  const { register, handleSubmit } = useForm<{
    email: string;
    password: string;
  }>();

  const signInMutation = useMutation({
    mutationFn: authControllerSignIn,
    onSuccess() {
      router.push(ROUTES.HOME);
    },
    onError(error: any) {
      if (error.response && error.response.data && error.response.data.statusCode === 401) {
        setErrorMessage("Email или пароль неверен.");
      } else {
        setErrorMessage("Произошла ошибка входа.");
      }
    }
  });


  return {
    register,
    handleSubmit: handleSubmit((data) => signInMutation.mutate(data)),
    isPending: signInMutation.isPending,
    errorMessage: errorMessage
  }
}