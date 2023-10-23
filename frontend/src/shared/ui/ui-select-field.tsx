import clsx from "clsx";
import { SelectHTMLAttributes, PropsWithRef, useId } from "react";

export type UiSelectOption = {
  value: string;
  label: string;
};
export type UiSelectFieldProps = {
  className?: string;

  label?: string;
  selectProps?: PropsWithRef<SelectHTMLAttributes<HTMLSelectElement>>;
  error?: string;
  options?: UiSelectOption[];
};
export function UiSelectField({
  className,
  selectProps,
  label,
  options,
  error,
}: UiSelectFieldProps) {
  const id = useId();
  return (
    <div className={clsx(className, "flex flex-col gap-1")}>
      {label && (
        <label htmlFor={id} className="block">
          {label}
        </label>
      )}
      <select
        {...selectProps}
        id={id}
        className={clsx(
          selectProps?.className,
          "rounded border border-slate-300 focus:border-teal-600 outline-none px-2 h-10",
        )}
      >
        {options?.map((option, i) => (
          <option key={i} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      {error && <div className="text-rose-400 text-sm">{error} </div>}
    </div>
  );
}
