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

const formatRupiah = (number: any) => {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0,
  }).format(number);
};

export function TransactionTable({ transactions }: { transactions: Transaction[] }) {
  return (
    <div className="overflow-hidden rounded-[12px] shadow border">
      <Card className="bg-white">
        <Table className="responsive-table">
          {/* Header ini akan disembunyikan di mobile (layar < 768px) */}
          <TableHeader className="hidden md:table-header-group">
            <TableRow className="border-gray-200 bg-gray-50">
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
              <TableRow
                key={t.id}
                // Di mobile (layar < 768px), setiap baris akan menjadi grid
                // Di desktop, akan kembali menjadi table-row
                className="grid grid-cols-2 gap-x-2 gap-y-3 p-4 border-b border-gray-200 md:table-row md:p-0 md:gap-0"
              >
                <TableCell
                  data-label="ID"
                  className="text-gray-900 font-mono text-sm md:table-cell"
                >
                  {t.id}
                </TableCell>
                <TableCell data-label="Order ID" className="text-gray-900 md:table-cell">
                  {t.orderId}
                </TableCell>
                <TableCell data-label="Product" className="text-gray-900 md:table-cell">
                  {typeof t.product === "object" ? t.product.name : t.product}
                </TableCell>
                <TableCell data-label="Buyer" className="text-gray-900 md:table-cell">
                  {typeof t.buyer === "object" ? t.buyer.name : t.buyer}
                </TableCell>
                <TableCell data-label="Status" className="md:table-cell">
                  <Badge
                    variant="outline"
                    className={
                      t.status === "settlement"
                        ? "bg-green-100 text-green-800 border-green-200"
                        : t.status === "pending"
                          ? "bg-yellow-100 text-yellow-800 border-yellow-200"
                          : "bg-blue-100 text-blue-800 border-blue-200"
                    }
                  >
                    {t.status}
                  </Badge>
                </TableCell>
                <TableCell data-label="Paid" className="text-gray-900 font-semibold md:table-cell">
                  {/* Menggunakan fungsi formatRupiah */}
                  {formatRupiah(t.paid)}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Card>
    </div>
  );
}
