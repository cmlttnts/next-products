import { createProduct } from "@/app/api/dummyProduct";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { redirect } from "next/navigation";

export default function CreateNewProduct() {
  async function handleSubmit(formData: FormData) {
    "use server";

    const title = formData.get("title") as string;
    const price = formData.get("price") as string;
    const description = formData.get("description") as string;

    // TODO: Validation steps

    await createProduct({
      title,
      price: Number(price),
      description,
    });

    return redirect(`/products`);
  }

  return (
    <div className="flex flex-col">
      <h1>Yeni Ürün Oluştur</h1>
      <form
        className="flex flex-col border border-gray-300 p-5 gap-2"
        action={handleSubmit}
      >
        <label htmlFor="title">Ürün Adı</label>
        <Input type="text" id="title" />
        <label htmlFor="price">Fiyat</label>
        <Input type="number" id="price" />
        <label htmlFor="description">Açıklama</label>
        <Textarea id="description" />
        <Button className="bg-violet-700 w-max pl-5 pr-5" type="submit">
          Oluştur
        </Button>
      </form>
    </div>
  );
}
