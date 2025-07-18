"use client";

import { cn } from "@/lib/utils";
import { Minus, Plus } from "lucide-react";
import { useState } from "react";
import { Button, ButtonProps } from "../ui/button";

export const AddToCartButton = ({
  className,
  variant,
  ...props
}: ButtonProps) => {
  const [count, setCount] = useState(0);
  if (count > 0)
    return (
      <div className="flex items-center justify-between gap-2 border border-border rounded-full">
        <Button
          onClick={() => {
            setCount((prev) => prev - 1);
          }}
          variant={"secondary"}
          className={cn("rounded-l-full bg-border hover:bg-border")}
          {...props}
        >
          <Minus />
        </Button>
        <p className="text-sm">{count}</p>
        <Button
          onClick={() => {
            setCount((prev) => prev + 1);
          }}
          variant={"tertiary"}
          className={cn("rounded-r-full")}
          {...props}
        >
          <Plus />
        </Button>
      </div>
    );

  return (
    <Button
      onClick={() => {
        setCount(1);
      }}
      variant={variant || "tertiary"}
      className={cn(
        "rounded-full absolute z-30 left-1/2 -translate-x-1/2 w-[80%] bottom-3 opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 hover:cursor-pointer",
        className
      )}
      {...props}
    >
      Add to cart
    </Button>
  );
};
