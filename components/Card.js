export default function Card({ title, value, icon }) {
  return (
    <div className="bg-white rounded-lg shadow p-4 flex items-center justify-between">
      <div>
        <h3 className="text-gray-600">{title}</h3>
        <p className="text-2xl font-semibold">{value}</p>
      </div>
      <div className="text-3xl text-blue-600">{icon}</div>
    </div>
  );
}
