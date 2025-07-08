"use server";

import { getPayload } from "payload";
import config from "@payload-config";

// Remote Procedure Call (RPC)
export const createUser = async (name: string, email: string, password: string) => {
  // Payload object
  const payload = await getPayload({ config });

  const res = await payload.create({
    collection: "users",
    data: {
      email,
      password,
    },
  });

  return { name, email, password };
};
