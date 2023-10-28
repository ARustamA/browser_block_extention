import { UiButton } from "@/shared/ui/ui-button";
import { useToggleBlocking } from "../model/use-toogle-blocking";

export function ToggleBlockingButton() {
  const { isBlockingEnabled, isLoading, useToggleBlock, isReady } =
    useToggleBlocking();
  if (!isReady) {
    return null;
  }
  return (
    <UiButton
      disabled={isLoading}
      onClick={useToggleBlock}
      variant={isBlockingEnabled ? "primary" : "secondary"}
    >
      {!isBlockingEnabled ? "Block" : "Unblock"}
    </UiButton>
  );
}
