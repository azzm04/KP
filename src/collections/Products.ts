import { Product } from "@/payload-types";
import type { CollectionConfig, Field, FieldHook } from "payload";

const generateSlug: FieldHook<Product, string, Product> = ({ data }) => {
  const name = data?.name;

  if (name) {
    const slug = name.toLowerCase().split(" ").join("-");

    return slug;
  }

  return data?.id ?? (Math.random() * 2_000).toString();
};

export const Products: CollectionConfig = {
  slug: "products",
  admin: {
    useAsTitle: "name",
    defaultColumns: ["name", "store", "price", "stock"],
  },
  fields: [
    {
      name: "name",
      label: "Product Name",
      type: "text",
      required: true,
    },
    {
      name: "slug",
      type: "text",
      required: true,
      unique: true,
      hooks: {
        beforeChange: [generateSlug],
      },
    },
    {
      name: "description",
      type: "richText",
      required: true,
    },
    {
      name: "price",
      label: "Price (Rp)",
      type: "number",
      required: true,
      min: 0,
      admin: {
        placeholder: "Contoh: 50000",
        description: "Masukkan harga dalam Rupiah tanpa titik atau koma.",
      },
    },
    {
      name: "stock",
      label: "Stock Quantity",
      type: "number",
      required: true,
      defaultValue: 0,
      min: 0,
    },
    {
      name: "category",
      type: "text",
    },
    {
      name: "store",
      label: "Store",
      type: "relationship",
      relationTo: "stores", // Relasi ke koleksi Stores
      required: true,
      hasMany: false,
    },
    {
      name: "images",
      label: "Product Images",
      type: "upload",
      relationTo: "media", // Relasi ke koleksi Media
      required: true,
    },
  ],
};
