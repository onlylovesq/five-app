import { productsAction } from "@/actions/product";
import Products from "@/components/Products";
import Sort from "@/components/Sort";

export default async function Page() {
  const res = await productsAction();

  return (
    <div className="container flex py-6">
      <Sort />
      <Products data={res.data} />
    </div>
  );
}
