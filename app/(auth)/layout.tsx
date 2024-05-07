import "@/app/globals.css";
import { SessionProvider } from "next-auth/react";
import React, { Children } from "react";

export default function Authlayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html>
      <SessionProvider>
        <body>{children}</body>
      </SessionProvider>
    </html>
  );
}
