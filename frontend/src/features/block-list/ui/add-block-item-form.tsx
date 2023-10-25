import { UiSelectField } from "@/shared/ui/ui-select-field";
import { useAddBlockItemForm } from "../model/use-block-item-form";
import { UiTextField } from "@/shared/ui/ui-text-field";
import { UiButton } from "@/shared/ui/ui-button";
import { AddBlockItemDtoType } from "@/shared/api/generated";


const typeOptions = [
  {label: 'WebSite', value: AddBlockItemDtoType.WebSite},
  {label: 'KeyWord', value: AddBlockItemDtoType.KeyWord},
] 

export function AddBlockItemForm() {
  const { handleSubmit, isLoading, register, type } = useAddBlockItemForm();

  return (
    <form className="flex gap-2" onSubmit={handleSubmit}>
      <UiSelectField
        className="grow min-w-[200px]"
        selectProps={{ ...register("type") }}
        options={typeOptions}
      />
      <UiTextField
        className="grow"
        inputProps={{
          placeholder:
            type === "KeyWord" ? "enter key word..." : "enter web side",
          ...register("data"),
        }}
      />
      <UiButton variant="primary" disabled={isLoading}>
        Add block item
      </UiButton>
    </form>
  );
}
