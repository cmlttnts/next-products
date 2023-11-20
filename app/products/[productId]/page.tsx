import { getProductById } from "@/app/api/dummyProduct";
import DeleteProduct from "@/app/components/DeleteProduct";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Link from "next/link";

export default async function ProductDetailPage({
  params,
}: {
  params: { productId: string };
}) {
  // TODO: handle api errors
  const product = await getProductById(params.productId);

  return (
    <div className="flex flex-col">
      <h1 className="font-bold">Ürün Detayı</h1>
      <form className="flex flex-col border border-gray-300 p-5 gap-2">
        <label htmlFor="title">Ürün Adı</label>
        <Input type="text" id="title" readOnly defaultValue={product.title} />
        <label htmlFor="price">Fiyat</label>
        <Input type="number" id="price" readOnly defaultValue={product.price} />
        <label htmlFor="description">Açıklama</label>
        <Textarea
          id="description"
          readOnly
          defaultValue={product.description}
        />
        <div>
          <DeleteProduct productId={params.productId} />
          <Button className="bg-violet-700 w-max pl-5 pr-5">
            <Link href={`/products/${params.productId}/edit`}>Düzenle</Link>
          </Button>
        </div>
      </form>
    </div>
  );
}
