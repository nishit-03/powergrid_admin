export default function OpportunityCard({ title, department, duration }) {
  return (
    <div className="bg-white p-4 rounded-lg shadow hover:shadow-lg transition">
      <h3 className="text-lg font-semibold">{title}</h3>
      <p className="text-gray-600">{department}</p>
      <p className="mt-2 text-sm">Duration: {duration}</p>
      <button className="mt-4 bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-700">
        View Details
      </button>
    </div>
  );
}
