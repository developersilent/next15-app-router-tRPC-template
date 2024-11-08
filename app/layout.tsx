import type { Metadata } from "next";
import "@/styles/globals.css";
import {TRPCReactProvider} from "@/server/trpc/react";

// const poppins = Poppins({
//   weight: "500",
//   subsets: ["latin"],
// })

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
        className={`antialiased`}
      >
        {children}
      </body>
    </TRPCReactProvider>
    </html>
  );
}
