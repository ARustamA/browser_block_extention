import { SignUpForm } from "@/features/auth";
import { UiFormPageLayout } from "@/shared/ui/layouts/ui-for-page-layout";
import { UiHeader } from "@/shared/ui/ui_header";

export function SignUpPage() {
  return (
    <UiFormPageLayout
      header={<UiHeader />}
      form={<SignUpForm />}
      title="Sign up"
    />
  );
}
