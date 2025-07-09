import type { CollectionConfig } from "payload";

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
      name: "description",
      type: "richText",
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
