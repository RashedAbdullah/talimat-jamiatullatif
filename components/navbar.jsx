import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <nav dir="rtl" className="bg-blue-600 text-white p-4 shadow-md">
      <div className="max-w-5xl mx-auto flex justify-between items-center">
        <Link href="/">
          <h1 className="text-lg font-bold">جامعة اللطيف</h1>
        </Link>
        <ul className="flex space-x-4 rtl:space-x-reverse text-sm">
          <li>
            <Link href="/" className="hover:underline">
              الرئيسية
            </Link>
          </li>
          <li>
            <Link href="/students" className="hover:underline">
              الطلاب
            </Link>
          </li>
          <li>
            <Link href="/teachers" className="hover:underline">
              المدرسين
            </Link>
          </li>
          <li>
            <Link href="/contact" className="hover:underline">
              اتصل بنا
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
