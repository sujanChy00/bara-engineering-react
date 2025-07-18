"use client";

import { cn } from "@/lib/utils";
import { Heart } from "lucide-react";
import { useState } from "react";
import { Button, ButtonProps } from "../ui/button";

export const LikeItem = (props: ButtonProps) => {
  const [isLiked, setIsLiked] = useState(false);
  return (
    <Button
      onClick={() => setIsLiked(!isLiked)}
      className={cn(
        "rounded-full hover:bg-tertiary hover:text-white cursor-pointer translate-x-4 delay-100 group-hover:translate-x-0 transition-all ease-linear opacity-0 group-hover:opacity-100",
        props.className
      )}
      variant={props.variant || "outline"}
      size={props.size || "icon"}
      {...props}
    >
      <Heart className={cn(isLiked && "fill-red-500 stroke-red-500")} />
    </Button>
  );
};
