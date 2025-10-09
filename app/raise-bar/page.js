"use client";
import { useState } from "react";

export default function RaiseBar() {
  const [parameter, setParameter] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Bar raised by ${parameter}% for next-level roles.`);
    setParameter(0);
  };

  return (
    <div>
      <h1 className="text-2xl font-semibold mb-6">Raise Role Standards</h1>
      <form onSubmit={handleSubmit} className="bg-white shadow p-6 rounded-lg w-full md:w-1/2">
        <label className="block mb-2 text-gray-700 font-medium">
          Increase Skill/Expertise Bar (%)
        </label>
        <input
          type="number"
          className="w-full border border-gray-300 rounded-md p-2 mb-4"
          value={parameter}
          onChange={(e) => setParameter(e.target.value)}
          min="0"
          max="100"
        />
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition"
        >
          Apply Changes
        </button>
      </form>
    </div>
  );
}
