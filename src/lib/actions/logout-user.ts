"use server";

import { cookies } from "next/headers";

export const logoutUser = async () => {
  const cookieStore = await cookies();

  cookieStore.delete("payload-token");

  return true;
};
