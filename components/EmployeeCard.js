export default function EmployeeCard({ name, role, performance, potential }) {
  return (
    <div className="bg-white p-4 rounded-lg shadow hover:shadow-lg transition">
      <h3 className="text-xl font-semibold">{name}</h3>
      <p className="text-gray-600 mb-2">{role}</p>
      <p>Performance: <span className="font-medium">{performance}</span></p>
      <p>Potential: <span className="font-medium">{potential}</span></p>
    </div>
  );
}
