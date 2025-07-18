import { BLOG } from "@/types/items";
import Image from "next/image";
import { AspectRatio } from "../ui/aspect-ratio";
import { Card, CardContent } from "../ui/card";

export const BlogCard = ({ blog }: { blog: BLOG }) => {
  return (
    <Card className="p-0 shadow-none border-none">
      <AspectRatio
        ratio={4 / 3}
        className="rounded-lg overflow-hidden group hover:cursor-pointer"
      >
        <Image
          src={blog.image}
          alt={blog.title}
          fill
          className="object-cover group-hover:scale-125 transition-all ease-linear"
        />
      </AspectRatio>
      <CardContent className="space-y-2">
        <p className="font-dosis font-semibold text-xs text-muted-foreground uppercase">
          {blog.category}
        </p>
        <h3 className="text-xl font-semibold">{blog.title}</h3>
        <div className="flex items-center gap-3 text-sm font-medium">
          <p className=" text-gray-500">{blog.date}</p>
          <p className="text-gray-900">{blog.commentCount} comments</p>
          <p>
            <span className="font-times italic text-muted-foreground">by</span>{" "}
            Baral & Brothers
          </p>
        </div>
      </CardContent>
    </Card>
  );
};
