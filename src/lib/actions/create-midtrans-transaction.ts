"use server";

// @ts-expect-error
import midtransClient from "midtrans-client";
import { nanoid } from "nanoid";

export const createMidtransTransaction = async (
  grossAmount: number,
  firstName: string,
  email: string,
  phone: string,
) => {
  let snap = new midtransClient.Snap({
    isProduction: false,
    serverKey: process.env.MIDTRANS_SERVER_KEY,
  });

  const orderId = nanoid();

  let parameter = {
    transaction_details: {
      order_id: orderId,
      gross_amount: grossAmount,
    },
    credit_card: {
      secure: true,
    },
    customer_details: {
      first_name: firstName,
      email: email,
      phone: phone,
    },
    callbacks: {
      finish: "http://localhost:3000",
    },
  };

  // TODO redirect to homepage
  // TODO simpan transaksi dan update transaksi sesuai dengan status di Midtrans -> HTTP Notifications

  const transaction: object = await snap.createTransaction(parameter);

  return transaction;
};
