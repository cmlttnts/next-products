import Image from "next/image";
import "./style.css";
import Search from "../components/Search";
import ProductsTable from "../components/ProductsTable";
import { Suspense } from "react";
import Pagination from "../components/Pagination";

export default async function ProductsPage({
  searchParams,
}: {
  searchParams?: {
    q?: string;
    page?: string;
  };
}) {
  const { q = "", page = "1" } = searchParams || {};

  return (
    <div className="flex flex-col">
      <Search />
      <Suspense fallback={<div>Loading...</div>}>
        <ProductsTable page={page} q={q} />
      </Suspense>
    </div>
  );
}
