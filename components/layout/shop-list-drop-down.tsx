import { cn } from "@/lib/utils";
import { ChevronDown } from "lucide-react";
import { buttonVariants } from "../ui/button";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "../ui/hover-card";

export const ShopListDropDown = () => {
  return (
    <HoverCard openDelay={0}>
      <HoverCardTrigger
        className={cn(
          buttonVariants({
            variant: "ghost",
          }),
          "rounded-full hover:cursor-default uppercase font-dosis font-semibold text-[15px] text-muted-foreground"
        )}
      >
        Shop <ChevronDown className="size-4" />
      </HoverCardTrigger>
      <HoverCardContent>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Asperiores
        doloribus expedita ut excepturi fuga quaerat rerum atque, ab mollitia,
        voluptates quos error voluptatum amet sed adipisci, odio autem tempore
        inventore.
      </HoverCardContent>
    </HoverCard>
  );
};
