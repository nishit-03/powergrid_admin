export default function EmployeeCard({
  name,
  department,
  designation,
  graphs,
}) {
  return (
    <div className="bg-white rounded-xl shadow-md hover:shadow-lg border border-gray-200 p-5 transition border-t-4 border-t-blue-600">
      <h3 className="text-lg font-semibold text-gray-800 mb-2">{name}</h3>

      <div className="flex flex-wrap gap-2 mb-3">
        <span className="text-sm font-medium text-blue-600 bg-blue-50 px-2 py-1 rounded-full">
          {department}
        </span>
        <span className="text-sm font-medium text-gray-700 bg-gray-100 px-2 py-1 rounded-full">
          {designation}
        </span>
        {graphs && graphs.length > 0 && (
          <span className="text-sm font-medium text-blue-700 bg-blue-100 px-2 py-1 rounded-full">
            Graphs Available
          </span>
        )}
      </div>

      <p className="text-gray-600 text-sm line-clamp-2">
        Click to see full details
      </p>
    </div>
  );
}
