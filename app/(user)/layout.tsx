import "@/app/globals.css";
import NavbarComponent from "@/component/navbar/NavbarComponent";
import FooterComponent from "@/component/footer/FooterComponent";
import { Metadata } from "next";
import Loading from "./loading";
import { Suspense } from "react";
import SessionWrapper from "../SessionProvider";
import StoreProvider from "../StoreProvider";

export const metadata: Metadata = {
  title: "JINA Ecommerce Web",
  description:
    "CSR JINA Ecommerce Web is a web application for selling products.",
  openGraph: {
    title: "JINA Ecommerce Web",
    description:
      "JINA Ecommerce Web is a web application for selling products.",
    images: "https://sokea.online/media/brand_images/photo.jpg",
  },
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <SessionWrapper>
        <body className="h-screan flex flex-col justify-between w-full h-auto min-h-screen min-w-[300px] bg-write ">
          <StoreProvider>
          <header>
            <NavbarComponent />
          </header>

          <Suspense fallback={<Loading />}></Suspense>
          <main className="flex-grow">{children}</main>

          <FooterComponent />
          </StoreProvider>
        </body>
      </SessionWrapper>
    </html>
  );
}
