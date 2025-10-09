"use client";

import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
} from "recharts";

const performanceData = [
  { name: "High", value: 25 },
  { name: "Medium", value: 40 },
  { name: "Low", value: 15 },
];

const skillGapData = [
  { skill: "Leadership", gap: 5 },
  { skill: "Technical", gap: 8 },
  { skill: "Communication", gap: 3 },
  { skill: "Strategic Thinking", gap: 6 },
];

const growthOpportunities = [
  { month: "Jan", opportunities: 5 },
  { month: "Feb", opportunities: 8 },
  { month: "Mar", opportunities: 6 },
  { month: "Apr", opportunities: 10 },
  { month: "May", opportunities: 12 },
  { month: "Jun", opportunities: 9 },
];

const COLORS = ["#0088FE", "#00C49F", "#FFBB28"];

const DashboardPage = () => {
  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold mb-6">Employee Monitoring Dashboard</h1>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
        <div className="bg-white p-6 rounded-xl shadow text-center">
          <h2 className="text-lg font-semibold mb-2">Total Employees</h2>
          <p className="text-2xl font-bold">80</p>
        </div>
        <div className="bg-white p-6 rounded-xl shadow text-center">
          <h2 className="text-lg font-semibold mb-2">Opportunities</h2>
          <p className="text-2xl font-bold">35</p>
        </div>
        <div className="bg-white p-6 rounded-xl shadow text-center">
          <h2 className="text-lg font-semibold mb-2">Training Completed</h2>
          <p className="text-2xl font-bold">50</p>
        </div>
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Performance Pie Chart */}
        <div className="bg-white p-4 rounded-xl shadow">
          <h2 className="text-xl font-semibold mb-4">Employee Performance</h2>
          <PieChart width={300} height={300}>
            <Pie
              data={performanceData}
              cx="50%"
              cy="50%"
              label={({ name, percent }) =>
                `${name}: ${(percent * 100).toFixed(0)}%`
              }
              outerRadius={80}
              fill="#8884d8"
              dataKey="value"
            >
              {performanceData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip />
          </PieChart>
        </div>

        {/* Skill Gap Bar Chart */}
        <div className="bg-white p-4 rounded-xl shadow">
          <h2 className="text-xl font-semibold mb-4">Skill Gaps</h2>
          <BarChart
            width={350}
            height={250}
            data={skillGapData}
            margin={{ top: 5, right: 20, left: 0, bottom: 5 }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="skill" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="gap" fill="#82ca9d" />
          </BarChart>
        </div>

        {/* Growth Opportunities Line Chart */}
        <div className="bg-white p-4 rounded-xl shadow">
          <h2 className="text-xl font-semibold mb-4">Opportunities Growth</h2>
          <LineChart
            width={350}
            height={250}
            data={growthOpportunities}
            margin={{ top: 5, right: 20, left: 0, bottom: 5 }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="opportunities" stroke="#8884d8" />
          </LineChart>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
