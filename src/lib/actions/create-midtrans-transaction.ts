"use server";

// @ts-expect-error
import midtransClient from "midtrans-client";
import { nanoid } from "nanoid";
import { getPayload } from "payload";
import config from "@payload-config";
import { authorizeUser } from "@/lib/actions/authorize-user";

export const createMidtransTransaction = async (
  grossAmount: number,
  firstName: string,
  email: string,
  phone: string,
  productId: string,
) => {
  const user = await authorizeUser();

  if (!user) {
    return false;
  }

  // Create Snap API instance
  const snap = new midtransClient.Snap({
    // Set to true if you want Production Environment (accept real transaction).
    isProduction: false,
    serverKey: process.env.MIDTRANS_SERVER_KEY,
  });

  const orderId = nanoid();

  const thanktopayment = process.env.PAGE_THANKS_TO_PAYMENT;

  const parameter = {
    transaction_details: {
      order_id: orderId,
      gross_amount: grossAmount,
    },
    credit_card: {
      secure: true,
    },
    customer_details: {
      first_name: firstName,
      // last_name: "pratama",
      email: email,
      phone: phone,
    },
    callbacks: {
      finish: "https://e-commerce-navy-psi-43.vercel.app",
    },
  };

  const transaction: object = await snap.createTransaction(parameter);

  // Simpan transaksi di database
  const payload = await getPayload({ config });

  await payload.create({
    collection: "transactions",
    data: {
      buyer: user.id,
      product: productId,
      customerDetails: {
        email: email,
        name: firstName,
        phone: phone,
      },
      orderId: orderId,
      paid: grossAmount,
      // @ts-expect-error
      paymentLink: transaction.redirect_url,
      status: "pending",
    },
  });

  return transaction;
};
