"use client";

import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@radix-ui/react-hover-card";
import { ChevronDown } from "lucide-react";
import { useState } from "react";

export const LanguageSelector = () => {
  const [language, setLanguage] = useState("en");
  return (
    <HoverCard openDelay={0}>
      <HoverCardTrigger className="text-xs text-gray-700 font-medium  flex items-center hover:text-primary cursor-default gap-0.5">
        {language === "en" ? "English" : "日本語"}
        <ChevronDown className="size-3 group-hover:text-primary" />
      </HoverCardTrigger>
      <HoverCardContent className="flex flex-col py-2 shadow bg-background">
        <button
          onClick={() => setLanguage("en")}
          className="py-2 px-3 hover:bg-muted"
        >
          English
        </button>
        <button
          onClick={() => setLanguage("ja")}
          className="py-2 px-3 hover:bg-muted"
        >
          日本語
        </button>
      </HoverCardContent>
    </HoverCard>
  );
};
