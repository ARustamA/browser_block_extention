import { useAddBlockItemMutation } from "@/entities/block-list/queries";
import { AddBlockItemDtoType } from "@/shared/api/generated";
import { useForm } from "react-hook-form";

export function useAddBlockItemForm() {
  const { handleSubmit, register, watch } = useForm<{
    data: string;
    type: AddBlockItemDtoType;
  }>();
  const addBlockItemMutation = useAddBlockItemMutation();
  const type = watch("type");
  return {
    handleSubmit: handleSubmit((data) => addBlockItemMutation.mutate(data)),
    isLoading: addBlockItemMutation.isPending,
    register,
    type,
  };
}
