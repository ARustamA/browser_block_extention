import { authControllerSignUp } from "@/shared/api/generated";
import { ROUTES } from "@/shared/constants/routes";
import { useMutation } from "@tanstack/react-query";

import { useRouter } from "next/router";
import { useState } from "react";
import { useForm } from "react-hook-form";

export function useSignUpForm() {
  const router = useRouter();
  const [errorMessage, setErrorMessage] = useState<string | undefined>()
  const { register, handleSubmit } = useForm<{
    email: string;
    password: string;
  }>();

  const signUpMutation = useMutation({
    mutationFn: authControllerSignUp,
    onSuccess() {
      router.push(ROUTES.HOME);
    },
    onError(error: any) {
      if (error.response && error.response.data && error.response.data.type === "email-exists") {
        setErrorMessage("Email уже существует.");
      } else {
        setErrorMessage("Произошла ошибка при регистрации.");
      }
    }
  });


  return {
    register,
    handleSubmit: handleSubmit((data) => signUpMutation.mutate(data)),
    isPending: signUpMutation.isPending,
    errorMessage: errorMessage
  }
}