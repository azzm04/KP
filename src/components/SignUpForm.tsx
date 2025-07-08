"use client";

import React, { useState } from "react";
import { Label } from "@/components/ui/label";

type Props = {
  buttonClasses: string;
  buttonForGFT: string;
};

export default function SignUpForm({ buttonClasses, buttonForGFT }: Props) {
  const [agree, setAgree] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fullName, setFullName] = useState("");
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!agree) {
      alert("You must agree to the terms and conditions to create an account.");
      return;
    }
    // Handle form submission logic here
    alert("Account created successfully!");
  };
  return (
    <form className="w-full max-w-md space-y-4">
      <h2 className="text-2xl font-bold text-cyan-600 text-center">Create Account</h2>
      <p className="text-sm text-gray-500 text-center">Sign up to get started</p>

      <input
        type="text"
        placeholder="Full name"
        className="w-full p-3 rounded-lg bg-teal-100 focus:outline-none"
        required
        onChange={(e) => setFullName(e.target.value)}
      />
      <input
        type="email"
        placeholder="Email address"
        className="w-full p-3 rounded-lg bg-teal-100 focus:outline-none"
        required
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        className="w-full p-3 rounded-lg bg-teal-100 focus:outline-none"
        required
        onChange={(e) => setPassword(e.target.value)}
      />

      <label className="flex items-start text-sm gap-2">
        <input type="checkbox" checked={agree} onChange={() => setAgree(!agree)} className="mt-1" />
        <span>
          I agree to the{" "}
          <button
            type="button"
            className="text-cyan-600 underline cursor-pointer"
            onClick={() =>
              alert(
                `User Responsibilities
By using our website or app, you agree to comply with all applicable laws and regulations, and to not use our services for any unlawful or unauthorized purposes.

Intellectual Property
All content and materials on our website or app, including but not limited to text, graphics, logos, and software, are the property of Acme Inc and are protected by copyright, trademark, and other intellectual property laws.

Dispute Resolution
Any disputes arising out of or relating to these terms of service shall be resolved through binding arbitration in accordance with the rules of the American Arbitration Association.`,
              )
            }
          >
            Terms of Service
          </button>{" "}
          and{" "}
          <button
            type="button"
            className="text-cyan-600 underline cursor-pointer"
            onClick={() =>
              alert(
                `User Responsibilities
By using our website or app, you agree to comply with all applicable laws and regulations, and to not use our services for any unlawful or unauthorized purposes.

Intellectual Property
All content and materials on our website or app, including but not limited to text, graphics, logos, and software, are the property of Acme Inc and are protected by copyright, trademark, and other intellectual property laws.

Dispute Resolution
Any disputes arising out of or relating to these terms of service shall be resolved through binding arbitration in accordance with the rules of the American Arbitration Association.`,
              )
            }
          >
            Privacy Policy
          </button>
        </span>
      </label>

      <button
        onClick={() => {
          console.log({ fullName, email, password, agree });
        }}
        type="submit"
        className="w-full py-3 rounded-lg bg-cyan-500 text-white font-medium "
      >
        Create Account
      </button>

      <div className="flex items-center justify-center gap-4 my-2">
        <hr className="flex-grow border-gray-300" />
        <span className="text-sm text-gray-500">Or sign up with</span>
        <hr className="flex-grow border-gray-300" />
      </div>

      <div className="flex justify-center gap-4">
        <button
          type="button"
          className="w-full flex items-center justify-center bg-white border border-gray-300 text-gray-700 font-medium py-3 px-4 rounded-lg hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 transition duration-300"
        >
          <img
            src="https://www.google.com/favicon.ico"
            alt="Google icon"
            className="w-5 h-5 mr-3"
          />{" "}
          Sign In With Google
        </button>
      </div>
    </form>
  );
}
