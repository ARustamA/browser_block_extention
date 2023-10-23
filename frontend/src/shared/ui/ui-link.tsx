import clsx from "clsx";
import Link from "next/link";

export type UiLinkProps = {} & Parameters<typeof Link>[0];
export function UiLink({ className, ...prop }: UiLinkProps) {
  return (
    <Link
      {...prop}
      className={clsx(
        className,
        "p-1 text-teal-500 hover:text-teal-600  cursor-pointer ",
      )}
    />
  );
}
