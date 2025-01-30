import Link from "next/link";

const Department = ({ title, desc, href = "/" }) => {
  return (
    <Link href={href}>
      <div className="p-6 bg-white rounded-xl shadow-lg text-center">
        <h3 className="text-2xl font-semibold text-blue-600">{title}</h3>
        <p className="mt-2 text-gray-700">{desc}</p>
      </div>
    </Link>
  );
};

export default Department;
