
import { SignInForm } from "@/features/auth";
import { UiFormPageLayout } from "@/shared/ui/layouts/ui-for-page-layout";
import { UiHeader } from "@/shared/ui/ui_header";

export function SignInPage() {
  return (
    <UiFormPageLayout
      header={<UiHeader />}
      form={<SignInForm />}
      title="Sign in"
    />
  );
}
