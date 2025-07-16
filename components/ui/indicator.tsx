import { cn } from "@/lib/utils";

interface Props {
  label?: string;
  labelClassName?: string;
  className?: string;
  children: React.ReactNode;
}

export const Indicator = ({
  children,
  className,
  label,
  labelClassName,
}: Props) => {
  return (
    <div
      className={cn(
        "size-10 flex items-center justify-center rounded-full bg-red-50 relative",
        className
      )}
    >
      {!!label && (
        <div
          className={cn(
            "size-4 rounded-full bg-red-600 flex items-center justify-center text-xs text-white absolute top-1 -right-1.5",
            labelClassName
          )}
        >
          {label}
        </div>
      )}
      {children}
    </div>
  );
};
