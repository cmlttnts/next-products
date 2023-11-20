export type Product = {
  id: string;
  title: string;
  price: number;
  images: string[];
};

export type MultipleProductsResponse = {
  products: Product[];
  total: number;
};
