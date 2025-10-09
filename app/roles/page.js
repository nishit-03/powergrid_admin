
// "use client";
// import { useState } from "react";
// import { roles as rolesData } from "../../data/roles";
// import {
//   BarChart,
//   Bar,
//   XAxis,
//   YAxis,
//   Tooltip,
//   CartesianGrid,
//   Legend,
// } from "recharts";

// export default function RolesPage() {
//   const categories = ["experience", "technical", "leadership", "projects", "communication"];

//   // Copy of roles with thresholds
//   const [roles, setRoles] = useState(
//     rolesData.map((role) => ({ ...role, thresholds: {} }))
//   );

//   const [expandedRole, setExpandedRole] = useState(null);

//   // Handle threshold input change
//   const handleThresholdChange = (roleId, category, value) => {
//     setRoles((prev) =>
//       prev.map((role) =>
//         role.id === roleId
//           ? { ...role, thresholds: { ...role.thresholds, [category]: Number(value) } }
//           : role
//       )
//     );
//   };

//   // Apply thresholds – just logs to console (replace with API call if needed)
//   const handleApply = (role) => {
//     console.log(`Thresholds applied for ${role.name}:`, role.thresholds);
//   };

//   // Summary metrics
//   const totalEmployees = roles.reduce((acc, r) => acc + r.employeeCount, 0);
//   const rolesBelowThreshold = roles.filter((role) =>
//     categories.some(
//       (cat) =>
//         role.thresholds[cat] && role.scores[cat].average < role.thresholds[cat]
//     )
//   ).length;

//   return (
//     <div className="p-6 bg-gray-50 min-h-screen">
//       <h1 className="text-3xl font-semibold text-blue-700 mb-6">Role Standards Dashboard</h1>

//       {/* Summary Cards */}
//       <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
//         <div className="bg-white shadow rounded-xl p-6 text-center">
//           <h2 className="text-lg font-semibold text-gray-700 mb-2">Total Roles</h2>
//           <p className="text-2xl font-bold">{roles.length}</p>
//         </div>
//         <div className="bg-white shadow rounded-xl p-6 text-center">
//           <h2 className="text-lg font-semibold text-gray-700 mb-2">Total Employees</h2>
//           <p className="text-2xl font-bold">{totalEmployees}</p>
//         </div>
//         <div className="bg-white shadow rounded-xl p-6 text-center">
//           <h2 className="text-lg font-semibold text-gray-700 mb-2">Roles Below Threshold</h2>
//           <p className="text-2xl font-bold text-red-600">{rolesBelowThreshold}</p>
//         </div>
//       </div>

//       {/* Roles List */}
//       <div className="space-y-4">
//         {roles.map((role) => {
//           // Prepare chart data
//           const chartData = categories.map((cat) => ({
//             category: cat.charAt(0).toUpperCase() + cat.slice(1),
//             Average: role.scores[cat].average,
//             Highest: role.scores[cat].highest,
//             Threshold: role.thresholds[cat] || 0,
//           }));

//           return (
//             <div key={role.id} className="bg-white shadow rounded-xl border border-gray-200">
//               {/* Role Header */}
//               <div
//                 className="flex justify-between items-center p-4 cursor-pointer hover:bg-gray-50"
//                 onClick={() =>
//                   setExpandedRole(expandedRole === role.id ? null : role.id)
//                 }
//               >
//                 <div>
//                   <h2 className="text-lg font-semibold text-gray-800">{role.name}</h2>
//                   <p className="text-sm text-gray-600">
//                     Role ID: {role.id} | Employees: {role.employeeCount}
//                   </p>
//                 </div>
//                 <div className="flex gap-2 flex-wrap">
//                   {categories.map((cat) => (
//                     <span
//                       key={cat}
//                       className={`text-sm font-medium px-2 py-1 rounded-full ${
//                         role.thresholds[cat] &&
//                         role.scores[cat].average < role.thresholds[cat]
//                           ? "bg-red-100 text-red-700"
//                           : "bg-gray-100 text-gray-700"
//                       }`}
//                     >
//                       {cat.charAt(0).toUpperCase() + cat.slice(1)}:{" "}
//                       {role.scores[cat].average}
//                     </span>
//                   ))}
//                 </div>
//               </div>

//               {/* Expanded Details */}
//               {expandedRole === role.id && (
//                 <div className="border-t border-gray-200 p-4 space-y-6 bg-gray-50">
//                   {/* Graph */}
//                   <div className="bg-white p-4 rounded-lg shadow-sm overflow-x-auto">
//                     <h3 className="text-lg font-semibold text-gray-800 mb-2">
//                       Category Scores
//                     </h3>
//                     <BarChart
//                       width={600}
//                       height={250}
//                       data={chartData}
//                       margin={{ top: 20, right: 30, left: 0, bottom: 5 }}
//                     >
//                       <CartesianGrid strokeDasharray="3 3" />
//                       <XAxis dataKey="category" />
//                       <YAxis />
//                       <Tooltip />
//                       <Legend />
//                       <Bar dataKey="Average" fill="#8884d8" />
//                       <Bar dataKey="Highest" fill="#82ca9d" />
//                       <Bar
//                         dataKey="Threshold"
//                         fill="#1e40af"
//                         shape={({ x, y, width, height, payload }) => {
//                           const color =
//                             payload.Average < payload.Threshold
//                               ? "#f87171"
//                               : "#1e40af";
//                           return <rect x={x} y={y} width={width} height={height} fill={color} />;
//                         }}
//                       />
//                     </BarChart>
//                   </div>

//                   {/* Threshold Inputs */}
//                   <div className="space-y-3">
//                     {categories.map((cat) => (
//                       <div key={cat} className="flex items-center gap-4">
//                         <span className="font-semibold w-32">
//                           {cat.charAt(0).toUpperCase() + cat.slice(1)}:
//                         </span>
//                         <span className="text-gray-700">
//                           Average: {role.scores[cat].average}
//                         </span>
//                         <span className="text-gray-700">
//                           Highest: {role.scores[cat].highest}
//                         </span>
//                         <input
//                           type="number"
//                           placeholder="Set Threshold"
//                           value={role.thresholds[cat] || ""}
//                           onChange={(e) =>
//                             handleThresholdChange(role.id, cat, e.target.value)
//                           }
//                           className="border border-gray-300 rounded-md p-1 w-32"
//                           min="0"
//                           max="10"
//                         />
//                       </div>
//                     ))}
//                     <button
//                       onClick={() => handleApply(role)}
//                       className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition mt-2"
//                     >
//                       Apply Thresholds
//                     </button>
//                   </div>
//                 </div>
//               )}
//             </div>
//           );
//         })}
//       </div>
//     </div>
//   );
// }

"use client";
import { useState } from "react";
import { roles as rolesData } from "../../data/roles";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  Legend,
} from "recharts";

export default function RolesPage() {
  const categories = ["experience", "technical", "leadership", "projects", "communication"];

  // Copy of roles with thresholds
  const [roles, setRoles] = useState(
    rolesData.map((role) => ({ ...role, thresholds: {} }))
  );

  const [expandedRole, setExpandedRole] = useState(null);

  // Handle threshold input change
  const handleThresholdChange = (roleId, category, value) => {
    setRoles((prev) =>
      prev.map((role) =>
        role.id === roleId
          ? { ...role, thresholds: { ...role.thresholds, [category]: Number(value) } }
          : role
      )
    );
  };

  // Apply thresholds
  const handleApply = (role) => {
    console.log(`Thresholds applied for ${role.name}:`, role.thresholds);

    // Close dropdown automatically
    setExpandedRole(null);
  };

  // Summary metrics
  const totalEmployees = roles.reduce((acc, r) => acc + r.employeeCount, 0);
  const rolesBelowThreshold = roles.filter((role) =>
    categories.some(
      (cat) =>
        role.thresholds[cat] && role.scores[cat].average < role.thresholds[cat]
    )
  ).length;

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <h1 className="text-3xl font-semibold text-blue-700 mb-6">Role Standards Dashboard</h1>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
        <div className="bg-white shadow rounded-xl p-6 text-center">
          <h2 className="text-lg font-semibold text-gray-700 mb-2">Total Roles</h2>
          <p className="text-2xl font-bold">{roles.length}</p>
        </div>
        <div className="bg-white shadow rounded-xl p-6 text-center">
          <h2 className="text-lg font-semibold text-gray-700 mb-2">Total Employees</h2>
          <p className="text-2xl font-bold">{totalEmployees}</p>
        </div>
        <div className="bg-white shadow rounded-xl p-6 text-center">
          <h2 className="text-lg font-semibold text-gray-700 mb-2">Roles Below Threshold</h2>
          <p className="text-2xl font-bold text-red-600">{rolesBelowThreshold}</p>
        </div>
      </div>

      {/* Roles List */}
      <div className="space-y-4">
        {roles.map((role) => {
          // Prepare chart data
          const chartData = categories.map((cat) => ({
            category: cat.charAt(0).toUpperCase() + cat.slice(1),
            Average: role.scores[cat].average,
            Highest: role.scores[cat].highest,
            Threshold: role.thresholds[cat] || 0,
          }));

          return (
            <div key={role.id} className="bg-white shadow rounded-xl border border-gray-200">
              {/* Role Header */}
              <div
                className="flex justify-between items-center p-4 cursor-pointer hover:bg-gray-50"
                onClick={() =>
                  setExpandedRole(expandedRole === role.id ? null : role.id)
                }
              >
                <div>
                  <h2 className="text-lg font-semibold text-gray-800">{role.name}</h2>
                  <p className="text-sm text-gray-600">
                    Role ID: {role.id} | Employees: {role.employeeCount}
                  </p>
                </div>
                <div className="flex gap-2 flex-wrap">
                  {categories.map((cat) => {
                    const threshold = role.thresholds[cat];
                    const average = role.scores[cat].average;

                    let badgeClass = "bg-gray-100 text-gray-700"; // default grey
                    if (threshold) {
                      badgeClass =
                        average < threshold
                          ? "bg-red-100 text-red-700"
                          : "bg-green-100 text-green-700";
                    }

                    return (
                      <span
                        key={cat}
                        className={`text-sm font-medium px-2 py-1 rounded-full ${badgeClass}`}
                      >
                        {cat.charAt(0).toUpperCase() + cat.slice(1)}: {average}
                      </span>
                    );
                  })}
                </div>
              </div>

              {/* Expanded Details */}
              {expandedRole === role.id && (
                <div className="border-t border-gray-200 p-4 space-y-6 bg-gray-50">
                  {/* Graph */}
                  <div className="bg-white p-4 rounded-lg shadow-sm overflow-x-auto">
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">
                      Category Scores
                    </h3>
                    <BarChart
                      width={600}
                      height={250}
                      data={chartData}
                      margin={{ top: 20, right: 30, left: 0, bottom: 5 }}
                    >
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="category" />
                      <YAxis />
                      <Tooltip />
                      <Legend />
                      <Bar dataKey="Average" fill="#8884d8" />
                      <Bar dataKey="Highest" fill="#82ca9d" />
                      <Bar
                        dataKey="Threshold"
                        fill="#1e40af"
                        shape={({ x, y, width, height, payload }) => {
                          const color =
                            payload.Average < payload.Threshold
                              ? "#f87171"
                              : "#1e40af";
                          return <rect x={x} y={y} width={width} height={height} fill={color} />;
                        }}
                      />
                    </BarChart>
                  </div>

                  {/* Threshold Inputs */}
                  <div className="space-y-3">
                    {categories.map((cat) => (
                      <div key={cat} className="flex items-center gap-4">
                        <span className="font-semibold w-32">
                          {cat.charAt(0).toUpperCase() + cat.slice(1)}:
                        </span>
                        <span className="text-gray-700">
                          Average: {role.scores[cat].average}
                        </span>
                        <span className="text-gray-700">
                          Highest: {role.scores[cat].highest}
                        </span>
                        <input
                          type="number"
                          placeholder="Set Threshold"
                          value={role.thresholds[cat] || ""}
                          onChange={(e) =>
                            handleThresholdChange(role.id, cat, e.target.value)
                          }
                          className="border border-gray-300 rounded-md p-1 w-32"
                          min="0"
                          max="10"
                        />
                      </div>
                    ))}
                    <button
                      onClick={() => handleApply(role)}
                      className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition mt-2"
                    >
                      Apply Thresholds
                    </button>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
