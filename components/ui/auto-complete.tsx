"use client";

import { Command as CommandPrimitive } from "cmdk";
import { useCallback, useRef, useState, type KeyboardEvent } from "react";

import { cn } from "@/lib/utils";
import { Check } from "lucide-react";
import {
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "./command";
import { TextShimmer } from "./text-shimmer";

export type Option = Record<"value" | "label", string> & Record<string, string>;

export type AutoCompleteProps = Omit<
  React.ComponentPropsWithoutRef<typeof CommandInput>,
  "onSelect"
> & {
  options: Option[];
  emptyMessage?: string;
  value?: string;
  onValueChange?: (value: string) => void;
  onSelect?: (value: string) => void;
  isLoading?: boolean;
  disabled?: boolean;
  placeholder?: string;
  className?: string;
  onBlur?: () => void;
  name?: string;
  id?: string;
  loadingText?: string;
};
export const AutoComplete = ({
  options,
  placeholder,
  emptyMessage,
  value,
  onValueChange,
  disabled,
  isLoading = false,
  className,
  onBlur,
  name,
  onSelect,
  id,
  loadingText = "Loading...",
  ...props
}: AutoCompleteProps) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const [isOpen, setOpen] = useState(false);
  const [inputValue, setInputValue] = useState<string>(
    options.find((option) => option.value === value)?.label || ""
  );

  const handleKeyDown = useCallback(
    (event: KeyboardEvent<HTMLDivElement>) => {
      const input = inputRef.current;
      if (!input) {
        return;
      }

      if (!isOpen) {
        setOpen(true);
      }

      if (event.key === "Enter" && input.value !== "") {
        const optionToSelect = options.find(
          (option) => option.label === input.value
        );
        if (optionToSelect) {
          setInputValue(optionToSelect.label);
          onValueChange?.(optionToSelect.value);
          onSelect?.(optionToSelect.value);
        }
      }

      if (event.key === "Escape") {
        input.blur();
      }
    },
    [isOpen, options, onValueChange, onSelect]
  );

  const handleBlur = () => setOpen(false);

  const handleSelectOption = useCallback(
    (selectedOption: Option) => {
      setInputValue(selectedOption.label);
      onValueChange?.(selectedOption.value);
      onSelect?.(selectedOption.value);
      setTimeout(() => {
        inputRef?.current?.blur();
      }, 0);
    },
    [onValueChange, onSelect]
  );

  return (
    <CommandPrimitive onKeyDown={handleKeyDown} className="w-full">
      <div
        className={cn(
          "[&>div]:border-none [&>div]:w-full [&>div]:h-full overflow-hidden flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm",
          className
        )}
      >
        <CommandInput
          {...props}
          ref={inputRef}
          value={inputValue}
          onValueChange={
            isLoading
              ? undefined
              : (value) => {
                  setInputValue(value);
                  onValueChange?.(value);
                }
          }
          onBlur={() => {
            handleBlur();
            onBlur?.();
          }}
          onFocus={() => setOpen(true)}
          placeholder={placeholder}
          disabled={disabled}
          className={cn(
            "text-base w-full [&_input]:h-full focus-visible:border-none focus-visible:outline-none focus-visible:ring-0 placeholder:text-muted-foreground placeholder:text-sm",
            className
          )}
          name={name}
          id={id}
        />
      </div>
      <div className="relative mt-1">
        <div
          className={cn(
            "animate-in fade-in-0 zoom-in-95 absolute top-0 z-30 w-full rounded-xl bg-white outline-none",
            isOpen ? "block" : "hidden"
          )}
        >
          <CommandList className="rounded-lg border border-border shadow-md">
            {isLoading ? (
              <CommandPrimitive.Loading>
                <div className="p-1 py-4 w-full text-center">
                  <TextShimmer>{loadingText}</TextShimmer>
                </div>
              </CommandPrimitive.Loading>
            ) : null}
            {options.length > 0 && !isLoading ? (
              <CommandGroup>
                {options.map((option) => {
                  const isSelected =
                    options.find((option) => option.label === inputValue)
                      ?.value === option.value;
                  return (
                    <CommandItem
                      key={option.value}
                      value={option.label}
                      onMouseDown={(event) => {
                        event.preventDefault();
                        event.stopPropagation();
                      }}
                      onSelect={() => handleSelectOption(option)}
                      className={cn(
                        "flex w-full items-center gap-2 cursor-pointer",
                        !isSelected ? "pl-8" : null
                      )}
                    >
                      {isSelected ? <Check className="w-4" /> : null}
                      {option.label}
                    </CommandItem>
                  );
                })}
              </CommandGroup>
            ) : null}
            {!isLoading ? (
              <CommandPrimitive.Empty className="select-none rounded-sm px-2 py-3 text-center text-sm">
                {emptyMessage || "No results"}
              </CommandPrimitive.Empty>
            ) : null}
          </CommandList>
        </div>
      </div>
    </CommandPrimitive>
  );
};
