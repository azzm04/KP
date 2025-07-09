"use server";

import { getPayload } from "payload";
import config from "@payload-config";

import { cookies } from "next/headers";

export const loginUser = async (email: string, password: string) => {
  const payload = await getPayload({ config });

  const res = await payload.login({
    collection: "users",
    data: {
      email,
      password,
    },
  });

  const cookieStore = await cookies();

  if (res.token) {
    cookieStore.set("payload-token", res.token);
  }

  return res;
};
