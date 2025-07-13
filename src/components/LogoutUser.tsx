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
      <div className="mx-auto flex items-center">
        <Button
          className="text-sm text-black hover:text-muted-foreground bg-white"
          variant="outline"
          onClick={async () => {
            await logoutUser();
            router.replace("/auth/login");
          }}
        >
          Log Out
        </Button>
      </div>
    </>
  );
};
