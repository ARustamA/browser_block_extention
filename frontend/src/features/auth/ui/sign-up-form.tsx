import { UiButton } from "@/shared/ui/ui-button";
import { UiTextField } from "@/shared/ui/ui-text-field";
import { useForm } from "react-hook-form";

export function SignUpForm() {
  const { register, handleSubmit } = useForm();

  return (
    <form
      className="flex flex-col gap-2 "
      onSubmit={handleSubmit((data) => console.log(data))}
    >
      <UiTextField
        label="Email"
        inputProps={{ ...register("email", { required: true }) }}
      />
      <UiTextField
        label="Password"
        inputProps={{ ...register("password", { required: true }) }}
      />
      <UiButton variant="primary">Sign Up</UiButton>
    </form>
  );
}
