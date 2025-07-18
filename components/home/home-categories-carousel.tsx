import Image from "next/image";
import { AspectRatio } from "../ui/aspect-ratio";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";

const items = [
  {
    img: "https://klbtheme.com/bacola/wp-content/uploads/2021/04/category-image4.png",
    title: "Breads & Bakery",
    total: "6",
  },
  {
    img: "https://klbtheme.com/bacola/wp-content/uploads/2021/04/category-image4.png",
    title: "Breakfast and Dairy",
    total: "8",
  },
  {
    img: "https://klbtheme.com/bacola/wp-content/uploads/2021/04/category-image4.png",
    title: "Frozen fruits",
    total: "7",
  },
  {
    img: "https://klbtheme.com/bacola/wp-content/uploads/2021/04/category-image4.png",
    title: "Fruits and Vegetables",
    total: "12",
  },
  {
    img: "https://klbtheme.com/bacola/wp-content/uploads/2021/04/category-image4.png",
    title: "Grocery & Staples",
    total: "7",
  },
  {
    img: "https://klbtheme.com/bacola/wp-content/uploads/2021/04/category-image4.png",
    title: "Household Needs",
    total: "1",
  },
  {
    img: "https://klbtheme.com/bacola/wp-content/uploads/2021/04/category-image4.png",
    title: "Meats & Seafood",
    total: "5",
  },
  {
    img: "https://klbtheme.com/bacola/wp-content/uploads/2021/04/category-image4.png",
    title: "Beverages",
    total: "11",
  },
  {
    img: "https://klbtheme.com/bacola/wp-content/uploads/2021/04/category-image4.png",
    title: "Bisucits & Snacks",
    total: "6",
  },
];

export const HomeCategoriesCarousel = () => {
  return (
    <div className="border">
      <Carousel
        opts={{
          dragFree: true,
        }}
      >
        <CarouselContent>
          {items.map((item, index) => (
            <CarouselItem
              key={index}
              className="basis-1/6 border-r border-r-border last:border-r-transparent pb-5 pt-3"
            >
              <AspectRatio ratio={1 / 1} className=" relative">
                <Image
                  alt={item.title}
                  className="object-cover"
                  fill
                  src={item.img}
                />
              </AspectRatio>
              <div className="flex flex-col items-center gap-y-1">
                <h6 className="text-sm font-semibold">{item.title}</h6>
                <p className="text-xs text-zinc-900">{item.total} items</p>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselNext className="-right-4 shadow-sm" />
        <CarouselPrevious className="-left-4 shadow-sm" />
      </Carousel>
    </div>
  );
};
