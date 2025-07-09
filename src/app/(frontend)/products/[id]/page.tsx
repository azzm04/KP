import { getPayload } from "payload";
import config from "@payload-config";
import Image from "next/image";

function renderRichText(description: any) {
  if (!description) return null;
  if (typeof description === "string") return <p>{description}</p>;
  if (description.root && Array.isArray(description.root.children)) {
    const text = description.root.children.map((child: any) => child.text || "").join(" ");
    return <p>{text}</p>;
  }
  return null;
}

export default async function ProductDetailPage(props: { params: { id: string } }) {
  const payload = await getPayload({ config });
  const { id } = props.params;
  const product = await payload.findByID({
    collection: "products",
    id: id,
    depth: 5,
  });

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div className="container mx-auto p-6 flex justify-center items-center min-h-screen ">
      <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-md p-6">
        {product.images && typeof product.images === "object" && product.images.url && (
          <Image
            src={product.images.url}
            alt={product.images.alt || product.name}
            width={500}
            height={500}
            className="rounded-lg mb-4"
          />
        )}
        <h1 className="text-3xl font-bold mb-2">{product.name}</h1>
        <div className="text-lg text-gray-700 mb-4">{renderRichText(product.description)}</div>
        <div className="text-xl font-semibold mb-2">Rp{product.price?.toLocaleString("id-ID")}</div>
        <div className="text-sm text-gray-500">Stock: {product.stock}</div>
      </div>
    </div>
  );
}
