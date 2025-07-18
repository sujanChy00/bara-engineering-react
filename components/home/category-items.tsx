import { CATEGORY_ITEMS } from "@/constants/data";
import { cn } from "@/lib/utils";
import { MoveRight } from "lucide-react";
import Image from "next/image";
import { ItemCard } from "../item/item-card";
import { Button } from "../ui/button";

interface Props {
  title: string;
  subtitle: string;
  imageURL: string;
}

export const Categoryitems = ({ subtitle, title, imageURL }: Props) => {
  return (
    <div className="space-y-8">
      <section className="flex items-center justify-between">
        <div>
          <h3 className="font-dosis text-xl font-semibold uppercase">
            {title}
          </h3>
          <p className="text-muted-foreground text-xs">{subtitle}</p>
        </div>
        <Button
          className="rounded-full text-muted-foreground text-sm font-medium"
          variant="outline"
          size="sm"
        >
          <p>View All</p> <MoveRight />
        </Button>
      </section>
      <section className="border rounded-sm flex items-stretch">
        <div className="text-[13px] w-96 text-gray-700 flex flex-col items-start py-10 px-8 col-span-3">
          <button className="hover:text-primary py-2 cursor-pointer">
            Herbs & Seasonings
          </button>
          <button className="hover:text-primary py-2 cursor-pointer">
            Packaged Produce
          </button>
          <button className="hover:text-primary py-2 cursor-pointer">
            Party Trays
          </button>
          <button className="hover:text-primary py-2 cursor-pointer">
            Cuts & Sprouts
          </button>
          <button className="hover:text-primary py-2 cursor-pointer">
            Exotic Fruits & Veggies
          </button>
          <button className="hover:text-primary py-2 cursor-pointer">
            Fresh Fruits
          </button>
          <button className="hover:text-primary py-2 cursor-pointer">
            Fresh Vegetables
          </button>
        </div>
        <div className="w-[500px] relative overflow-hidden">
          <a
            href="#"
            rel="noopener noreferrer"
            className="inset-0 absolute left-0 top-0 z-20 p-10 space-y-3"
          >
            <p className="font-dosis text-destructive text-lg">delicious</p>
            <h5 className="text-2xl font-extralight leading-tight">
              The freshest of <br />{" "}
              <span className="font-semibold">all products</span>{" "}
            </h5>
            <p className="font-dosis text-sm text-muted-foreground font-semibold pt-2">
              Just in Baral Brothers
            </p>
          </a>
          <Image src={imageURL} alt="banner" fill className="object-cover" />
        </div>
        <div className="col-span-6 grid grid-cols-3">
          {CATEGORY_ITEMS.map((item, index) => {
            const isRightColumn = (index + 1) % 3 === 0;
            const isBottomRow = index >= CATEGORY_ITEMS.length - 3;

            return (
              <ItemCard
                item={item}
                key={index}
                className={cn(
                  "border-r border-b border-border",
                  isRightColumn && "border-r-0",
                  isBottomRow && "border-b-0"
                )}
              />
            );
          })}
        </div>
      </section>
    </div>
  );
};
