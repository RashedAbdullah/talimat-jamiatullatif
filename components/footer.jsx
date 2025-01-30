import React from "react";

const Footer = () => {
  return (
    <footer className="text-center py-16 bg-gray-800 text-white">
      <h2 className="text-3xl md:text-4xl font-bold">
        اجعل حياتك التعليمية أسهل
      </h2>
      <p dir="rtl" className="mt-4 text-lg">
        استخدم منصتنا لتحديث نظام التعليم.
      </p>
      <a
        href="https://www.rashedabdullah.com"
        target="_blank"
        className="inline-block mt-6 px-6 py-3 bg-blue-500 font-semibold rounded-lg shadow-md hover:bg-blue-700 transition"
      >
        ابدأ الآن
      </a>
    </footer>
  );
};

export default Footer;
