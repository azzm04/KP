"use client";

import type React from "react";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import { loginUser } from "@/lib/actions/login-user";

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const user = await loginUser(email, password);

    console.log(user);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 p-4">
      <Card className="w-full max-w-md">
        <CardHeader className="text-center space-y-2">
          <CardTitle className="text-2xl font-bold text-gray-900">Sign In</CardTitle>
          <CardDescription className="text-gray-600">
            Enter your credentials to access your account
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email" className="text-sm font-medium text-gray-700">
                  Email
                </Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="Example@gmail.com"
                  className="bg-blue-50 border-blue-100 focus:border-blue-300 focus:ring-blue-200"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="password" className="text-sm font-medium text-gray-700">
                  Password
                </Label>
                <Input
                  id="password"
                  type="password"
                  placeholder="••••••••"
                  className="bg-blue-50 border-blue-100 focus:border-blue-300 focus:ring-blue-200"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
            </div>

            <Button
              type="submit"
              className="w-full bg-gray-900 hover:bg-gray-800 text-white py-3 rounded-lg font-medium"
            >
              Sign In
            </Button>
          </form>

          <div className="text-center">
            <span className="text-gray-600 text-sm">
              {"Don't have an account? "}
              <Link href="/register" className="text-gray-900 hover:underline font-medium">
                Create Account
              </Link>
            </span>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
