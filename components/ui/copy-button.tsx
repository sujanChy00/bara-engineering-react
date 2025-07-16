"use client";

import { cn } from "@/lib/utils";
import { Check, Copy } from "lucide-react";
import React, { useState } from "react";
import { toast } from "sonner";
import { Button, ButtonProps } from "./button";

interface Props {
  className?: string;
  children?: React.ReactNode;
  textToCopy: string;
  size?: ButtonProps["size"];
  variant?: ButtonProps["variant"];
}

export const CopyButton = ({
  textToCopy,
  children,
  className,
  variant,
  size,
}: Props) => {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = () => {
    if (!navigator.clipboard || typeof window === "undefined") {
      return;
    }
    navigator.clipboard.writeText(textToCopy);
    setCopied(true);
    toast.info(textToCopy + " Copied to clipboard");
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <Button
      variant={variant || "outline"}
      size={size || "icon"}
      className={cn("relative ml-2 rounded-md hover:cursor-pointer", className)}
      onClick={copyToClipboard}
      aria-label={copied ? "Copied" : "Copy to clipboard"}
    >
      <span className="sr-only">{copied ? "Copied" : "Copy"}</span>
      {children || (
        <>
          <Copy
            className={`h-4 w-4 transition-all duration-300 ${
              copied ? "scale-0" : "scale-100"
            }`}
          />
          <Check
            className={`absolute inset-0 m-auto h-4 w-4 transition-all duration-300 ${
              copied ? "scale-100" : "scale-0"
            }`}
          />
        </>
      )}
    </Button>
  );
};
