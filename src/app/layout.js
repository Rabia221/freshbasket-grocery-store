import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: {
    default: "FreshMart",
    template: "%s | FreshMart",
  },
  description:
    "FreshMart is a modern grocery e-commerce store for fresh groceries, vegetables, fruits, dairy products, beverages, snacks, and daily essentials.",
  keywords: ["grocery", "freshmart", "online grocery", "vegetables", "fruits", "ecommerce"],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
