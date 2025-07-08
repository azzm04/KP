import { LogoutUser } from "@/components/LogoutUser";
import config from "@payload-config";
import { headers as nextHeaders } from "next/headers";
import { getPayload } from "payload";

export default async function HomePage() {
  const payload = await getPayload({ config });

  const headers = await nextHeaders();

  const result = await payload.auth({ headers, canSetHeaders: false });

  return (
    <div className="flex flex-col gap-1">
      <p>Home</p>
      {result.user && <LogoutUser user={result.user} />}
    </div>
  );
}
