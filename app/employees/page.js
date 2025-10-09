
// "use client";
// import React, { useState } from "react";
// import { employees as employeeData } from "../../data/employees";
// import EmployeeCard from "../../components/EmployeeCard";

// export default function Employees() {
//   const [selectedEmployee, setSelectedEmployee] = useState(null);

//   return (
//     <div className="p-6 bg-gray-50 min-h-screen">
//       <h1 className="text-3xl font-semibold text-blue-700 mb-6">Employee Directory</h1>

//       {/* Employee Grid */}
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//         {employeeData.map((emp, idx) => (
//           <div
//             key={idx}
//             className="cursor-pointer"
//             onClick={() => setSelectedEmployee(emp)}
//           >
//             <EmployeeCard {...emp} />
//           </div>
//         ))}
//       </div>

//       {/* Detailed Employee Modal */}
//       {selectedEmployee && (
//         <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50">
//           <div className="bg-white rounded-xl shadow-xl p-6 w-full max-w-3xl relative overflow-y-auto max-h-[90vh]">
//             {/* Close Button */}
//             <button
//               onClick={() => setSelectedEmployee(null)}
//               className="absolute top-3 right-3 text-gray-500 hover:text-gray-700 text-lg font-bold"
//             >
//               ✕
//             </button>

//             {/* Basic Info */}
//             <h2 className="text-2xl font-semibold text-blue-700 mb-3">
//               {selectedEmployee.name}
//             </h2>
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mb-4 text-gray-700">
//               <div>
//                 <span className="font-semibold">Employee ID:</span> {selectedEmployee.id}
//               </div>
//               <div>
//                 <span className="font-semibold">Department:</span> {selectedEmployee.department}
//               </div>
//               <div>
//                 <span className="font-semibold">Designation:</span> {selectedEmployee.designation}
//               </div>
//               <div>
//                 <span className="font-semibold">Reporting Manager:</span> {selectedEmployee.manager}
//               </div>
//               <div>
//                 <span className="font-semibold">Years of Experience:</span> {selectedEmployee.experience}
//               </div>
//               {selectedEmployee.contact && (
//                 <div>
//                   <span className="font-semibold">Contact:</span> {selectedEmployee.contact}
//                 </div>
//               )}
//               {selectedEmployee.location && (
//                 <div>
//                   <span className="font-semibold">Location:</span> {selectedEmployee.location}
//                 </div>
//               )}
//             </div>

//             {/* Graph Section */}
//             {selectedEmployee.graphs && selectedEmployee.graphs.length > 0 && (
//               <div className="mb-4">
//                 <h3 className="text-lg font-semibold text-gray-800 mb-2">Graphs</h3>
//                 <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                   {selectedEmployee.graphs.map((GraphComponent, idx) => (
//                     <div key={idx} className="bg-gray-50 p-3 rounded-lg shadow-sm">
//                       <GraphComponent />
//                     </div>
//                   ))}
//                 </div>
//               </div>
//             )}

//             {/* Mentor Review */}
//             {selectedEmployee.mentorReview && (
//               <div className="mb-4">
//                 <h3 className="text-lg font-semibold text-gray-800 mb-2">Mentor Review</h3>
//                 <p className="text-gray-700">{selectedEmployee.mentorReview}</p>
//               </div>
//             )}

//             {/* Achievements */}
//             {selectedEmployee.achievements && (
//               <div className="mb-4">
//                 <h3 className="text-lg font-semibold text-gray-800 mb-2">Achievements</h3>
//                 <ul className="list-disc pl-5 text-gray-700">
//                   {selectedEmployee.achievements.map((ach, idx) => (
//                     <li key={idx}>{ach}</li>
//                   ))}
//                 </ul>
//               </div>
//             )}

//             {/* Career Path */}
//             {selectedEmployee.careerPath && (
//               <div className="mb-4">
//                 <h3 className="text-lg font-semibold text-gray-800 mb-2">Career Path</h3>
//                 <ul className="list-disc pl-5 text-gray-700">
//                   {selectedEmployee.careerPath.map((step, idx) => (
//                     <li key={idx}>{step}</li>
//                   ))}
//                 </ul>
//               </div>
//             )}
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }

"use client";
import React, { useState } from "react";
import { employees as employeeData } from "../../data/employees";
import EmployeeCard from "../../components/EmployeeCard";

export default function Employees() {
  const [selectedEmployee, setSelectedEmployee] = useState(null);

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <h1 className="text-3xl font-semibold text-blue-700 mb-6">Employee Directory</h1>

      {/* Employee Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {employeeData.map((emp, idx) => (
          <div
            key={idx}
            className="cursor-pointer"
            onClick={() => setSelectedEmployee(emp)}
          >
            <EmployeeCard {...emp} />
          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedEmployee && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/40 z-50 p-4">
          <div className="bg-white rounded-xl shadow-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto relative border border-blue-100">
            {/* Close Button */}
            <button
              onClick={() => setSelectedEmployee(null)}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 text-xl font-bold"
            >
              ✕
            </button>

            {/* Header */}
            <div className="bg-blue-50 rounded-t-xl p-6 border-b border-blue-100">
              <h2 className="text-2xl font-semibold text-blue-700">
                {selectedEmployee.name}
              </h2>
              <p className="text-gray-600 mt-1">
                {selectedEmployee.designation} | {selectedEmployee.department}
              </p>
            </div>

            <div className="p-6 space-y-6">
              {/* Basic Info */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-700">
                <div>
                  <span className="font-semibold">Employee ID:</span> {selectedEmployee.id}
                </div>
                <div>
                  <span className="font-semibold">Reporting Manager:</span> {selectedEmployee.manager}
                </div>
                <div>
                  <span className="font-semibold">Years of Experience:</span> {selectedEmployee.experience}
                </div>
                {selectedEmployee.contact && (
                  <div>
                    <span className="font-semibold">Contact:</span> {selectedEmployee.contact}
                  </div>
                )}
                {selectedEmployee.location && (
                  <div>
                    <span className="font-semibold">Location:</span> {selectedEmployee.location}
                  </div>
                )}
              </div>

              {/* Graphs */}
              {selectedEmployee.graphs && selectedEmployee.graphs.length > 0 && (
                <div className="bg-gray-50 rounded-xl p-4 shadow-sm">
                  <h3 className="text-lg font-semibold text-gray-800 mb-3">Performance Graphs</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {selectedEmployee.graphs.map((GraphComponent, idx) => (
                      <div
                        key={idx}
                        className="bg-white p-4 rounded-lg shadow-md flex justify-center"
                      >
                        {/* Increase graph size */}
                        <GraphComponent width={350} height={200} />
                      </div>
                    ))}
                  </div>
                </div>
              )}


              {/* Mentor Review */}
              {selectedEmployee.mentorReview && (
                <div className="bg-gray-50 rounded-xl p-4 shadow-sm">
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">Mentor Review</h3>
                  <p className="text-gray-700">{selectedEmployee.mentorReview}</p>
                </div>
              )}

              {/* Achievements */}
              {selectedEmployee.achievements && (
                <div className="bg-gray-50 rounded-xl p-4 shadow-sm">
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">Achievements</h3>
                  <ul className="list-disc pl-5 text-gray-700">
                    {selectedEmployee.achievements.map((ach, idx) => (
                      <li key={idx}>{ach}</li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Career Path */}
              {selectedEmployee.careerPath && (
                <div className="bg-gray-50 rounded-xl p-4 shadow-sm">
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">Career Path</h3>
                  <ul className="list-disc pl-5 text-gray-700">
                    {selectedEmployee.careerPath.map((step, idx) => (
                      <li key={idx}>{step}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
