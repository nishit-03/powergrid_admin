

// export default function OpportunityCard({ title, description, category, date, location }) {
//   return (
//     <div className="bg-white rounded-xl shadow-md hover:shadow-lg border border-gray-200 p-5 transition border-t-3 border-t-blue-600">
//       <div className="flex justify-between items-center mb-2">
//         <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
//         <span className="text-sm font-medium text-blue-600 bg-blue-50 px-2 py-1 rounded-lg">
//           {category}
//         </span>
//       </div>
//       <p className="text-gray-600 text-sm line-clamp-2 mb-3">{description}</p>
//       <div className="text-gray-500 text-xs flex justify-between">
//         <span>{date || "—"}</span>
//         <span>{location || "Online"}</span>
//       </div>
//     </div>
//   );
// }

export default function OpportunityCard({ title, description, category, date, location }) {
  return (
    <div className="bg-white rounded-xl shadow-md hover:shadow-lg border border-gray-200 p-5 transition border-t-4 border-t-blue-600">
      {/* Title and Category */}
      <div className="flex justify-between items-center mb-3">
        <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
        <span className="text-sm font-medium text-blue-600 bg-blue-50 px-2 py-1 rounded-full">
          {category}
        </span>
      </div>

      {/* Description */}
      <p className="text-gray-600 text-sm line-clamp-2 mb-4">{description}</p>

      {/* Details with headings */}
      <div className="text-gray-500 text-xs space-y-1">
        <div>
          <span className="font-semibold text-gray-700">Date:</span>{" "}
          {date || "—"}
        </div>
        <div>
          <span className="font-semibold text-gray-700">Location:</span>{" "}
          {location || "Online"}
        </div>
      </div>
    </div>
  );
}


