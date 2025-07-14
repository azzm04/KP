import Link from "next/link";

interface Media {
  id: string;
  url?: string;
  alt?: string;
}

export interface Blog {
  id: string;
  title: string;
  slug: string;
  featuredImage: {
    id: string;
    url?: string;
    alt?: string;
  };
  publishedAt: string;
  content: string;
}

// --- Fungsi Helper untuk Format Tanggal ---
const formatDate = (dateString: string) => {
  const options: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  return new Date(dateString).toLocaleDateString("id-ID", options);
};

const BlogCard = ({ post }: { post: Blog }) => {
  return (
    <Link
      href={`/blogs/${post.slug}`}
      className="group block overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm transition-all duration-300 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
    >
      {/* Bagian Gambar */}
      <div className="relative h-48 w-full overflow-hidden">
        {post.featuredImage?.url ? (
          <img
            src={post.featuredImage.url}
            alt={post.featuredImage.alt || `Gambar untuk ${post.title}`}
            className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
        ) : (
          // Fallback jika tidak ada gambar
          <div className="flex h-full w-full items-center justify-center bg-gray-100">
            <span className="text-sm text-gray-500">Gambar tidak tersedia</span>
          </div>
        )}
      </div>

      {/* Bagian Konten Teks */}
      <div className="p-6">
        {/* Tanggal Publikasi */}
        <p className="text-sm text-gray-900 mb-2 group-hover:text-gray-500">
          {formatDate(post.publishedAt)}
        </p>

        {/* Judul Artikel */}
        <h3 className="text-xl font-bold text-gray-900 transition-colors duration-300 group-hover:text-gray-500">
          {post.title}
        </h3>
      </div>
    </Link>
  );
};

export default BlogCard;
