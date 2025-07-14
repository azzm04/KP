import { getPayload } from "payload";
import config from "@payload-config";
import { notFound } from "next/navigation";
import { RichText } from "@payloadcms/richtext-lexical/react";
import BlogPage from "@/components/BlogPage";

interface BlogDetailPageProps {
  params: Promise<{
    blogsSlug: string;
  }>;
}

const BlogDetailPage = async ({ params }: BlogDetailPageProps) => {
  const payload = await getPayload({ config });

  const { blogsSlug } = await params;
  const { docs } = await payload.find({
    collection: "blogs",
    where: {
      slug: {
        equals: blogsSlug,
      },
    },
    depth: 5,
    limit: 1,
  });

  const blog = docs[0];

  if (!blog) return notFound();

  return (
    <BlogPage
      id={blog.id}
      title={blog.title}
      imageUrl={
        typeof blog.featuredImage === "object" && blog.featuredImage?.url
          ? blog.featuredImage.url
          : ""
      }
      publishedAt={blog.createdAt}
      content={<RichText data={blog.content} />}
    />
  );
};

export default BlogDetailPage;
