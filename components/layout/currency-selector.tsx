"use client";

import { ChevronDown } from "lucide-react";
import { useState } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";

const currencies = ["YEN", "NPR", "INR"];
export const CurrencySelector = () => {
  const [currency, setCurrency] = useState(currencies[0]);
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="text-xs text-gray-700 font-medium  flex items-center hover:text-primary cursor-default gap-0.5">
        {currency}
        <ChevronDown className="size-3 group-hover:text-primary " />
      </DropdownMenuTrigger>
      <DropdownMenuContent className="flex flex-col shadow bg-background min-w-fit rounded-none p-0 py-3">
        {currencies.map((c, index) => (
          <DropdownMenuItem asChild key={index} className="rounded-none">
            <button
              onClick={() => setCurrency(c)}
              className="py-2 px-3 text-xs text-muted-foreground font-medium"
            >
              {c}
            </button>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
