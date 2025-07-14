"use client";

import React, { useState } from "react";
import Google from "../collections/google-line.svg";

type Props = {
  buttonClasses: string;
  buttonForGFT: string;
};

export default function SignInForm({ buttonClasses, buttonForGFT }: Props) {
  const [rememberMe, setRememberMe] = useState(false);

  return (
    <form className="w-full max-w-md mx-auto px-4 sm:px-6 md:px-8 space-y-4">
      <h2 className="text-2xl font-bold text-cyan-600 text-center">Welcome Back</h2>
      <p className="text-sm text-gray-500 text-center">Sign in to your account</p>

      <input
        type="email"
        placeholder="Example@gmail.com"
        className="w-full p-3 rounded-lg bg-teal-100 focus:outline-none"
        required
      />
      <input
        type="password"
        placeholder="Your password"
        className="w-full p-3 rounded-lg bg-teal-100 focus:outline-none"
        required
      />

      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between text-sm gap-2">
        <label className="flex items-center gap-2">
          <input type="checkbox" checked={rememberMe} onChange={() => setRememberMe(!rememberMe)} />
          <span>Remember me</span>
        </label>
        <a href="#" className="text-cyan-600 hover:underline text-right sm:text-left">
          Forgot password?
        </a>
      </div>

      <button
        type="submit"
        className="w-full py-3 rounded-lg bg-cyan-500 text-white font-medium hover:bg-cyan-600 transition-colors"
      >
        Sign in
      </button>

      <div className="flex items-center justify-center gap-4 my-2">
        <hr className="flex-grow border-gray-300" />
        <span className="text-sm text-gray-500 whitespace-nowrap">Or continue with</span>
        <hr className="flex-grow border-gray-300" />
      </div>

      <div className="flex justify-center gap-4 flex-wrap">
        <button
          type="button"
          className="w-full flex items-center justify-center bg-white border border-gray-300 text-gray-700 font-medium py-3 px-4 rounded-lg hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 transition duration-300"
        >
          <img
            src="https://www.google.com/favicon.ico"
            alt="Google icon"
            className="w-5 h-5 mr-3"
          />{" "}
          Sign Up With Google
        </button>
      </div>
    </form>
  );
}
