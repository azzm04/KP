"use server";

import { getPayload } from "payload";
import config from "@payload-config";

// Remote Procedure Call (RPC)
export const createUser = async (
  name: string,
  email: string,
  password: string,
  phoneNumber: string,
  address: string,
) => {
  const payload = await getPayload({ config });

  try {
    const res = await payload.create({
      collection: "users",
      data: {
        name,
        email,
        password,
        phoneNumber,
        address,
        role: "customer",
      },
    });

    return {
      success: true,
      message: "Account created successfully!",
      data: {
        fullname: name,
        email,
        password,
        phoneNumber,
        address,
        passwordLength: password.length,
      },
    };
  } catch (err: any) {
    return {
      success: false,
      message: "Failed to create account.",
      data: {
        fullname: name,
        email,
        password,
        phoneNumber,
        address,
        passwordLength: password.length,
      },
    };
  }
};
