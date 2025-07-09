"use client";

import { Button } from "@/components/ui/button";
import { logoutUser } from "@/lib/actions/logout-user";
import { User } from "@/payload-types";
import { useRouter } from "next/navigation";

export const LogoutUser = ({ user }: { user: User }) => {
  const router = useRouter();

  return (
    <>
      <p>{user.email}</p>
      <Button
        className="cursor-pointer"
        onClick={async () => {
          await logoutUser();
          router.replace("/auth/login");
        }}
      >
        Log Out
      </Button>
    </>
  );
};
