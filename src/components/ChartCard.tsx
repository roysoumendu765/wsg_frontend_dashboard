import AgentCallsChart from "./AgentCallsChart";
import EditChartButton from "./EditChartButton";

type Props = {
  title: string;
  data: { name: string; calls: number }[];
  onEdit: () => void;
};

export default function ChartCard({ title, data, onEdit }: Props) {
  return (
    <div className="bg-white rounded-3xl p-8 shadow-sm w-full">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-xl font-semibold text-slate-800">
          {title}
        </h3>
        <EditChartButton onClick={onEdit} />
      </div>
      <AgentCallsChart data={data} />
    </div>
  );
}