import type { Metadata } from "next";
import { Geist, Geist_Mono, Merriweather, Big_Shoulders_Stencil_Text } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const merriweather = Merriweather({
  variable: "--font-merriweather",
  subsets: ["latin"],
  weight: ["300", "400", "700", "900"],
  display: "swap",
  preload: true,
});

const bigShoulders = Big_Shoulders_Stencil_Text({
  variable: "--font-family-brand",
  subsets: ["latin"],
  weight: ["400", "700", "900"],
  display: "swap",
  preload: true,
});

export const metadata: Metadata = {
  title: "Chiến thắng Điện Biên Phủ",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${merriweather.variable} ${bigShoulders.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
