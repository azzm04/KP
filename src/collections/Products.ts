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
      type: "richText", // Rich text editor untuk deskripsi yang lebih detail
    },
    {
      name: "price",
      label: "Price (Rp)",
      type: "number",
      required: true,
      min: 0,
      admin: {
        // Menambahkan properti admin untuk petunjuk tambahan
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
      name: "images",
      label: "Product Images",
      type: "relationship",
      relationTo: "media",
      hasMany: true, // Memungkinkan memilih banyak gambar
    },
    {
      name: "store",
      label: "Store",
      type: "relationship",
      relationTo: "stores", // Relasi ke koleksi Stores
      required: true,
      hasMany: false,
    },
  ],
};
