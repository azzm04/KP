import type { CollectionConfig } from "payload";

export const Stores: CollectionConfig = {
  slug: "stores",
  admin: {
    useAsTitle: "store_name",
    defaultColumns: ["store_name", "owner", "publishedAt"],
  },
  fields: [
    {
      name: "store_name",
      label: "Store Name",
      type: "text",
      required: true,
      unique: true,
    },
    {
      name: "owner",
      label: "Store Owner",
      type: "relationship",
      relationTo: "users", // Relasi ke koleksi Users
      required: true,
      // Filter untuk memastikan hanya user dengan role 'seller' yang bisa dipilih
      filterOptions: {
        role: {
          equals: "seller",
        },
      },
    },
    {
      name: "description",
      type: "richText",
    },
    {
      name: "products",
      type: "join",
      collection: "products",
      on: "store",
      required: true,
    },
  ],
};
