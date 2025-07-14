import type { CollectionConfig } from "payload";

export const Categories: CollectionConfig = {
  slug: "categories",
  admin: {
    useAsTitle: "name",
  },
  fields: [
    {
      name: "name",
      label: "Category Name",
      type: "text",
      required: true,
      unique: true,
    },
  ],
};
