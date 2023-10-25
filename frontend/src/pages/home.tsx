import { useBlockListQuery } from "@/entities/block-list/queries"; 
import { AddBlockItemForm, BlockList } from "@/features/block-list";
import { ToggleBlockingButton } from "@/features/toggle-blocking";
import { UiHeader } from "@/shared/ui/ui_header";

import { Profile } from "@/widgets/profile";

export function HomePage() {
  const { data } = useBlockListQuery({});
  return (
    <div className={`min-h-screen flex flex-col`}>
      <UiHeader right={<Profile />} />

      <div className="grid grid-cols-[200px,1fr] ">
        <aside className="px-5 pt-10">
          <ToggleBlockingButton />
        </aside>
        <main className="pt-10 px-5">
          <h1 className="text-2xl "> Block list</h1>
          <AddBlockItemForm />
          <BlockList className="mt-3" />
        </main>
      </div>
    </div>
  );
}
