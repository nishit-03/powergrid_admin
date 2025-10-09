import { dashboardStats } from "../data/dashboardStats";
import Card from "../components/Card";

export default function Dashboard() {
  return (
    <div>
      <h1 className="text-2xl font-semibold mb-4">Dashboard Overview</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {dashboardStats.map((stat, idx) => (
          <Card key={idx} title={stat.title} value={stat.value} icon={stat.icon} />
        ))}
      </div>
    </div>
  );
}
