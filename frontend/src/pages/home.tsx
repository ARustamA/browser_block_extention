import Image from "next/image";
;
import { UiButton } from "@/shared/ui/ui-button";
import { UiHeader } from "@/shared/ui/ui_header";
import { SignOutButton } from "@/features/auth";
import { useSessionQuery } from "@/entities/session";

export function HomePage() {
  const { data } = useSessionQuery();

  return (
    <main className={`min-h-screen`}>
      <UiHeader
        right={
          <div className="flex items-center gap-2">
            {data?.email}
            <SignOutButton />
          </div>
        }
      />

      <UiButton disabled variant="primary">
        Sign out
      </UiButton>
    </main>
  );
}
