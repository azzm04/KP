import type { CollectionConfig } from "payload";

export const Users: CollectionConfig = {
  slug: "users",
  admin: {
    useAsTitle: "email",
  },
  auth: true,
  fields: [
    {
      name: "name",
      label: "Full Name",
      type: "text",
      required: true,
    },
    {
      name: "role",
      label: "Role",
      type: "select",
      required: true,
      options: [
        { label: "Customer", value: "customer" },
        { label: "Seller", value: "seller" },
        { label: "Admin", value: "admin" },
      ],
    },
    {
      name: "phoneNumber",
      label: "Phone Number",
      type: "text",
      required: true,
      validate: (val: unknown) => {
        if (typeof val !== "string") return "Phone number must be a string.";
        if (!/^\d+$/.test(val)) {
          return "Phone number can only contain digits.";
        }
        if (val.length < 7 || val.length > 15) {
          return "Phone number must be between 7 and 15 digits.";
        }
        return true;
      },
    },
    {
      name: "address",
      label: "Address",
      type: "text",
      required: true,
    },
    {
      name: "wishlist",
      type: "array",
      label: "Wishlist",
      fields: [
        {
          name: "product",
          type: "relationship",
          relationTo: "products",
          required: true,
        },
      ],
      admin: {
        condition: (data, siblingData) => data.role === "customer", // Hanya untuk pelanggan
      },
    },
  ],
};
