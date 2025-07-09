import ProductCard from "@/components/ProductCard";
import { Product } from "@/payload-types";

export interface ProductListProps {
  products: Product[];
}

const ProductList = ({ products }: ProductListProps) => {
  const productCards = products.map((product) => {
    return (
      <ProductCard
        key={product.id}
        name={product.name}
        stock={product.stock}
        currency="IDR"
        price={product.price}
        image={typeof product.images === "object" ? (product.images.url ?? "") : ""}
        imageAlt={typeof product.images === "object" ? product.images.alt : ""}
      />
    );
  });

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-8 text-center">Product Showcase</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {productCards}
      </div>
    </div>
  );
};

export default ProductList;
