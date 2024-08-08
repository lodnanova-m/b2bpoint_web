import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Footer } from "./components/Footer/Footer";
import { Header } from "./components/Header/Header";
import { Contact } from "./components/Contact/Contact";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "B2Bpoint",
  description: "Todo: popis",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header></Header>
        {children}
        <Contact></Contact>
        <Footer></Footer>
      </body>
    </html>
  );
}
