import Image from "next/image";

import { authControllerGetSessionInfo } from "@/shared/api/generated";
import { useQuery } from "@tanstack/react-query";
import { UiButton } from "@/shared/ui/ui-button";
import { UiHeader } from "@/shared/ui/ui_header";
import { SignOutButton } from "@/features/auth";

export function HomePage() {
  const { data } = useQuery({
    queryKey: ["session"],
    queryFn: () => authControllerGetSessionInfo(),
  });
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
