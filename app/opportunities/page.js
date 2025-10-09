import { opportunities } from "../../data/opportunities";
import OpportunityCard from "../../components/OpportunityCard";

export default function Opportunities() {
  return (
    <div>
      <h1 className="text-2xl font-semibold mb-4">Available Opportunities</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {opportunities.map((op, idx) => (
          <OpportunityCard key={idx} {...op} />
        ))}
      </div>
    </div>
  );
}
