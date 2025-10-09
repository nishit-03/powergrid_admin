// "use client";
// import Link from "next/link";
// import { usePathname } from "next/navigation";

// const navItems = [
//   { name: "Dashboard", href: "/dashboard" },
//   { name: "Opportunities", href: "/opportunities" },
//   { name: "Employees", href: "/employees" },
//   { name: "Roles", href: "/roles" },
// ];

// export default function Sidebar() {
//   const pathname = usePathname();

//   return (
//     <aside className="fixed top-0 left-0 w-64 h-screen bg-white shadow-md flex flex-col p-6">
//       <h2 className="text-2xl font-bold text-blue-700 mb-10">Admin Panel</h2>
//       <nav className="flex flex-col gap-3 flex-grow">
//         {navItems.map((item) => {
//           const isActive = pathname === item.href;
//           return (
//             <Link
//               key={item.href}
//               href={item.href}
//               className={`flex items-center p-3 rounded-lg text-lg font-medium transition-all duration-200
//                 ${isActive ? "bg-blue-600 text-white shadow" : "text-gray-700 hover:bg-blue-100 hover:text-blue-700"}
//               `}
//             >
//               {item.name}
//             </Link>
//           );
//         })}
//       </nav>

//       {/* Optional footer / logout button */}
//       <div className="mt-auto pt-4 border-t border-gray-200">
//         <button className="w-full text-left text-gray-700 hover:text-blue-700 hover:bg-gray-100 p-2 rounded-lg transition">
//           Logout
//         </button>
//       </div>
//     </aside>
//   );
// }

"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { name: "Dashboard", href: "/dashboard" },
  { name: "Opportunities", href: "/opportunities" },
  { name: "Employees", href: "/employees" },
  { name: "Roles", href: "/roles" },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="fixed top-0 left-0 w-64 h-screen bg-white shadow-md flex flex-col p-6">
      <h2 className="text-2xl font-bold text-blue-700 mb-10">Admin Panel</h2>
      <nav className="flex flex-col gap-3 flex-grow">
        {navItems.map((item) => {
          const isActive = pathname === item.href;
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex items-center p-3 rounded-lg text-lg font-medium transition-all duration-200
                ${isActive ? "bg-blue-600 text-white shadow" : "text-gray-700 hover:bg-blue-100 hover:text-blue-700"}
              `}
            >
              {item.name}
            </Link>
          );
        })}
      </nav>

      {/* Logout Button */}
      <div className="mt-auto pt-4 border-t border-gray-200">
        <button className="w-full text-center bg-red-600 text-white hover:bg-red-700 p-2 rounded-lg transition font-medium">
          Logout
        </button>
      </div>
    </aside>
  );
}

