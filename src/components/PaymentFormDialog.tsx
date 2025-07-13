"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { createMidtransTransaction } from "@/lib/actions/create-midtrans-transaction";

interface FormData {
  email: string;
  fullName: string;
  phoneNumber: string;
  fullAddress: string;
}

export default function PaymentFormDialog(props: { grossAmount: number; productId: string }) {
  const [open, setOpen] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    email: "",
    fullName: "",
    phoneNumber: "",
    fullAddress: "",
  });

  const handleInputChange = (field: keyof FormData, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleProceedToPayment = async () => {
    console.log("User Information:", formData);
    setOpen(false);
    // Reset form after logging
    setFormData({
      email: "",
      fullName: "",
      phoneNumber: "",
      fullAddress: "",
    });

    const transaction = await createMidtransTransaction(
      props.grossAmount,
      formData.fullName,
      formData.email,
      formData.fullAddress,
      props.productId,
    );

    if (typeof transaction === "object") {
      console.log(transaction);

      // @ts-expect-error
      window.open(transaction.redirect_url, "_self");
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button size="lg" variant="outline" className="flex-1 bg-transparent">
          Buy Now
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Contact Information</DialogTitle>
          <DialogDescription>
            Please fill out your information to proceed with your order.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={(e) => handleInputChange("email", e.target.value)}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="fullName">Full Name</Label>
            <Input
              id="fullName"
              placeholder="Enter your full name"
              value={formData.fullName}
              onChange={(e) => handleInputChange("fullName", e.target.value)}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="phoneNumber">Phone Number</Label>
            <Input
              id="phoneNumber"
              type="tel"
              placeholder="Enter your phone number"
              value={formData.phoneNumber}
              onChange={(e) => handleInputChange("phoneNumber", e.target.value)}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="fullAddress">Full Address</Label>
            <Textarea
              id="fullAddress"
              placeholder="Enter your full address"
              className="min-h-[80px]"
              value={formData.fullAddress}
              onChange={(e) => handleInputChange("fullAddress", e.target.value)}
            />
          </div>
        </div>
        <DialogFooter>
          <Button type="button" onClick={handleProceedToPayment} className="w-full">
            Proceed to Payment
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
