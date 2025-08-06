import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import SubNavbar from "@/components/SubNavbar";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Ramkrishna Eye Hospital | Expert Eye Care Services",
  description: "Leading eye hospital providing comprehensive eye care services including cataract surgery, retina treatment, glaucoma care, and vision correction.",
  keywords: "eye hospital, eye care, cataract surgery, retina treatment, glaucoma, vision correction, ophthalmology",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${poppins.variable} font-poppins antialiased`}
      >
        <SubNavbar />
        <Navbar />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
