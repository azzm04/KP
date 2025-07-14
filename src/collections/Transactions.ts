import type { CollectionConfig } from "payload";

export const Transactions: CollectionConfig = {
  slug: "transactions",

  access: {
    // Role based access control
    create: (args) => {
      return true;
    },
    read: (args) => {
      const {
        req: { user },
      } = args;

      if (!user) {
        return false;
      }

      // Return boolean atau query object
      // return {
      //   "buyer.id": {
      //     equals: user.id,
      //   },
      // };

      // return true;

      if (user && user.role === "admin") {
        return true;
      }

      return {
        "buyer.id": {
          equals: user.id,
        },
      };
    },
    update: (args) => {
      const {
        req: { user },
      } = args;

      if (user && user.role === "seller") {
        return true;
      }

      return {
        "buyer.id": {
          equals: user?.id,
        },
      };
    },
    delete: (args) => {
      const {
        req: { user },
      } = args;

      if (user && user.role === "admin") {
        return true;
      }

      return {
        "buyer.id": {
          equals: user?.id,
        },
      };
    },
  },

  // TODO show field access control
  // TODO show why in UI is still all members
  fields: [
    {
      name: "orderId",
      type: "text",
      required: true,
    },

    {
      name: "product",
      type: "relationship",
      required: true,
      relationTo: "products",
    },

    {
      name: "buyer",
      type: "relationship",
      required: true,
      relationTo: "users",
      // filterOptions: {
      //   role: {
      //     equals: "customer",
      //   },
      // },
    },

    {
      name: "status",
      type: "select",
      required: true,
      options: [
        {
          label: "Authorize",
          value: "authorize",
        },
        {
          label: "Capture",
          value: "capture",
        },
        {
          label: "Settlement",
          value: "settlement",
        },
        {
          label: "Deny",
          value: "deny",
        },
        {
          label: "Pending",
          value: "pending",
        },
        {
          label: "Cancel",
          value: "cancel",
        },
        {
          label: "Refund",
          value: "refund",
        },
        {
          label: "Partial Refund",
          value: "partial_refund",
        },
        {
          label: "Chargeback",
          value: "chargeback",
        },
        {
          label: "Partial Chargeback",
          value: "partial_chargeback",
        },
        {
          label: "Expire",
          value: "expire",
        },
        {
          label: "Failure",
          value: "failure",
        },
      ],
    },

    {
      name: "paymentLink",
      type: "text",
      required: true,
    },

    {
      name: "paid",
      type: "number",
      required: true,
    },

    {
      name: "customerDetails",
      type: "group",
      required: true,
      fields: [
        {
          name: "name",
          type: "text",
          required: true,
        },
        {
          name: "email",
          type: "text",
          required: true,
        },
        {
          name: "phone",
          type: "text",
          required: true,
        },
      ],
    },
  ],
};
