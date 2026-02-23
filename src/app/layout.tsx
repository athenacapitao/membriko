import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { redirect } from 'next/navigation';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Membriko - EPDM Solutions",
  description: "EPDM membrane specialists for the Portuguese market",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Check if we're at the root path
  // This is a hack - in production, the middleware should handle this
  // But for now, we'll redirect from the layout
  if (typeof window !== 'undefined' && window.location.pathname === '/') {
    redirect('/pt');
  }

  return (
    <html lang="en">
      <body className={`${inter.className} min-h-screen flex flex-col`}>
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
