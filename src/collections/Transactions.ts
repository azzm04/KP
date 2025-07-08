import type { CollectionConfig } from "payload";

export const Transactions: CollectionConfig = {
  slug: "transactions",
  admin: {
    useAsTitle: "invoice_number",
    defaultColumns: ["invoice_number", "customer", "total_amount", "status"],
  },
  fields: [
    {
      name: "invoice_number",
      type: "text",
      required: true,
      unique: true,
    },
    {
      name: "customer",
      type: "relationship",
      relationTo: "users",
      required: true,
    },
    {
      name: "items",
      type: "array", // Array untuk menyimpan item yang dibeli
      fields: [
        {
          name: "product",
          type: "relationship",
          relationTo: "products",
        },
        {
          name: "product_name", // Snapshot nama produk
          type: "text",
          required: true,
        },
        {
          name: "price", // Snapshot harga produk
          type: "number",
          required: true,
        },
        {
          name: "quantity",
          type: "number",
          required: true,
        },
      ],
    },
    {
      name: "total_amount",
      type: "number",
      label: "Price (Rp)",
      required: true,
      admin: {
        // Menambahkan properti admin untuk petunjuk tambahan
        placeholder: "Contoh: 50000",
        description: "Masukkan harga dalam Rupiah tanpa titik atau koma.",
      },
    },
    {
      name: "shipping_address",
      type: "textarea",
      required: true,
    },
    {
      name: "status",
      type: "select",
      required: true,
      options: [
        { label: "Pending Payment", value: "pending_payment" },
        { label: "Paid", value: "paid" },
        { label: "Shipped", value: "shipped" },
        { label: "Completed", value: "completed" },
        { label: "Cancelled", value: "cancelled" },
      ],
      defaultValue: "pending_payment",
    },
  ],
};
