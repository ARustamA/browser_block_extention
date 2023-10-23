import Image from "next/image";

import { authControllerGetSessionInfo } from "@/shared/api/generated";
import { useQuery } from "@tanstack/react-query";
import { UiButton } from "@/shared/ui/ui-button";
import { UiHeader } from "@/shared/ui/ui_header";

export function HomePage() {
  const { data } = useQuery({
    queryKey: ["session"],
    queryFn: () => authControllerGetSessionInfo(),
  });
  return (
    <main className={`min-h-screen`}>
      <UiHeader right={<div> {data?.email}</div>} />

      <UiButton disabled variant="primary">
        Sign out
      </UiButton>
    </main>
  );
}
