import { accountControllerGetAccount, authControllerGetSessionInfo } from "@/shared/api/generated";
import { setBrowserInterval, setIcon } from "@/shared/lib/browser";

export function startToggleExtensionIcon() {
  setBrowserInterval('update-block-rules', 5 * 1000, async () => {
    const isAuth = await authControllerGetSessionInfo().then(
      () => true,
      () => false
    );

    if (!isAuth) {
      setIcon('/WavingHand.png')
      return
    }

    const isBlockingEnabled = await accountControllerGetAccount().then(
      r => r.isBlockingEnabled
    );

    if (!isBlockingEnabled) {
      setIcon('/SleepingFace.png')
      return

    }
    setIcon('/Shield.png')
    return

  })
}

