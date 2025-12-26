import {
  AreaChart,
  Area,
  XAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

type Props = {
  data: { time: string; value: number }[];
};

export default function CallDurationChart({ data }: Props) {
  return (
    <div className="w-full h-[120px]">
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart data={data}>
          <XAxis dataKey="time" hide />
          <Tooltip />
          <Area
            type="monotone"
            dataKey="value"
            stroke="#6baed6"
            fill="#cfe3f5"
            strokeWidth={2}
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}