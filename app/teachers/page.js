import { teachers } from "@/data/teachers";
import React from "react";

const TeachersPage = () => {
  return (
    <div dir="rtl" className="bg-gray-100 min-h-screen p-4 sm:p-6">
      <div className="max-w-4xl mx-auto bg-white p-4 sm:p-6 shadow-md rounded-lg">
        <h1 className="text-xl sm:text-2xl font-bold text-center text-gray-800">
          قائمة المدرسين
        </h1>
        <h2 className="text-base sm:text-lg font-bold text-center text-gray-800 mb-4 sm:mb-6">
          لجامعة اللطيف روبغنج، نراينغنج
        </h2>
        <div className="space-y-3 sm:space-y-4">
          {teachers.map((teacher, index) => (
            <div
              key={index}
              className="bg-blue-50 p-3 sm:p-4 rounded-lg shadow flex flex-col sm:flex-row justify-between items-start sm:items-center border-r-4 border-blue-500"
            >
              <div className="text-center sm:text-right w-full sm:w-auto">
                <h2 className="text-base sm:text-lg font-semibold text-gray-700">
                  {teacher.name}
                </h2>
                <p className="text-gray-600 text-sm sm:text-base">
                  {teacher.post}
                </p>
              </div>
              <p
                dir="ltr"
                className="text-blue-600 font-medium text-sm sm:text-base mt-2 sm:mt-0"
              >
                {teacher.contact}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TeachersPage;
