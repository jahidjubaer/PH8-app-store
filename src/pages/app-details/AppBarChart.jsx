import React from "react";
import {
  ComposedChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const AppBarChart = ({ appData }) => {
  // data of ratings form appData , i mean database ; 
  const data = appData.ratings;

  // bar chart using rechart of react ; 
  return (
    <div className="lg:w-10/12 w-11/12 mx-auto h-96  mb-10 ">
      <h2 className="text-lg font-semibold mb-3">Rating </h2>
      <ResponsiveContainer width="100%" height="100%">
        <ComposedChart
          layout="vertical"
          data={data}
          margin={{ top: 10, right: 20, bottom: 10, left: 20 }}
        >
          <XAxis type="number" />
          <YAxis dataKey="name" type="category" scale="band" />
          <Tooltip />
          <Legend></Legend>
          <Bar
            dataKey="count"
            barSize={40}
            fill="#ff7300"
            radius={[4, 4, 4, 4]}
          />
        </ComposedChart>
      </ResponsiveContainer>
    </div>
  );
};

export default AppBarChart;
