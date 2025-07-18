"use client";

import { ChevronDown } from "lucide-react";
import { useState } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";

export const LanguageSelector = () => {
  const [language, setLanguage] = useState("en");
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="text-xs text-gray-700 font-medium  flex items-center hover:text-primary cursor-default gap-0.5">
        {language === "en" ? "English" : "日本語"}
        <ChevronDown className="size-3 group-hover:text-primary" />
      </DropdownMenuTrigger>
      <DropdownMenuContent className="flex flex-col shadow bg-background min-w-fit rounded-none p-0 py-3">
        <DropdownMenuItem asChild className="rounded-none">
          <button
            onClick={() => setLanguage("en")}
            className="py-2 px-3 text-xs text-muted-foreground font-medium"
          >
            English
          </button>
        </DropdownMenuItem>
        <DropdownMenuItem asChild className="rounded-none">
          <button
            onClick={() => setLanguage("ja")}
            className="py-2 px-3 text-xs text-muted-foreground font-medium"
          >
            日本語
          </button>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
