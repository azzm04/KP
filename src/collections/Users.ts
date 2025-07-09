import type { CollectionConfig } from "payload";

export const Users: CollectionConfig = {
  slug: "users",
  auth: true, // Mengaktifkan otentikasi untuk koleksi ini
  admin: {
    useAsTitle: "name", // Menampilkan field 'name' sebagai judul di admin panel
  },
  fields: [
    {
      name: "name",
      type: "text",
      required: true,
    },
    // Field 'email' dan 'password' ditambahkan secara otomatis oleh `auth: true`
    {
      name: "role",
      type: "select",
      required: true,
      options: [
        { label: "Customer", value: "customer" },
        { label: "Seller", value: "seller" },
      ],
      defaultValue: "customer",
      admin: {
        position: "sidebar",
      },
    },
    {
      name: "phone_number",
      type: "text",
    },
    {
      name: "address",
      type: "textarea",
    },
  ],
};
