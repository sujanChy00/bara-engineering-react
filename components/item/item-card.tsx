import { cn } from "@/lib/utils";
import { ITEMS } from "@/types/items";
import { Expand } from "lucide-react";
import Image from "next/image";
import { AspectRatio } from "../ui/aspect-ratio";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import { Card, CardContent, CardHeader } from "../ui/card";
import { Rating, RatingButton } from "../ui/rating";
import { AddToCartButton } from "./add-to-cart-btn";
import { ItemViewer } from "./item-viewer";
import { LikeItem } from "./like-item";

interface Props {
  item: ITEMS;
  className?: string;
}

export const ItemCard = ({ className, item }: Props) => {
  return (
    <Card
      className={cn(
        "p-6 shadow-none rounded-none border-0 relative group hover:bg-tertiary/5",
        className
      )}
    >
      <div className="absolute flex flex-col gap-y-1 top-2 right-2 text-muted-foreground z-20">
        <ItemViewer asChild>
          <Button
            className="rounded-full hover:bg-tertiary hover:text-white cursor-pointer translate-x-4 group-hover:translate-x-0 transition-all ease-linear opacity-0 group-hover:opacity-100"
            variant="outline"
            size="icon"
          >
            <Expand />
          </Button>
        </ItemViewer>
        <LikeItem />
      </div>
      <CardHeader className="p-0 relative">
        <div className="top-2 left-2 z-20 absolute flex flex-col gap-y-1">
          {item?.discountPercentage && (
            <Badge className="rounded-xs">{item.discountPercentage}</Badge>
          )}
          {item?.category && (
            <Badge className="rounded-full bg-green-100 text-green-500 uppercase font-dosis text-xs font-semibold">
              {item.category}
            </Badge>
          )}
          {item?.recommended && (
            <Badge
              className="rounded-xs text-white bg-gray-500 font-dosis text-xs font-semibold uppercase"
              variant="secondary"
            >
              recommended
            </Badge>
          )}
        </div>
        <AspectRatio ratio={4 / 3}>
          <Image
            alt={item.name}
            fill
            src={item.image}
            className="object-cover"
          />
        </AspectRatio>
      </CardHeader>

      <CardContent className="p-0 space-y-3 relative z-20">
        <h3 className="text-sm font-medium text-zinc-800 hover:text-tertiary cursor-pointer">
          {item.name}
        </h3>
        <div className="flex items-center gap-x-2">
          {item.stock && (
            <p className="text-[11px] text-muted-foreground">{item.stock}</p>
          )}
          {item.inStock && (
            <p className="font-dosis text-[11px] text-green-500 uppercase font-semibold">
              In Stock
            </p>
          )}
        </div>
        <div className="flex items-center gap-1">
          <Rating readOnly defaultValue={item.ratings} className="gap-0">
            {Array.from({ length: 5 }).map((_, index) => (
              <RatingButton className="[&_svg]:size-3 w-3" key={index} />
            ))}
          </Rating>
          <p className="font-semibold font-dosis text-xs text-muted-foreground">
            {item.ratingCount}
          </p>
        </div>
        <div className="flex items-baseline gap-x-2">
          <p
            className={cn(
              "text-gray-400 font-dosis font-semibold text-[15px]",
              item.discountPercentage && " line-through"
            )}
          >
            {item.price}
          </p>
          {!!item?.discountPercentage && (
            <p className="text-destructive font-semibold font-dosis text-lg">
              {item.discountPrice}
            </p>
          )}
        </div>
      </CardContent>
      <AddToCartButton />
    </Card>
  );
};
