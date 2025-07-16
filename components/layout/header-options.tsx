import { Search, ShoppingBag, UserRound } from "lucide-react";
import { AutoComplete } from "../ui/auto-complete";
import { Indicator } from "../ui/indicator";
import { Container } from "./container";
import { LocationSelector } from "./location-selector";

type Posts = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

export const HeaderOptions = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts = (await res.json()) as Posts[];
  return (
    <Container className="flex items-center gap-12">
      <section>
        <div className="flex items-center gap-2">
          <ShoppingBag className="size-14 text-tertiary" />
          <h3 className="text-3xl font-bold font-dosis text-tertiary">
            Baral Brothers
          </h3>
        </div>
        <small className="text-xs text-gray-400 text-center block">
          Online Grocery Shopping Center
        </small>
      </section>
      <section className="flex-1 flex items-center gap-6">
        <LocationSelector />
        <div className="flex bg-muted rounded-sm items-center px-3 flex-1">
          <AutoComplete
            className="[&_svg]:hidden rounded-sm border-none bg-muted py-7 [&>div]:px-0"
            options={posts.map((post) => ({
              value: post.id.toString(),
              label: post.title,
            }))}
            loadingText="Searching..."
            placeholder="Search for products..."
          />
          <button>
            <Search className="text-muted-foreground size-8" />
          </button>
        </div>
        <div className="flex items-center gap-3">
          <div className="size-10 rounded-full flex items-center justify-center border">
            <UserRound className="size-5" />
          </div>
          <p className="font-semibold text-sm">$0.00</p>
        </div>
        <Indicator label="1">
          <ShoppingBag className="size-5 text-red-500" />
        </Indicator>
      </section>
    </Container>
  );
};
