import { getPayload } from "payload";
import config from "@payload-config";
import { TransactionTable } from "@/components/TransactionTable";
import { authorizeUser } from "@/lib/actions/authorize-user";
import { redirect } from "next/navigation";

export default async function BillingPage() {
  const user = await authorizeUser();

  if (!user) {
    redirect("/auth/login");
  }

  const payload = await getPayload({ config });

  const { docs: transactions } = await payload.find({
    collection: "transactions",
    depth: 2,
    sort: "-updatedAt",
    limit: 50,
    overrideAccess: false,
    user: user,
  });

  return (
    <div className="container mx-auto py-8 px-4">
      <div className="mb-6">
        <h1 className="text-3xl font-bold tracking-tight">Billing</h1>
        <p className="text-muted-foreground">View and manage your recent orders and purchases.</p>
      </div>
      <TransactionTable transactions={transactions} />
    </div>
  );
}
