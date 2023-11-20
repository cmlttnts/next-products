import {
  createProduct,
  getProductById,
  updateProduct,
} from "@/app/api/dummyProduct";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Link from "next/link";
import { redirect } from "next/navigation";

export default async function EditProductPage({
  params,
}: {
  params: { productId: string };
}) {
  async function handleSubmit(formData: FormData) {
    "use server";

    const title = formData.get("title") as string;
    const price = formData.get("price") as string;
    const description = formData.get("description") as string;

    // TODO: Validation steps

    await updateProduct({
      title,
      price: Number(price),
      description,
      id: params.productId,
    });

    // Not really updated since dummy api, but we can redirect to the detail page
    return redirect(`/products/${params.productId}`);
  }

  const product = await getProductById(params.productId);

  return (
    <div className="flex flex-col">
      <h1 className="font-bold">Ürün Düzenle</h1>
      <form
        className="flex flex-col border border-gray-300 p-5 gap-2"
        action={handleSubmit}
      >
        <label htmlFor="title">Ürün Adı</label>
        <Input type="text" id="title" defaultValue={product.title} />
        <label htmlFor="price">Fiyat</label>
        <Input type="number" id="price" defaultValue={product.price} />
        <label htmlFor="description">Açıklama</label>
        <Textarea id="description" defaultValue={product.description} />
        <div>
          <Button variant="outline" className="pl-5 pr-5 mr-5">
            <Link href={`/products/${params.productId}`}>İptal</Link>
          </Button>
          <Button className="bg-violet-700 w-max pl-5 pr-5">
            <Link href={`/products/${params.productId}/edit`}>Kaydet</Link>
          </Button>
        </div>
      </form>
    </div>
  );
}
