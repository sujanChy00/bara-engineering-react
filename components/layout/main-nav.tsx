import { Beef, CakeSlice, Coffee } from "lucide-react";
import { Button } from "../ui/button";
import { CategoriesDropDown } from "./categories-drop-down";
import { Container } from "./container";
import { ShopListDropDown } from "./shop-list-drop-down";

const Links = [
  {
    label: "Meats & Seafood",
    icon: <Beef />,
    href: "meats",
  },
  {
    label: "Bakery",
    icon: <CakeSlice />,
    href: "bakery",
  },
  {
    label: "Beverages",
    icon: <Coffee />,
    href: "beverages",
  },
  {
    label: "Blog",
    href: "blog",
  },
  {
    label: "contact",
    href: "contact",
  },
];

export const MainNav = () => {
  return (
    <Container className="flex items-center justify-between">
      <CategoriesDropDown />
      <section className="flex items-center gap-6">
        <Button
          variant="ghost"
          className="rounded-full uppercase font-dosis text-[15px] font-semibold text-muted-foreground"
        >
          Home
        </Button>
        <ShopListDropDown />
        {Links.map((l) => (
          <Button
            key={l.href}
            variant="ghost"
            className="rounded-full hover:bg-primary-foreground hover:text-primary uppercase font-dosis text-[15px] font-semibold text-muted-foreground"
          >
            {l.icon && l.icon} {l.label}
          </Button>
        ))}
      </section>
    </Container>
  );
};
