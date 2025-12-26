type Props = {
  avg: number;
  peak: number;
  topSadPath: string;
};

export default function KpiRow({ avg, peak, topSadPath }: Props) {
  return (
    <div className="grid grid-cols-3 gap-6">
      <Kpi title="Avg Call Duration" value={`${avg} min`} />
      <Kpi title="Peak Duration" value={`${peak} min`} />
      <Kpi title="Top Sad Path" value={topSadPath} />
    </div>
  );
}

function Kpi({ title, value }: { title: string; value: string }) {
  return (
    <div className="bg-white/60 backdrop-blur rounded-lg p-4">
      <p className="text-xs text-slate-500">{title}</p>
      <p className="text-2xl font-medium text-slate-800">{value}</p>
    </div>
  );
}
