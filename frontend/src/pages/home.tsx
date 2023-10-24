import { ToggleBlockingButton } from "@/features/toggle-blocking";
import { UiHeader } from "@/shared/ui/ui_header";


import { Profile } from "@/widgets/profile";

export function HomePage() {
  return (
    <div className={`min-h-screen flex flex-col`}>
      <UiHeader right={<Profile />} />

      <div className="grid grid-cols-[200px,1fr] ">
        <aside className="px-5 pt-10">
          <ToggleBlockingButton />
        </aside>
        <main>Block list</main>
      </div>
    </div>
  );
}
