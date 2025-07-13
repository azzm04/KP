"use client";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";

interface Transaction {
  id: string;
  orderId: string;
  product: { name: string } | string;
  buyer: { name: string; email?: string } | string;
  status: string;
  paid: number;
}

export function TransactionTable({ transactions }: { transactions: Transaction[] }) {
  return (
    <div className="overflow-auto rounded-lg shadow border">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>ID</TableHead>
            <TableHead>Order ID</TableHead>
            <TableHead>Product</TableHead>
            <TableHead>Buyer</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Paid</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {transactions.map((t) => (
            <TableRow key={t.id}>
              <TableCell className="font-mono text-sm">{t.id}</TableCell>
              <TableCell>{t.orderId}</TableCell>
              <TableCell>{typeof t.product === "object" ? t.product.name : t.product}</TableCell>
              <TableCell>{typeof t.buyer === "object" ? t.buyer.name : t.buyer}</TableCell>
              <TableCell>
                <Badge
                  variant={
                    t.status === "settlement"
                      ? "default"
                      : ["pending", "authorize", "capture"].includes(t.status)
                        ? "secondary"
                        : "destructive"
                  }
                >
                  {t.status}
                </Badge>
              </TableCell>
              <TableCell>${t.paid.toFixed(2)}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
