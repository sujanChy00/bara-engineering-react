"use client";

import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@radix-ui/react-hover-card";
import { ChevronDown } from "lucide-react";
import { useState } from "react";

const currencies = ["YEN", "NPR", "INR"];
export const CurrencySelector = () => {
  const [currency, setCurrency] = useState(currencies[0]);
  return (
    <HoverCard openDelay={0}>
      <HoverCardTrigger className="text-xs text-gray-700 font-medium  flex items-center hover:text-primary cursor-default gap-0.5">
        {currency}
        <ChevronDown className="size-3 group-hover:text-primary " />
      </HoverCardTrigger>
      <HoverCardContent className="flex flex-col py-2 shadow bg-background">
        {currencies.map((c) => (
          <button
            key={c}
            onClick={() => setCurrency(c)}
            className="py-2 px-3 hover:bg-muted"
          >
            {c}
          </button>
        ))}
      </HoverCardContent>
    </HoverCard>
  );
};
