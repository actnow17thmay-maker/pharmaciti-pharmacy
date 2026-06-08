import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { CartProvider } from "@/context/CartContext";

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Pharmaciti Pharmacy — Healthcare, Delivered to You",
  description:
    "Order medicines, wellness essentials and lab tests from Pharmaciti Pharmacy. Up to 25% off, wholesale & retail, free home delivery.",
};

export const viewport: Viewport = {
  themeColor: "#f65f43",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${jakarta.variable} h-full antialiased`}>
      <body className="min-h-full bg-white text-ink">
        <CartProvider>{children}</CartProvider>
      </body>
    </html>
  );
}
