import type { Metadata } from "next";
import { Poppins} from "next/font/google";
import "./globals.css";
import Navbar from "@/components//nav-foot/Navbar";
import Footer from "@/components/nav-foot/Footer";

const inter = Poppins({ subsets: ["latin"],weight: ["100","200","300","400","500","600","700","800","900"] });

export const metadata: Metadata = {
  title: "Study in Maryland",
  description: "Study in the heart of the world",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
