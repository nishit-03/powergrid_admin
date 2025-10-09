"use client";

import React from "react";
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
} from "recharts";

const roleData = [
  { name: "Engineers", value: 35 },
  { name: "Managers", value: 20 },
  { name: "Supervisors", value: 15 },
  { name: "Technicians", value: 10 },
  { name: "Interns", value: 5 },
];

const workshopAttendance = [
  { month: "Jan", attendees: 40 },
  { month: "Feb", attendees: 60 },
  { month: "Mar", attendees: 55 },
  { month: "Apr", attendees: 70 },
  { month: "May", attendees: 65 },
  { month: "Jun", attendees: 80 },
];

const skillGapTrend = [
  { month: "Jan", gapScore: 7.5 },
  { month: "Feb", gapScore: 6.8 },
  { month: "Mar", gapScore: 6.2 },
  { month: "Apr", gapScore: 5.8 },
  { month: "May", gapScore: 5.1 },
  { month: "Jun", gapScore: 4.5 },
];

const topPerformers = [
  { department: "Engineering", name: "Amit Verma", score: 95 },
  { department: "Operations", name: "Priya Nair", score: 92 },
  { department: "Maintenance", name: "Ravi Kumar", score: 90 },
  { department: "HR", name: "Sneha Patel", score: 88 },
];

const upcomingWorkshops = [
  { title: "Safety & Compliance Workshop", date: "12 Oct 2025" },
  { title: "Advanced Power Systems", date: "25 Oct 2025" },
];

const trainingPrograms = [
  { title: "Leadership Development Program", date: "5 Nov 2025" },
  { title: "AI in PowerGrid Operations", date: "18 Nov 2025" },
];

const COLORS = ["#2563EB", "#00C49F", "#FFBB28", "#FF8042", "#AA336A"]; // primary blue + accents

const DashboardPage = () => {
  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-4xl font-bold text-gray-800">
          PowerGrid Employee Analytics Dashboard
        </h1>
        
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        {[
          { title: "Total Employees", value: 85 },
          { title: "Workshops Conducted", value: 15 },
          { title: "Active Training Programs", value: 6 },
        ].map((item, idx) => (
          <div
            key={idx}
            className="bg-white p-6 rounded-2xl shadow-md border-t-4 border-blue-500 text-center hover:shadow-lg transition"
          >
            <h2 className="text-gray-500 text-sm uppercase mb-1 tracking-wide">
              {item.title}
            </h2>
            <p className="text-3xl font-bold text-gray-800">{item.value}</p>
          </div>
        ))}
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
        {/* Role Distribution */}
        <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition border border-blue-100">
          <h2 className="text-lg font-semibold mb-4 text-blue-700">
            Role Distribution
          </h2>
          <div className="h-72">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={roleData}
                  cx="50%"
                  cy="50%"
                  outerRadius={80}
                  dataKey="value"
                  label={({ name, percent }) =>
                    `${name}: ${(percent * 100).toFixed(0)}%`
                  }
                >
                  {roleData.map((entry, index) => (
                    <Cell key={index} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Workshop Attendance */}
        <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition border border-blue-100">
          <h2 className="text-lg font-semibold mb-4 text-blue-700">
            Workshop Attendance
          </h2>
          <div className="h-72">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={workshopAttendance}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line
                  type="monotone"
                  dataKey="attendees"
                  stroke="#2563EB"
                  strokeWidth={3}
                  dot={{ r: 4 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Skill Gap Trends */}
        <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition border border-blue-100">
          <h2 className="text-lg font-semibold mb-4 text-blue-700">
            Skill Gap Trends
          </h2>
          <div className="h-72">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={skillGapTrend}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis domain={[0, 10]} />
                <Tooltip />
                <Legend />
                <Line
                  type="monotone"
                  dataKey="gapScore"
                  stroke="#3B82F6"
                  strokeWidth={3}
                  dot={{ r: 4 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      {/* Top Performers */}
      <div className="bg-white p-6 rounded-2xl shadow-md mb-10 hover:shadow-lg transition border-t-4 border-blue-500">
        <h2 className="text-2xl font-semibold mb-6 text-gray-800">
          Top Performing Employees by Department
        </h2>
        <div className="overflow-hidden rounded-xl border border-gray-200">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-blue-50 text-blue-800 uppercase text-sm font-semibold tracking-wider">
              <tr>
                <th className="py-3 px-6 text-left">Department</th>
                <th className="py-3 px-6 text-left">Name</th>
                <th className="py-3 px-6 text-right">Performance Score</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100 text-gray-800">
              {topPerformers.map((p, index) => (
                <tr
                  key={index}
                  className="hover:bg-blue-50/60 transition duration-150 ease-in-out"
                >
                  <td className="py-3 px-6 font-medium">{p.department}</td>
                  <td className="py-3 px-6">{p.name}</td>
                  <td className="py-3 px-6 text-right font-semibold text-blue-600">
                    {p.score}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Upcoming Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Workshops */}
        <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition border-t-4 border-blue-500">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">
            Upcoming Workshops
          </h2>
          <div className="space-y-3">
            {upcomingWorkshops.map((workshop, index) => (
              <div
                key={index}
                className="flex items-center justify-between bg-blue-50 p-4 rounded-lg hover:bg-blue-100 transition"
              >
                <span className="font-medium text-blue-800">{workshop.title}</span>
                <span className="text-sm text-gray-700">{workshop.date}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Training Programs */}
        <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition border-t-4 border-blue-500">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">
            Upcoming Training Programs
          </h2>
          <div className="space-y-3">
            {trainingPrograms.map((program, index) => (
              <div
                key={index}
                className="flex items-center justify-between bg-blue-50 p-4 rounded-lg hover:bg-blue-100 transition"
              >
                <span className="font-medium text-blue-800">{program.title}</span>
                <span className="text-sm text-gray-700">{program.date}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;


// "use client";

// import React from "react";
// import {
//   PieChart,
//   Pie,
//   Cell,
//   Tooltip,
//   LineChart,
//   Line,
//   XAxis,
//   YAxis,
//   CartesianGrid,
//   Legend,
//   ResponsiveContainer,
// } from "recharts";

// const roleData = [
//   { name: "Engineers", value: 35 },
//   { name: "Managers", value: 20 },
//   { name: "Supervisors", value: 15 },
//   { name: "Technicians", value: 10 },
//   { name: "Interns", value: 5 },
// ];

// const workshopAttendance = [
//   { month: "Jan", attendees: 40 },
//   { month: "Feb", attendees: 60 },
//   { month: "Mar", attendees: 55 },
//   { month: "Apr", attendees: 70 },
//   { month: "May", attendees: 65 },
//   { month: "Jun", attendees: 80 },
// ];

// const skillGapTrend = [
//   { month: "Jan", gapScore: 7.5 },
//   { month: "Feb", gapScore: 6.8 },
//   { month: "Mar", gapScore: 6.2 },
//   { month: "Apr", gapScore: 5.8 },
//   { month: "May", gapScore: 5.1 },
//   { month: "Jun", gapScore: 4.5 },
// ];

// const topPerformers = [
//   { department: "Engineering", name: "Amit Verma", score: 95 },
//   { department: "Operations", name: "Priya Nair", score: 92 },
//   { department: "Maintenance", name: "Ravi Kumar", score: 90 },
//   { department: "HR", name: "Sneha Patel", score: 88 },
// ];

// const upcomingWorkshops = [
//   { title: "Safety & Compliance Workshop", date: "12 Oct 2025" },
//   { title: "Advanced Power Systems", date: "25 Oct 2025" },
// ];

// const trainingPrograms = [
//   { title: "Leadership Development Program", date: "5 Nov 2025" },
//   { title: "AI in PowerGrid Operations", date: "18 Nov 2025" },
// ];

// const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "#AA336A"];

// const DashboardPage = () => {
//   return (
//     <div className="p-6 bg-gray-50 min-h-screen">
//       <h1 className="text-4xl font-bold mb-8 text-gray-800">
//         PowerGrid Employee Analytics Dashboard
//       </h1>

//       {/* Summary Cards */}
//       <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
//         {[
//           { title: "Total Employees", value: 85 },
//           { title: "Workshops Conducted", value: 15 },
//           { title: "Active Training Programs", value: 6 },
//         ].map((item, idx) => (
//           <div
//             key={idx}
//             className="bg-white p-6 rounded-2xl shadow-md text-center hover:shadow-lg transition"
//           >
//             <h2 className="text-gray-500 text-sm uppercase mb-1 tracking-wide">
//               {item.title}
//             </h2>
//             <p className="text-3xl font-bold text-gray-800">{item.value}</p>
//           </div>
//         ))}
//       </div>

//       {/* Charts Section */}
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
//         {/* Role Distribution */}
//         <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition">
//           <h2 className="text-lg font-semibold mb-4 text-gray-800">
//             Role Distribution
//           </h2>
//           <div className="h-72">
//             <ResponsiveContainer width="100%" height="100%">
//               <PieChart>
//                 <Pie
//                   data={roleData}
//                   cx="50%"
//                   cy="50%"
//                   outerRadius={80}
//                   dataKey="value"
//                   label={({ name, percent }) =>
//                     `${name}: ${(percent * 100).toFixed(0)}%`
//                   }
//                 >
//                   {roleData.map((entry, index) => (
//                     <Cell key={index} fill={COLORS[index % COLORS.length]} />
//                   ))}
//                 </Pie>
//                 <Tooltip />
//               </PieChart>
//             </ResponsiveContainer>
//           </div>
//         </div>

//         {/* Workshop Attendance */}
//         <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition">
//           <h2 className="text-lg font-semibold mb-4 text-gray-800">
//             Workshop Attendance
//           </h2>
//           <div className="h-72">
//             <ResponsiveContainer width="100%" height="100%">
//               <LineChart data={workshopAttendance}>
//                 <CartesianGrid strokeDasharray="3 3" />
//                 <XAxis dataKey="month" />
//                 <YAxis />
//                 <Tooltip />
//                 <Legend />
//                 <Line
//                   type="monotone"
//                   dataKey="attendees"
//                   stroke="#00C49F"
//                   strokeWidth={3}
//                   dot={{ r: 4 }}
//                 />
//               </LineChart>
//             </ResponsiveContainer>
//           </div>
//         </div>

//         {/* Skill Gap Trends */}
//         <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition">
//           <h2 className="text-lg font-semibold mb-4 text-gray-800">
//             Skill Gap Trends
//           </h2>
//           <div className="h-72">
//             <ResponsiveContainer width="100%" height="100%">
//               <LineChart data={skillGapTrend}>
//                 <CartesianGrid strokeDasharray="3 3" />
//                 <XAxis dataKey="month" />
//                 <YAxis domain={[0, 10]} />
//                 <Tooltip />
//                 <Legend />
//                 <Line
//                   type="monotone"
//                   dataKey="gapScore"
//                   stroke="#8884d8"
//                   strokeWidth={3}
//                   dot={{ r: 4 }}
//                 />
//               </LineChart>
//             </ResponsiveContainer>
//           </div>
//         </div>
//       </div>

//       {/* Top Performers */}
//       <div className="bg-white p-6 rounded-2xl shadow-md mb-10 hover:shadow-lg transition">
//         <h2 className="text-2xl font-semibold mb-6 text-gray-800">
//           Top Performing Employees by Department
//         </h2>
//         <div className="overflow-hidden rounded-xl border border-gray-200">
//           <table className="min-w-full divide-y divide-gray-200">
//             <thead className="bg-gray-100 text-gray-600 uppercase text-sm font-semibold tracking-wider">
//               <tr>
//                 <th className="py-3 px-6 text-left">Department</th>
//                 <th className="py-3 px-6 text-left">Name</th>
//                 <th className="py-3 px-6 text-right">Performance Score</th>
//               </tr>
//             </thead>
//             <tbody className="divide-y divide-gray-100 text-gray-800">
//               {topPerformers.map((p, index) => (
//                 <tr
//                   key={index}
//                   className="hover:bg-gray-50 transition duration-150 ease-in-out"
//                 >
//                   <td className="py-3 px-6 font-medium">{p.department}</td>
//                   <td className="py-3 px-6">{p.name}</td>
//                   <td className="py-3 px-6 text-right font-semibold text-blue-600">
//                     {p.score}
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       </div>

//       {/* Upcoming Section */}
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//         {/* Workshops */}
//         <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition">
//           <h2 className="text-2xl font-semibold mb-4 text-gray-800">
//             Upcoming Workshops
//           </h2>
//           <div className="space-y-3">
//             {upcomingWorkshops.map((workshop, index) => (
//               <div
//                 key={index}
//                 className="flex items-center justify-between bg-gray-50 p-4 rounded-lg hover:bg-gray-100 transition"
//               >
//                 <span className="font-medium">{workshop.title}</span>
//                 <span className="text-sm text-gray-600">{workshop.date}</span>
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* Training Programs */}
//         <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition">
//           <h2 className="text-2xl font-semibold mb-4 text-gray-800">
//             Upcoming Training Programs
//           </h2>
//           <div className="space-y-3">
//             {trainingPrograms.map((program, index) => (
//               <div
//                 key={index}
//                 className="flex items-center justify-between bg-gray-50 p-4 rounded-lg hover:bg-gray-100 transition"
//               >
//                 <span className="font-medium">{program.title}</span>
//                 <span className="text-sm text-gray-600">{program.date}</span>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default DashboardPage;
