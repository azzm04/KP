import { getPayload } from "payload";
import config from "@payload-config";
import ProductCard from "@/components/ProductCard";
import Link from "next/link";

export default async function ProductsListPage() {
  const payload = await getPayload({ config });
  const products = await payload.find({
    collection: "products",
    depth: 2,
  });

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-8 text-center">All Products</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {products.docs.map((product: any) => (
          <Link key={product.id} href={`/products/${product.id}`}>
            <ProductCard
              id={product.id}
              name={product.name}
              stock={product.stock}
              currency="IDR"
              price={product.price}
              image={typeof product.images === "object" ? (product.images.url ?? "") : ""}
              imageAlt={typeof product.images === "object" ? product.images.alt : ""}
            />
          </Link>
        ))}
      </div>
    </div>
  );
}
