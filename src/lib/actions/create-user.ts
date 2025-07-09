"use server";

import { getPayload } from "payload";
import config from "@payload-config";

// Remote Procedure Call (RPC)
export const createUser = async (name: string, email: string, password: string) => {
  const payload = await getPayload({ config });

  try {
    const res = await payload.create({
      collection: "users",
      data: {
        name,
        email,
        password,
        role: "customer", // default role
      },
    });
    return {
      success: true,
      message: "Account created successfully!",
      data: {
        fullname: name,
        email,
        passwordLength: password.length,
      },
    };
  } catch (err: any) {
    let message = "Failed to create account.";
    if (err?.data?.errors?.[0]?.message) {
      message = err.data.errors[0].message;
    } else if (err?.message) {
      message = err.message;
    }
    return {
      success: false,
      message,
      data: {
        fullname: name,
        email,
        passwordLength: password.length,
      },
    };
  }
};
