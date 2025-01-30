"use client";
import { useReactToPrint } from "react-to-print";
import { useRef } from "react";

const ExamCard = () => {
  const printRef = useRef(null);

  // Sample student data
  const students = [
    { id: "101", name: "أحمد علي", father: "علي حسن", class: "الثالث" },
    { id: "102", name: "محمد سعيد", father: "سعيد عمر", class: "الثالث" },
    { id: "103", name: "خالد محمود", father: "محمود يوسف", class: "الثالث" },
    { id: "104", name: "يوسف حسن", father: "حسن عبد الله", class: "الثالث" },
  ];

  // React to print settings
  const handlePrint = useReactToPrint({
    contentRef: printRef, // Use contentRef to reference the content to print
    documentTitle: "بطاقة الدخول",
    removeAfterPrint: true,
    onAfterPrint: () => console.log("✅ PDF Generated Successfully!"),
  });

  return (
    <div
      className="flex flex-col items-center p-6 bg-gray-100 min-h-screen"
      dir="rtl"
    >
      {/* Content to print */}
      <div
        ref={printRef} // Ensure the content is correctly assigned here
        className="w-full grid grid-cols-1 md:grid-cols-2 gap-6"
      >
        {students.map((student) => (
          <div
            key={student.id}
            className="bg-white p-6 shadow-lg rounded-lg border-r-4 border-blue-500 w-96"
          >
            <h2 className="text-xl font-bold text-center text-gray-800 mb-4">
              بطاقة الدخول
            </h2>
            <div className="text-gray-700 text-lg">
              <p>
                <span className="font-semibold">اسم الطالب: </span>
                {student.name}
              </p>
              <p>
                <span className="font-semibold">اسم الأب: </span>
                {student.father}
              </p>
              <p>
                <span className="font-semibold">الصف: </span>
                {student.class}
              </p>
              <p>
                <span className="font-semibold">رقم الهوية: </span>
                {student.id}
              </p>
            </div>
            <p className="text-center text-sm text-gray-500 mt-4">
              جامعة اللطيف - روبغنج
            </p>
          </div>
        ))}
      </div>

      {/* Print button */}
      <button
        onClick={handlePrint}
        className="mt-4 px-6 py-2 bg-blue-600 text-white rounded shadow hover:bg-blue-700"
      >
        تحميل PDF
      </button>
    </div>
  );
};

export default ExamCard;
