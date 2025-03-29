import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "EnergyMAESTRO | EV Charging Solutions",
  description: "Premium EV charging solutions for businesses. Power Up 32 delivers reliable, efficient charging experiences for your customers and fleet.",
  keywords: "EV charging, electric vehicle, charging stations, business solutions, Power Up 32",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} font-sans antialiased bg-white`} suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
