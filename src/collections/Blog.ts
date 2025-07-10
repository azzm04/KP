import type { CollectionConfig } from "payload";

export const Blogs: CollectionConfig = {
  slug: "blogs",
  admin: {
    useAsTitle: "title",
    defaultColumns: ["title", "category", "author", "publishedDate"],
  },
  fields: [
    {
      name: "title",
      label: "Title",
      type: "text",
      required: true,
    },
    {
      name: "author",
      label: "Author",
      type: "relationship",
      relationTo: "users",
      required: true,
      admin: {
        position: "sidebar",
      },
    },
    {
      name: "publishedDate",
      label: "Published Date",
      type: "date",
      required: true,
      admin: {
        position: "sidebar",
        date: {
          pickerAppearance: "dayOnly",
          displayFormat: "d MMM yyyy",
        },
      },
    },
    {
      name: "category",
      label: "Category",
      type: "relationship",
      relationTo: "stores",
      required: true,
      admin: {
        position: "sidebar",
      },
    },
    {
      name: "readingTime",
      label: "Reading Time (minutes)",
      type: "number",
      min: 1,
      admin: {
        position: "sidebar",
        description: "Perkiraan waktu baca dalam menit.",
      },
    },
    {
      name: "featuredImage",
      label: "Featured Image",
      type: "upload",
      relationTo: "media",
      required: true,
    },
    {
      name: "content",
      label: "Content",
      type: "richText", // Menggunakan Rich Text untuk konten artikel
      required: true,
    },
  ],
};
