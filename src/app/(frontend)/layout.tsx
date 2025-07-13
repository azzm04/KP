import React from "react";
import "../../styles/globals.css";
import { Navbar } from "@/components/Navbar";
import { Book, Sunset, Trees, Zap } from "lucide-react";
import { authorizeUser } from "@/lib/actions/authorize-user";

const demoData = {
  logo: {
    url: "https://www.shadcnblocks.com",
    src: "https://www.shadcnblocks.com/images/block/block-1.svg",
    alt: "blocks for shadcn/ui",
    title: "E-Commerce",
  },
  menu: [
    {
      title: "Home",
      url: "/",
    },
    {
      title: "Resources",
      url: "#",
      items: [
        {
          title: "Contact Us",
          description: "We are here to help you with any questions you have",
          icon: <Sunset className="size-5 shrink-0" />,
          url: "https://wa.me/+6281331437810",
        },
        {
          title: "Terms of Service",
          description: "Our terms and conditions for using our services",
          icon: <Book className="size-5 shrink-0" />,
          url: "/terms",
        },
      ],
    },
    {
      title: "Billing",
      url: "/billing",
    },
    {
      title: "Blog",
      url: "/blogs",
    },
  ],
  mobileExtraLinks: [
    { name: "Press", url: "/press" },
    { name: "Contact", url: "/contact" },
    { name: "Imprint", url: "/imprint" },
    { name: "Sitemap", url: "/sitemap" },
  ],
  auth: {
    login: { text: "Log in", url: "/auth/login" },
    signup: { text: "Sign up", url: "/auth/register" },
  },
};

export default async function RootLayout(props: { children: React.ReactNode }) {
  const { children } = props;
  const user = await authorizeUser();

  return (
    <html lang="en">
      <head>
        {/* Tambahkan baris ini */}
        <link
          href="https://cdn.jsdelivr.net/npm/remixicon@4.3.0/fonts/remixicon.css"
          rel="stylesheet"
        />
      </head>
      <body>
        <Navbar {...demoData} user={user} />
        <main>{children}</main>
      </body>
    </html>
  );
}

/* 
1. Buat form login
2. Tampilkan di /auth/login
3. Terima input email & password
4. Kalau klik tombol, console.log kedua data itu
*/
