"use client";

import PaymentFormDialog from "@/components/PaymentFormDialog";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Heart, RotateCcw, Share2, Shield, ShoppingCart, Star, Truck } from "lucide-react";
import Image from "next/image";
import { ReactNode } from "react";
import Link from "next/link";

interface ProductPageProps {
  name: string;
  price: number;
  imageUrl: string;
  description: ReactNode;
  productId: string;
}

export default function ProductPage({
  name,
  price,
  imageUrl,
  description,
  productId,
}: ProductPageProps) {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
        {/* Product Image Section */}
        <div className="space-y-4">
          <div className="aspect-square relative overflow-hidden rounded-2xl bg-white shadow-lg">
            <Image
              src={imageUrl || "/placeholder.svg"}
              alt={name}
              fill
              className="object-cover hover:scale-105 transition-transform duration-300"
              priority
            />
            <div className="absolute top-4 right-4 flex gap-2">
              <Button
                size="icon"
                variant="secondary"
                className="rounded-full bg-white/80 backdrop-blur-sm"
              >
                <Heart className="h-4 w-4" />
                <span className="sr-only">Add to wishlist</span>
              </Button>
              <Button
                size="icon"
                variant="secondary"
                className="rounded-full bg-white/80 backdrop-blur-sm"
              >
                <Share2 className="h-4 w-4" />
                <span className="sr-only">Share product</span>
              </Button>
            </div>
          </div>
        </div>

        {/* Product Details Section */}
        <div className="space-y-6">
          {/* Header */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Button className=" " variant="outline" asChild>
                <Link href="/">← Back to Home</Link>
              </Button>
            </div>

            <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 leading-tight">{name}</h1>

            {/* Rating */}
            <div className="flex items-center gap-2">
              <div className="flex items-center">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star
                    key={star}
                    className={`w-5 h-5 ${star <= 4 ? "fill-yellow-400 text-yellow-400" : "text-gray-300"}`}
                  />
                ))}
              </div>
              <span className="text-sm text-gray-600">(4.0) • 127 reviews</span>
            </div>

            {/* Price */}
            <div className="flex items-baseline gap-3">
              <span className="text-4xl font-bold text-gray-900">
                IDR{(price || 0).toLocaleString()}
              </span>
              <span className="text-xl text-gray-500 line-through">
                IDR{(price * 1.2).toLocaleString()}
              </span>
              <Badge variant="destructive">20% OFF</Badge>
            </div>
          </div>

          <Separator />

          {/* Description */}
          <div className="space-y-3">
            <h3 className="text-lg font-semibold text-gray-900">Description</h3>
            <div className="text-gray-600 leading-relaxed">{description}</div>
          </div>

          <Separator />

          {/* Features */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-900">Key Features</h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                <Shield className="w-5 h-5 text-green-600" />
                <span className="text-sm font-medium">2 Year Warranty</span>
              </div>
              <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                <Truck className="w-5 h-5 text-blue-600" />
                <span className="text-sm font-medium">Free Shipping</span>
              </div>
              <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                <RotateCcw className="w-5 h-5 text-purple-600" />
                <span className="text-sm font-medium">30-Day Returns</span>
              </div>
            </div>
          </div>

          <Separator />

          {/* Actions */}
          <div className="space-y-4">
            <div className="flex flex-col sm:flex-row gap-3">
              <Button size="lg" className="flex-1">
                <ShoppingCart className="w-5 h-5 mr-2" />
                Add to Cart
              </Button>

              <PaymentFormDialog grossAmount={price} productId={productId} />
            </div>

            <div className="text-center">
              <p className="text-sm text-gray-600">
                ✓ In stock and ready to ship • ✓ Secure checkout • ✓ 24/7 customer support
              </p>
            </div>
          </div>

          {/* Additional Info */}
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
              <div>
                <h4 className="font-semibold text-blue-900 mb-1">Special Offer</h4>
                <p className="text-sm text-blue-800">
                  Get free premium accessories worth $50 with your purchase. Limited time offer!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
