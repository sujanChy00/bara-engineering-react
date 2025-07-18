export type ITEMS = {
  image: string;
  stock?: string;
  inStock: boolean;
  name: string;
  price: string;
  discountPrice?: string;
  ratings: number;
  ratingCount: number;
  discountPercentage?: string;
  category?: string;
  recommended?: boolean;
};

export type BLOG = {
  image: string;
  title: string;
  category: string;
  date: string;
  commentCount: number;
};
