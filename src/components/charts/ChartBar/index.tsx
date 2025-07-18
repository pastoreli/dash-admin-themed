import { Box } from "@radix-ui/themes";
import {
  BarChart,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
  Bar,
} from "recharts";

export type ChartBarContentOptionProps = {
  key: string;
  name: string;
  color?: string;
};

export type ChartBarProps = {
  data: any[];
  XAxisKey: string;
  contentOptions: ChartBarContentOptionProps[];
};

const ChartBar: React.FC<ChartBarProps> = ({
  data,
  XAxisKey,
  contentOptions,
}) => {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <BarChart
        data={data}
        margin={{ top: 20, right: 30, left: 20, bottom: 10 }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey={XAxisKey} />
        <YAxis />
        <Tooltip />
        <Legend />
        {contentOptions.map((option) => (
          <Bar
            key={option.key}
            dataKey={option.key}
            fill={option.color || "#0028BC"}
            name={option.name}
          />
        ))}
      </BarChart>
    </ResponsiveContainer>
  );
};

export default ChartBar;
