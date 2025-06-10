// src/app/layout.tsx

import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Nunito } from 'next/font/google'
import { AuthProvider } from "./context/authContext";
import ClientLayout from "./components/clientLayout";

const nunito = Nunito({
  subsets: ['latin'],
  weight: ['300', '400', '600', '700'],
  variable: '--font-nunito',
  display: 'swap',
})

export const metadata: Metadata = {
  title: "MployUs Recruitment",
  description: "MployUs Recruitment",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <AuthProvider>
      <html lang="en">
         <body className={`${nunito.variable} antialiased`}>
          <ClientLayout>{children}</ClientLayout>
        </body>
      </html>
    </AuthProvider>
  );
}