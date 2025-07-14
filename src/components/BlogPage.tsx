"use client";

import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { CalendarDays, Heart, Share2 } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { ReactNode } from "react";

interface BlogPageProps {
  id: string;
  title: string;
  imageUrl: string;
  publishedAt: string;
  content: ReactNode;
}

export default function BlogPage({ id, title, imageUrl, publishedAt, content }: BlogPageProps) {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      {/* Back Button */}
      <div className="mb-6">
        <Button variant="outline" asChild>
          <Link href="/blogs">← Back to Blog</Link>
        </Button>
      </div>

      {/* Featured Image */}
      <div className="aspect-video relative overflow-hidden rounded-xl bg-white shadow-lg mb-6">
        <Image
          src={imageUrl || "/placeholder.svg"}
          alt={title}
          fill
          className="object-cover"
          priority
        />

        {/* Floating Buttons */}
        <div className="absolute top-4 right-4 flex gap-2">
          <Button
            size="icon"
            variant="secondary"
            className="rounded-full bg-white/80 backdrop-blur-sm"
          >
            <Heart className="h-4 w-4" />
            <span className="sr-only">Bookmark blog</span>
          </Button>
          <Button
            size="icon"
            variant="secondary"
            className="rounded-full bg-white/80 backdrop-blur-sm"
          >
            <Share2 className="h-4 w-4" />
            <span className="sr-only">Share blog</span>
          </Button>
        </div>
      </div>

      {/* Blog Title */}
      <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-2">{title}</h1>

      {/* Date */}
      <div className="flex items-center text-sm text-gray-500 mb-6 gap-2">
        <CalendarDays className="w-4 h-4" />
        <span>
          Published on{" "}
          {new Date(publishedAt).toLocaleDateString("id-ID", {
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </span>
      </div>

      <Separator />

      {/* Content */}
      <div className="prose prose-lg mt-6 max-w-none text-gray-800">{content}</div>
    </div>
  );
}
