"use client";

import { ChevronDown } from "lucide-react";
import { useState } from "react";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "../ui/command";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";

const countries: { label: string; value: string }[] = [
  {
    label: "Nepal",
    value: "nepal",
  },
  {
    label: "India",
    value: "india",
  },
  {
    label: "USA",
    value: "usa",
  },
  {
    label: "UK",
    value: "uk",
  },
  {
    label: "Australia",
    value: "australia",
  },
  {
    label: "Japan",
    value: "japan",
  },
  {
    label: "China",
    value: "china",
  },
];

export const LocationSelector = () => {
  const [open, setOpen] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState<string>("nepal");
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger className="border rounded-[5px] flex items-center justify-baseline p-2 gap-x-12 shadow-sm hover:shadow-lg cursor-pointer transition-all duration-300 ease-in-out">
        <div className="flex items-start gap-y-1 flex-col">
          <p className="text-xs text-muted-foreground font-dosis">
            Your Location
          </p>
          <p className="text-xs font-semibold text-tertiary">
            {countries.find((c) => c.value === selectedCountry)?.label}
          </p>
        </div>
        <ChevronDown className="text-tertiary size-3" />
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Choose your Delivery Location</DialogTitle>
          <DialogDescription className="text-xs">
            Enter your address and we will specify the offer for your area.
          </DialogDescription>
        </DialogHeader>
        <section>
          <Command>
            <CommandInput
              placeholder="Search your area..."
              wrapperClassName="border-none rounded-b-xs rounded-xs h-12 bg-muted"
              className="rounded-b-xs"
            />
            <CommandList>
              <CommandEmpty>No results found.</CommandEmpty>
              <CommandGroup heading="Suggestions">
                {countries.map((c) => (
                  <CommandItem
                    onSelect={() => {
                      setSelectedCountry(c.value);
                      setOpen(false);
                    }}
                    key={c.value}
                  >
                    {c.label}
                  </CommandItem>
                ))}
              </CommandGroup>
            </CommandList>
          </Command>
        </section>
      </DialogContent>
    </Dialog>
  );
};
