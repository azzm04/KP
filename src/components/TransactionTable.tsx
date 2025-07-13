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
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

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
    <div className="overflow-auto rounded-[12px] shadow border">
      <Card className="bg-white">
        <Table>
          <TableHeader>
            <TableRow className="border-gray-200 hover:bg-gray-50">
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
              <TableRow key={t.id} className="border-gray-200 hover:bg-gray-50">
                <TableCell className="text-gray-900 font-mono text-sm">{t.id}</TableCell>
                <TableCell className="text-gray-900">{t.orderId}</TableCell>
                <TableCell className="text-gray-900">
                  {typeof t.product === "object" ? t.product.name : t.product}
                </TableCell>
                <TableCell className="text-gray-900">
                  {typeof t.buyer === "object" ? t.buyer.name : t.buyer}
                </TableCell>
                <TableCell>
                  <Badge
                    variant="outline"
                    className={
                      t.status === "settlement"
                        ? "bg-green-100 text-green-800 border-green-200"
                        : t.status === "pending"
                          ? "bg-yellow-100 text-yellow-800 border-yellow-200"
                          : "bg-blue-100 text-blue-800 border-yellow-200"
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
      </Card>
    </div>
  );
}
