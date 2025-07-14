import BlogCard from "@/components/BlogCard";
import { Blog } from "@/components/BlogCard";
import Link from "next/link";

export interface BlogListProps {
  blogs: Blog[];
}

const BlogList = ({ blogs }: BlogListProps) => {
  const blogCards = blogs.map((blog) => {
    return (
      <Link href={`/blogs/${blog.slug}`} key={blog.id}>
        <BlogCard post={blog} />
      </Link>
    );
  });

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-8 text-center">Blog Posts</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {blogCards}
      </div>
    </div>
  );
};

export default BlogList;
