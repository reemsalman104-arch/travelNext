import type { Metadata } from "next";

import "./globals.css";
import { ReactNode } from "react";

import localFont from "next/font/local";
import ResponsiveNav from "./components/Home/Navbar/ResponsiveNav";
import Footer from "./components/Home/footer/Footer";
import ScrolltoTop from "./components/Helper/ScrolltoTop";


const poppins = localFont({
  src: [
    {
      path: "../public/fonts/poppins/Poppins-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/poppins/Poppins-SemiBold.ttf",
      weight: "600",
      style: "normal",
    },
  ],
  variable: "--font-poppins", // هذا لتفعيل الـ variable font لو كنت تريده
});
export const metadata: Metadata = {
  title: "Travel for you",
  description: "Travel landing page",
};
type Props = {children : ReactNode;}

export default function RootLayout({ children } : Props) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <ResponsiveNav/>
        {children}
       <Footer/>
       <ScrolltoTop/>







      </body>
    </html>
  );
}
