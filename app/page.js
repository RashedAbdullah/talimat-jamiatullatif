import Department from "@/components/depertments";
import Link from "next/link";

const Home = () => {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-900">
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center text-center py-20 px-4 bg-blue-600 text-white">
        <h1 className="text-4xl md:text-6xl font-bold">جامعة اللطيف روبغنج</h1>
        <p className="mt-4 text-lg md:text-xl">
          جميع الأنشطة التعليمية للجامعة
        </p>
        <a
          target="_blank"
          href="https://www.jamiatullatif.com"
          className="mt-6 px-6 py-3 bg-white text-blue-600 font-semibold rounded-lg shadow-md hover:bg-gray-200 transition"
          whileHover={{ scale: 1.05 }}
        >
          تعرف علينا
        </a>
      </section>

      {/* Features Section */}
      <section className="py-16 px-6 max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
        <Department
          title="أسماء الأساتذة"
          desc="أسماء الأساتذة مع المسمى الوظيفي"
          href="/teachers"
        />
        <Department
          title="أسماء الطلاب"
          desc="أسماء الطلاب مع عنوانهم وصفوفهم"
          href="/students"
        />
        <Department
          title="نتائج الامتحانات"
          desc="إنشاء كشوف النتائج وبيانات الدرجات عبر الإنترنت."
        />
        <Department
          title="لوحة الإعلانات"
          desc="نشر جميع الإعلانات التعليمية بسهولة."
        />
        <Department title="بطاقة الدخول" desc="توليد بطاقة الدخول للطلاب" />
        <Department
          title="لوحة الإعلانات"
          desc="نشر جميع الإعلانات التعليمية بسهولة."
        />
      </section>
    </div>
  );
};

export default Home;
