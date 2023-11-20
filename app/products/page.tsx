import Image from "next/image";
import "./style.css";
import Search from "../components/Search";
import ProductsTable from "../components/ProductsTable";
import { Suspense } from "react";
import Pagination from "../components/Pagination";
import { Button } from "@/components/ui/button";
import Link from "next/link";

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
      <div className="flex flex-row justify-around">
        <Search />
        <Button className="bg-violet-700 w-max pl-5 pr-5">
          <Link href="/products/new">Yeni Ürün Oluştur</Link>
        </Button>
      </div>
      <Suspense fallback={<div>Loading...</div>}>
        <ProductsTable page={page} q={q} />
      </Suspense>
    </div>
  );
}
