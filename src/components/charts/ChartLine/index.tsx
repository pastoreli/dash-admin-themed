import {
  LineChart,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
  Line,
} from "recharts";

export type ChartLineContentOptionProps = {
  key: string;
  name: string;
  color?: string;
};

export type ChartLineProps = {
  data: any[];
  XAxisKey: string;
  contentOptions: ChartLineContentOptionProps[];
};

const ChartLine: React.FC<ChartLineProps> = ({
  data,
  XAxisKey,
  contentOptions,
}) => {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <LineChart
        data={data}
        margin={{ top: 20, right: 30, left: 20, bottom: 10 }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey={XAxisKey} />
        <YAxis />
        <Tooltip />
        <Legend />
        {contentOptions.map((option) => (
          <Line
            key={option.key}
            type="monotone"
            dataKey={option.key}
            stroke={option.color || "#0028BC"}
            name={option.name}
            strokeWidth={3}
          />
        ))}
      </LineChart>
    </ResponsiveContainer>
  );
};

export default ChartLine;
