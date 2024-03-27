import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  ResponsiveContainer,
  Cell,
  Tooltip,
  Text,
} from "recharts";

import { BoltOutlined } from "@mui/icons-material";

import { motion } from "framer-motion";

const data = [
  { name: "Sat", value: 160 },
  { name: "Sun", value: 120 },
  { name: "Mon", value: 80 },
  { name: "Tue", value: 150 },
  { name: "Wed", value: 100 },
  { name: "Thu", value: 130 },
  { name: "Fri", value: 170, current: true },
];

interface PowerConsumptionChartProps {
  week: string;
}

const PowerConsumptionChart: React.FC<PowerConsumptionChartProps> = ({
  week,
}) => {
  const maxValue = Math.max(...data.map((d) => d.value));
  const tickInterval = 50;
  const yTicks = Array.from(
    { length: Math.ceil(maxValue / tickInterval) + 1 },
    (_, index) => index * tickInterval
  );

  return (
    <motion.div drag>
      <div className="flex flex-col -mt-4 font-montserrat -ml-5 text-bblack">
        <div className="flex items-center ml-9">
          <BoltOutlined className="text-2xl mr-3 -mb-2" />{" "}
          <h1 className="text-lg font-semibold font-comfortaa  ">
            Power Consumption <span className="text-md">(kWjh)</span>
          </h1>
        </div>
        <p className="text-sm italic font-semibold ml-20 -mt-1 -mb-5">{week}</p>
        <ResponsiveContainer width={470} height={200}>
          <BarChart
            data={data}
            margin={{
              top: 0,
              right: 5,
              left: -2,
              bottom: 0,
            }}
            barCategoryGap="30%"
          >
            <XAxis
              dataKey="name"
              axisLine={false}
              tickLine={false}
              tickMargin={10}
              tick={<CustomTick />}
            />
            <YAxis
              domain={[0, "dataMax + 50"]}
              allowDataOverflow
              axisLine={false}
              tickLine={false}
              ticks={yTicks}
              tick={<CustomTick />}
            />
            <Tooltip cursor={{ fill: "transparent" }} />
            <Bar dataKey="value" shape={renderCustomBarShape} barSize={12}>
              {data.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={entry.current ? "#CA6EEB" : "#555263"}
                />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
    </motion.div>
  );
};

const renderCustomBarShape = (props: any) => {
  const { fill, x, y, width, height } = props;

  const radius = 6;

  return (
    <g>
      <path
        d={`M${x},${y + radius}
            a${radius},${radius} 0 0 1 ${radius},-${radius}
            h${width - 2 * radius}
            a${radius},${radius} 0 0 1 ${radius},${radius}
            v${height - 2 * radius}
            a${radius},${radius} 0 0 1 -${radius},${radius}
            h-${width - 2 * radius}
            a${radius},${radius} 0 0 1 -${radius},-${radius}
            z`}
        fill={fill}
      />
    </g>
  );
};

const CustomTick: React.FC<any> = (props) => {
  const { x, y, payload } = props;

  return (
    <Text
      x={x}
      y={y}
      fill="#333040"
      textAnchor="middle"
      verticalAnchor="middle"
      fontWeight="bold"
    >
      {payload.value}
    </Text>
  );
};

export default PowerConsumptionChart;
