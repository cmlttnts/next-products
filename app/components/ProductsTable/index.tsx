import Pagination from "../Pagination";

/* eslint-disable @next/next/no-img-element */
type Product = {
  id: string;
  title: string;
  price: number;
  images: string[];
};

type Response = {
  products: Product[];
};
const BASE_URL = "https://dummyjson.com";
const PRODUCTS_URL = `${BASE_URL}/products`;
const PRODUCTS_SEARCH_URL = `${BASE_URL}/products/search`;
const PRODUCTS_LIMIT = 10;

export default async function ProductsTable({
  page,
  q,
}: {
  page: string;
  q: string;
}) {
  const skip = (Number(page) - 1) * PRODUCTS_LIMIT;
  let PRODUCTSFullUrl = "";
  if (q === "") {
    PRODUCTSFullUrl = `${PRODUCTS_URL}?limit=${PRODUCTS_LIMIT}&skip=${skip}`;
  } else {
    PRODUCTSFullUrl = `${PRODUCTS_SEARCH_URL}?limit=${PRODUCTS_LIMIT}&skip=${skip}&q=${q}`;
  }

  const { products } = await fetch(PRODUCTSFullUrl).then<Response>((res) =>
    res.json()
  );

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
              <td className="text-center">{index + 1}</td>
              <td>{product.title}</td>
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
      <Pagination page={page} limit={10} current={products.length} />
    </div>
  );
}
