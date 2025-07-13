"use client";

import { Button } from "@/components/ui/button";
import { logoutUser } from "@/lib/actions/logout-user";
import { User } from "@/payload-types";
import { useRouter } from "next/navigation";

export const LogoutUser = ({ user }: { user: User }) => {
  const router = useRouter();

  return (
    <div className="flex items-center gap-4">
      <span className="text-sm text-gray-700">{user.email}</span>
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
  );
};
