import { students } from "@/data/students";
import React from "react";

const StudentsPage = () => {
  return (
    <div dir="rtl" className="bg-gray-100 min-h-screen p-4 sm:p-6">
      <div className="max-w-5xl mx-auto bg-white p-4 sm:p-6 shadow-md rounded-lg">
        <h1 className="text-xl sm:text-2xl font-bold text-center text-gray-800">
          قائمة الطلاب حسب الصف
        </h1>
        <h2 className="text-base sm:text-lg font-bold text-center text-gray-800 mb-4 sm:mb-6">
          لجامعة اللطيف روبغنج، نراينغنج
        </h2>
        <div className="space-y-4 sm:space-y-6">
          {Object.entries(students).map(([className, students], index) => (
            <div
              key={index}
              className="bg-blue-50 p-3 sm:p-4 rounded-lg shadow border-r-4 border-blue-500"
            >
              <h2 className="text-lg sm:text-xl font-semibold text-gray-700 mb-3 sm:mb-4 border-b pb-2">
                {className}
              </h2>
              <ul className="space-y-2">
                {students.map((student, i) => (
                  <li
                    key={i}
                    className="flex flex-col sm:flex-row justify-between text-gray-600 bg-white p-3 sm:p-4 rounded-md shadow"
                  >
                    <div>
                      <p className="text-base sm:text-lg font-bold text-gray-800">
                        {student.name}
                      </p>
                      <p className="text-sm sm:text-base text-gray-600">
                        والد: {student.father}
                      </p>
                      <p className="text-sm sm:text-base text-gray-600">
                        العنوان: {student.address}
                      </p>
                    </div>
                    <span className="text-blue-600 font-medium text-sm sm:text-base mt-2 sm:mt-0">
                      {student.id}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StudentsPage;
