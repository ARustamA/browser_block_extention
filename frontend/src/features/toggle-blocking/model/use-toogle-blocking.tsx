import { useAccountQuery, useUpdateAccountMutation } from "@/entities/account";

export function useToggleBlocking() {
  const accountQuery = useAccountQuery();
  const updateAccountMutation = useUpdateAccountMutation();

  const useToggleBlock = () => {
    if (accountQuery) {
      updateAccountMutation.mutate({
        isBlockingEnabled: !accountQuery.data?.isBlockingEnabled,
      });
    }
  };
  return {
    isLoading: updateAccountMutation.isPending,
    useToggleBlock,
    isBlockingEnabled: accountQuery.data?.isBlockingEnabled ?? false,
    isReady: accountQuery.isSuccess,
  };
}
