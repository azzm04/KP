import type { CollectionConfig } from "payload";

export const Carts: CollectionConfig = {
  slug: "carts",
  admin: {
    useAsTitle: "user",
  },
  fields: [
    {
      name: "user",
      label: "User",
      type: "relationship",
      relationTo: "users",
      required: true,
      unique: true, // Setiap user hanya punya satu keranjang
    },
    {
      name: "items",
      type: "array",
      fields: [
        {
          name: "product",
          type: "relationship",
          relationTo: "products",
          required: true,
        },
        {
          name: "quantity",
          type: "number",
          min: 1,
          required: true,
        },
      ],
    },
  ],
};
