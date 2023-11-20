"use client";

import { deleteProduct } from "@/app/api/dummyProduct";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { startTransition } from "react";

export default function DeleteProduct({ productId }: { productId: string }) {
  const { replace } = useRouter();

  async function handleDelete() {
    const resp = window.confirm("Silmek istediğinize emin misiniz?");
    if (resp) {
      startTransition(() => {
        // TODO: handle api errors
        deleteProduct(productId);
      });
      replace(`/products`);
    }
  }

  return (
    <Button variant={"destructive"} onClick={handleDelete}>
      Sil
    </Button>
  );
}
