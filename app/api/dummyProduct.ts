import type { MultipleProductsResponse, Product } from "../types";

const BASE_URL = "https://dummyjson.com";
const PRODUCTS_URL = `${BASE_URL}/products`;
const PRODUCTS_SEARCH_URL = `${PRODUCTS_URL}/search`;
const PRODUCT_CREATE_URL = `${PRODUCTS_URL}/add`;
const PRODUCTS_DEFAULT_LIMIT = 10;

export async function getAllProducts({
  limit,
  skip,
}: {
  limit: number;
  skip: number;
}): Promise<MultipleProductsResponse> {
  const fullUrl = `${PRODUCTS_URL}?limit=${
    limit || PRODUCTS_DEFAULT_LIMIT
  }&skip=${skip || 0}`;
  const response = await fetch(fullUrl);
  if (response.ok) {
    const data = await response.json();
    return data;
  } else {
    throw new Error("Error fetching products: " + response.statusText);
  }
}

export async function searchProducts({
  limit,
  skip,
  q,
}: {
  limit: number;
  skip: number;
  q: string;
}): Promise<MultipleProductsResponse> {
  const fullUrl = `${PRODUCTS_SEARCH_URL}?limit=${
    limit || PRODUCTS_DEFAULT_LIMIT
  }&skip=${skip || 0}&q=${q}`;
  const response = await fetch(fullUrl);
  if (response.ok) {
    const data = await response.json();
    return data;
  } else {
    throw new Error("Error fetching products: " + response.statusText);
  }
}

export async function createProduct(product: {
  title: string;
  price: number;
  description: string;
}): Promise<Product> {
  const response = await fetch(PRODUCT_CREATE_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(product),
  });

  if (response.ok) {
    const data = await response.json();
    return data;
  } else {
    throw new Error("Error creating product: " + response.statusText);
  }
}
