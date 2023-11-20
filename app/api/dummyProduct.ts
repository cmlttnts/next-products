"use server";

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

type BasicProduct = {
  title: string;
  price: number;
  description: string;
};

type BasicProductWithId = BasicProduct & { id: string };

export async function createProduct(
  product: BasicProduct
): Promise<BasicProduct> {
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

export async function getProductById(id: string): Promise<BasicProductWithId> {
  const response = await fetch(`${PRODUCTS_URL}/${id}`);
  if (response.ok) {
    const data = await response.json();
    return data;
  } else {
    throw new Error("Error fetching product: " + response.statusText);
  }
}

export async function updateProduct(
  updatedProduct: BasicProductWithId
): Promise<BasicProductWithId> {
  const { id, ...rest } = updatedProduct;
  const response = await fetch(`${PRODUCTS_URL}/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(rest),
  });

  if (response.ok) {
    const data = await response.json();
    return data;
  } else {
    throw new Error("Error updating product: " + response.statusText);
  }
}

export async function deleteProduct(id: string): Promise<void> {
  const response = await fetch(`${PRODUCTS_URL}/${id}`, {
    method: "DELETE",
  });

  if (!response.ok) {
    throw new Error("Error deleting product: " + response.statusText);
  }
}
