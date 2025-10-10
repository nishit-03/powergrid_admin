"use client";
import React, { useState } from "react";
import { opportunities as initialOpportunities } from "../../data/opportunities";
import OpportunityCard from "../../components/OpportunityCard";

export default function Opportunities() {
  const [opportunities, setOpportunities] = useState(initialOpportunities);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [showForm, setShowForm] = useState(false);
  const [selectedOpportunity, setSelectedOpportunity] = useState(null);

  const [newOpportunity, setNewOpportunity] = useState({
    title: "",
    description: "",
    category: "Training",
    date: "",
    location: "",
    skillsGained: [],
  });

  const categories = ["All", "Technical", "Leadership", "Research", "Operational"];

  const filteredOpportunities =
    selectedCategory === "All"
      ? opportunities
      : opportunities.filter((op) => op.category === selectedCategory);

  const sortedOpportunities = filteredOpportunities.sort(
    (a, b) => new Date(a.date) - new Date(b.date)
  );

  const handleCreate = (e) => {
    e.preventDefault();
    if (!newOpportunity.title || !newOpportunity.description) return;
    setOpportunities([
      ...opportunities,
      { ...newOpportunity, id: Date.now() },
    ]);
    setShowForm(false);
    setNewOpportunity({
      title: "",
      description: "",
      category: "Training",
      date: "",
      location: "",
      skillsGained: [],
    });
  };

  const handleSkillsChange = (e) => {
    setNewOpportunity({
      ...newOpportunity,
      skillsGained: e.target.value.split(",").map((s) => s.trim()),
    });
  };

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between mb-6">
        <h1 className="text-3xl font-semibold text-blue-700 mb-3 md:mb-0">
          Available Opportunities
        </h1>

        <div className="flex items-center gap-3">
          {/* Filter */}
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="border border-blue-200 rounded-lg px-3 py-2 text-gray-700 bg-white shadow-sm hover:border-blue-400 focus:ring-2 focus:ring-blue-200 transition"
          >
            {categories.map((cat) => (
              <option key={cat}>{cat}</option>
            ))}
          </select>

          {/* Create Button */}
          <button
            onClick={() => setShowForm(true)}
            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition shadow-sm"
          >
            + Create Opportunity
          </button>
        </div>
      </div>

      {/* Grid of Opportunities */}
      <div className="grid grid-cols-1 gap-6">
        {sortedOpportunities.map((op) => (
          <div
            key={op.id}
            onClick={() => setSelectedOpportunity(op)}
            className="cursor-pointer"
          >
            <OpportunityCard {...op} />
          </div>
        ))}
      </div>

      {/* Create Opportunity Modal */}
      {showForm && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50">
          <div className="bg-white rounded-xl shadow-xl p-6 w-full max-w-lg border border-blue-100">
            <h2 className="text-2xl font-semibold mb-4 text-blue-700 border-b pb-2">
              Create New Opportunity
            </h2>
            <form onSubmit={handleCreate} className="space-y-4">
              <input
                type="text"
                placeholder="Title"
                value={newOpportunity.title}
                onChange={(e) =>
                  setNewOpportunity({ ...newOpportunity, title: e.target.value })
                }
                className="w-full border border-blue-100 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-200 outline-none"
                required
              />
              <textarea
                placeholder="Description"
                value={newOpportunity.description}
                onChange={(e) =>
                  setNewOpportunity({
                    ...newOpportunity,
                    description: e.target.value,
                  })
                }
                className="w-full border border-blue-100 rounded-lg px-3 py-2 h-24 focus:ring-2 focus:ring-blue-200 outline-none"
                required
              />
              <input
                type="text"
                placeholder="Skills Gained (comma separated)"
                value={newOpportunity.skillsGained.join(", ")}
                onChange={handleSkillsChange}
                className="w-full border border-blue-100 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-200"
              />
              <div className="flex gap-3">
                <select
                  value={newOpportunity.category}
                  onChange={(e) =>
                    setNewOpportunity({
                      ...newOpportunity,
                      category: e.target.value,
                    })
                  }
                  className="w-1/2 border border-blue-100 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-200"
                >
                  <option>Technical</option>
                  <option>Leadership</option>
                  <option>Research</option>
                  <option>Operational</option>
                </select>
                <input
                  type="date"
                  value={newOpportunity.date}
                  onChange={(e) =>
                    setNewOpportunity({ ...newOpportunity, date: e.target.value })
                  }
                  className="w-1/2 border border-blue-100 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-200"
                />
              </div>
              <input
                type="text"
                placeholder="Location"
                value={newOpportunity.location}
                onChange={(e) =>
                  setNewOpportunity({
                    ...newOpportunity,
                    location: e.target.value,
                  })
                }
                className="w-full border border-blue-100 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-200"
              />

              <div className="flex justify-end gap-3 pt-4">
                <button
                  type="button"
                  onClick={() => setShowForm(false)}
                  className="px-4 py-2 bg-gray-200 rounded-lg hover:bg-gray-300"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
                >
                  Create
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Detailed Opportunity Modal */}
      {selectedOpportunity && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50">
          <div className="bg-white rounded-xl shadow-xl p-6 w-full max-w-lg border border-blue-100 relative">
            <button
              onClick={() => setSelectedOpportunity(null)}
              className="absolute top-3 right-3 text-gray-500 hover:text-gray-700 text-lg font-bold"
            >
              ✕
            </button>

            <h2 className="text-2xl font-semibold mb-3 text-blue-700">
              {selectedOpportunity.title}
            </h2>

            <p className="text-gray-600 mb-2">
              <span className="font-medium text-gray-800">Category:</span>{" "}
              {selectedOpportunity.category}
            </p>
            {selectedOpportunity.date && (
              <p className="text-gray-600 mb-2">
                <span className="font-medium text-gray-800">Date:</span>{" "}
                {selectedOpportunity.date}
              </p>
            )}
            {selectedOpportunity.location && (
              <p className="text-gray-600 mb-3">
                <span className="font-medium text-gray-800">Location:</span>{" "}
                {selectedOpportunity.location}
              </p>
            )}

            <p className="text-gray-700 leading-relaxed mb-4">
              {selectedOpportunity.description}
            </p>

            {/* Skills Gained */}
            {selectedOpportunity.skillsGained && (
              <div className="mb-2">
                <h3 className="font-semibold text-gray-800 mb-2">Skills Gained:</h3>
                <div className="flex flex-wrap gap-2">
                  {selectedOpportunity.skillsGained.map((skill, idx) => (
                    <span
                      key={idx}
                      className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-sm font-medium"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

