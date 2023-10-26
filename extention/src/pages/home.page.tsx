import { useSessionQuery } from "@/entities/session";

export function HomePage() {
  const { data: session } = useSessionQuery();
  return <div className="flex flex-col">HomePage {session?.email}</div>;
}
