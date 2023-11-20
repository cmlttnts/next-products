import { getAllProducts, searchProducts } from "@/app/api/dummyProduct";
import Pagination from "../Pagination";
import Link from "next/link";

/* eslint-disable @next/next/no-img-element */

const PRODUCTS_LIMIT = 10;

export default async function ProductsTable({
  page,
  q,
}: {
  page: string;
  q: string;
}) {
  const skip = (Number(page) - 1) * PRODUCTS_LIMIT;
  let products;
  let total;
  if (!q) {
    const resp = await getAllProducts({
      limit: PRODUCTS_LIMIT,
      skip,
    });
    products = resp.products;
    total = resp.total;
  } else {
    const resp = await searchProducts({
      q,
      limit: PRODUCTS_LIMIT,
      skip,
    });
    products = resp.products;
    total = resp.total;
  }

  return (
    <div>
      <table className="products-table">
        <thead>
          <tr>
            <th>#</th>
            <th>Ürün İsmi</th>
            <th>Fiyat</th>
            <th>Foto</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product, index) => (
            <tr key={product.id} className="h-[50px]">
              <td className="text-center">{skip + index + 1}</td>
              <td className="link text-blue-500">
                <Link href={`/products/${product.id}`}>{product.title}</Link>
              </td>
              <td className="text-right">
                {Intl.NumberFormat("tr-TR", {
                  style: "currency",
                  currency: "TRY",
                }).format(product.price)}
              </td>
              <td className="flex justify-center">
                <img
                  src={product.images[0]}
                  alt={product.title}
                  style={{ width: "auto", height: "50px" }}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <Pagination page={page} limit={10} total={total} />
    </div>
  );
}
