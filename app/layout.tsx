import type { Metadata } from "next";
import "@/styles/globals.css";
import {TRPCReactProvider} from "@/server/trpc/react";
import {poppins} from "@/fonts";


export const metadata: Metadata = {
  title: "next15+tRPC",
  description: "Starter template for next15(app router) + tRPC",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
    <TRPCReactProvider>
      <body
        className={` ${poppins.className} antialiased`}
      >
        {children}
      </body>
    </TRPCReactProvider>
    </html>
  );
}
