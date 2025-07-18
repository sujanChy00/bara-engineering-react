import { BlogCard } from "./blog-card";

const blogs = [
  {
    image:
      "https://klbtheme.com/bacola/wp-content/uploads/2021/05/blog-3-370x260.jpg",
    title: "But I must explain to you how all this mistaken idea",
    category: "tips & tricks",
    date: "3 May 2024",
    commentCount: 3,
  },
  {
    image:
      "https://klbtheme.com/bacola/wp-content/uploads/2021/05/blog-5-370x260.jpg",
    title: "The Problem With Typefaces on the Web",
    category: "grocery",
    date: "3 May 2024",
    commentCount: 3,
  },
  {
    image:
      "https://klbtheme.com/bacola/wp-content/uploads/2021/05/blog-1-370x260.jpg",
    title: "English Breakfast Tea With Tasty Donut Desserts",
    category: "grocery",
    date: "3 May 2024",
    commentCount: 3,
  },
];

export const BlogList = () => {
  return (
    <div className="grid grid-cols-3 gap-6">
      {blogs.map((b, i) => (
        <BlogCard blog={b} key={i} />
      ))}
    </div>
  );
};
