import { getPayload } from "payload";
import config from "@payload-config";
import BlogCard, { Blog } from "@/components/BlogCard";

const BlogPage = async () => {
  const payload = await getPayload({ config });

  const { docs: blogs } = await payload.find({
    collection: "blogs",
    depth: 10,
    sort: "-createdAt",
    limit: 100,
  });

  const formattedBlogs: Blog[] = blogs.map((blog: any) => ({
    id: blog.id,
    title: blog.title,
    slug: blog.slug,
    publishedAt: blog.createdAt,
    featuredImage: {
      id: blog.featuredImage?.id || "",
      url: typeof blog.featuredImage === "object" ? blog.featuredImage?.url : undefined,
      alt: blog.featuredImage?.alt || "",
    },
    content: blog.content,
  }));

  return (
    <div className="container mx-auto py-8 px-4">
      <div className="mb-6">
        <h1 className="text-3xl font-bold tracking-tight">Blog</h1>
        <p className="text-muted-foreground">Latest articles and updates from us.</p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {formattedBlogs.map((post) => (
          <BlogCard key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
};

export default BlogPage;
