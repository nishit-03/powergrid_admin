"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { name: "Dashboard", href: "/dashboard" },
  { name: "Opportunities", href: "/opportunities" },
  { name: "Employees", href: "/employees" },
  { name: "Raise Bar", href: "/raise-bar" },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="w-64 bg-white shadow-md flex flex-col p-4">
      <h2 className="text-2xl font-bold text-blue-700 mb-8">Admin Panel</h2>
      <nav className="flex flex-col space-y-3">
        {navItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={`p-2 rounded-md text-lg ${
              pathname === item.href
                ? "bg-blue-600 text-white"
                : "hover:bg-blue-100 text-gray-700"
            }`}
          >
            {item.name}
          </Link>
        ))}
      </nav>
    </aside>
  );
}
