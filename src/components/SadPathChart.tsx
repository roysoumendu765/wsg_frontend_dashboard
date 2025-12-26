import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  Tooltip,
} from "recharts";

const data = [
  { name: "Unsupported Language", value: 32 },
  { name: "Assistant didn't speak French", value: 24 },
  { name: "Customer Hostility", value: 22 },
  { name: "Verbal Aggression", value: 22 },
];

const COLORS = ["#7baedc", "#9ecae1", "#c6dbef", "#e5f5f9"];

export default function SadPathChart() {
  return (
    <div className="flex flex-col items-center">
      <div className="w-[360px] h-[360px]">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Tooltip
              contentStyle={{
                borderRadius: "8px",
                border: "none",
                boxShadow: "0 8px 24px rgba(0,0,0,0.08)",
                fontSize: "12px",
              }}
              formatter={(value, name) => [
                `${value ?? 0}%`,
                name,
              ]}
            />
            <text
              x="50%"
              y="50%"
              textAnchor="middle"
              dominantBaseline="middle"
              className="text-slate-600 text-sm"
            >
              Sad Paths
            </text>
            <Pie
              data={data}
              dataKey="value"
              innerRadius={95}
              outerRadius={140}
              paddingAngle={2}
              isAnimationActive
            >
              {data.map((_, i) => (
                <Cell
                  key={i}
                  fill={COLORS[i]}
                  className="transition-transform duration-200 hover:scale-[1.03]"
                />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
      </div>
      <div className="mt-6 grid grid-cols-2 gap-x-6 gap-y-2 text-sm text-slate-600">
        {data.map((item, idx) => (
          <div
            key={item.name}
            className="flex items-center gap-2"
          >
            <span
              className="w-3 h-3 rounded-full"
              style={{ backgroundColor: COLORS[idx] }}
            />
            <span>{item.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}