import { Amiri } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

const notoSansArabic = Amiri({
  subsets: ["arabic"],
  weight: ["400", "700"],
  variable: "--font-arabic",
});

export const metadata = {
  title: "تعليمات - جامعة اللطيف",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ar">
      <body className={`${notoSansArabic.className} antialiased`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
