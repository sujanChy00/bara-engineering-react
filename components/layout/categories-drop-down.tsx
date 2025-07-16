import { cn } from "@/lib/utils";
import {
  Apple,
  Beef,
  CakeSlice,
  ChevronDown,
  Coffee,
  Menu,
} from "lucide-react";
import { Badge } from "../ui/badge";
import { buttonVariants } from "../ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";

const categoires = [
  {
    label: "Meats & Seafood",
    href: "meats",
    icon: <Beef />,
  },
  {
    label: "Bakery",
    href: "bakery",
    icon: <CakeSlice />,
  },
  {
    label: "Beverages",
    href: "beverages",
    icon: <Coffee />,
  },
  {
    label: "Fruits & Vegetables",
    href: "fruits",
    icon: <Apple />,
  },
];

export const CategoriesDropDown = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger
        className={cn(
          buttonVariants({
            size: "xl",
          }),
          "rounded-full gap-6 font-semibold uppercase font-dosis text-[15px] relative"
        )}
      >
        <div className="flex items-center gap-3">
          <Menu /> All Categories
        </div>
        <ChevronDown />
        <Badge
          className="text-xs font-dosis absolute z-10 left-1/2 -translate-x-1/2 -bottom-2.5"
          variant="secondary"
        >
          Total 65 products
        </Badge>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        {categoires.map((c) => (
          <DropdownMenuGroup key={c.href}>
            <DropdownMenuItem>
              {c.icon} {c.label}
            </DropdownMenuItem>
          </DropdownMenuGroup>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
