import { employees } from "../../data/employees";
import EmployeeCard from "../../components/EmployeeCard";

export default function Employees() {
  return (
    <div>
      <h1 className="text-2xl font-semibold mb-4">Employee Directory</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {employees.map((emp, idx) => (
          <EmployeeCard key={idx} {...emp} />
        ))}
      </div>
    </div>
  );
}
