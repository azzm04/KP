import { getPayload } from "payload";
import config from "@payload-config";
import { redirect } from "next/navigation";
import { Transaction } from "@/payload-types";

export interface ProcessingPaymentPageProps {
  // http://localhost:3000/?order_id=9ulRSYGcE7DKOPXGwCLy2&status_code=200&transaction_status=settlement
  searchParams: Promise<
    Partial<{
      order_id: string;
      status_code: string;
      transaction_status: string;
    }>
  >;
}

const ProcessingPaymentPage = async ({ searchParams }: ProcessingPaymentPageProps) => {
  const transaction_status = (await searchParams).transaction_status;
  const order_id = (await searchParams).order_id;

  if (!transaction_status && !order_id) {
    redirect("/");
  }

  const payload = await getPayload({ config });

  await payload.update({
    collection: "transactions",
    data: {
      status: transaction_status as Transaction["status"],
    },
    where: {
      orderId: {
        equals: order_id,
      },
    },
  });

  redirect("/");
};

export default ProcessingPaymentPage;
