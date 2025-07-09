import { Search, ShoppingBag } from "lucide-react";
import { AutoComplete } from "../ui/auto-complete";
import { Container } from "./container";

type Posts = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

export const MainNav = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts = (await res.json()) as Posts[];
  return (
    <div className="pt-6 pb-2 border-b border-b-border">
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
        <section className="flex-1">
          <div className="flex bg-muted rounded-sm items-center px-3 ">
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
        </section>
      </Container>
    </div>
  );
};
