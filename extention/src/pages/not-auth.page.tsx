import { ADMIN_SIGN_IN } from "@/shared/constants";
import { createTab } from "@/shared/lib/browser";
import { UiButton } from "@/shared/ui/ui-button";
import { UiLogo } from "@/shared/ui/ui-logo";

export function NotAuthPage() {
  return (
    <div className="p-8 flex flex-col gap-3 items-center">
      <UiLogo />
      <h2 className="text-2xl">Вы не авторизованы!</h2>
      <UiButton
        variant="primary"
        onClick={() => {
          createTab(ADMIN_SIGN_IN)
        }}
      >
        Sign in
      </UiButton>
    </div>
  );
}
