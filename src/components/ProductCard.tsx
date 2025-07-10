import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface ProductCardProps {
  image: string;
  name: string;
  price?: number;
  stock: number;
  currency?: string;
  imageAlt?: string;
}

export default function ProductCard({
  image,
  name,
  price = 0,
  stock,
  currency = "$",
  imageAlt,
}: ProductCardProps) {
  const getStockStatus = () => {
    if (stock === 0) {
      return { text: "Out of Stock", variant: "destructive" as const };
    } else if (stock <= 5) {
      return { text: `Only ${stock} left`, variant: "secondary" as const };
    } else {
      return { text: "In Stock", variant: "default" as const };
    }
  };

  const stockStatus = getStockStatus();

  return (
    <Card className="w-full max-w-sm overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <div className="relative aspect-square overflow-hidden">
        <Image
          src={image || "/placeholder.svg"}
          alt={imageAlt || name}
          fill
          className="object-cover hover:scale-105 transition-transform duration-300"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className="absolute top-2 right-2">
          <Badge variant={stockStatus.variant}>{stockStatus.text}</Badge>
        </div>
      </div>
      <CardContent className="p-4">
        <h3 className="font-semibold text-lg mb-2 line-clamp-2 min-h-[3.5rem]">{name}</h3>
        <div className="flex items-center justify-between">
          <span className="text-2xl font-bold text-primary">
            {currency}
            {(price || 0).toLocaleString()}
          </span>
          <span className="text-sm text-muted-foreground">Stock: {stock}</span>
        </div>
      </CardContent>
    </Card>
  );
}
