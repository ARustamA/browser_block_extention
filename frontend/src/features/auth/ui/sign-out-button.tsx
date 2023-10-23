import { UiButton } from "@/shared/ui/ui-button";
import { useSignOut } from "../model/use-sing-out";

export function SignOutButton() {
  const { isLoading, signOut, errorMessage } = useSignOut();

  return (
    <UiButton
      variant="outlined"
      disabled={isLoading}
      onClick={() => {
        signOut({});
        console.log({ errorMessage });
      }}
    >
      Sign Out
    </UiButton>
  );
}
