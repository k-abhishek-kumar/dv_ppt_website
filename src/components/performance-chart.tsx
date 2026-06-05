"use client";

import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { performanceData } from "@/lib/site-data";

export function PerformanceChart() {
  return (
    <div className="h-72 min-h-72 w-full min-w-0 md:h-80">
      <ResponsiveContainer width="100%" height="100%" minWidth={0}>
        <AreaChart data={[...performanceData]}>
          <defs>
            <linearGradient id="returnGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#2dd4bf" stopOpacity={0.35} />
              <stop offset="100%" stopColor="#2dd4bf" stopOpacity={0} />
            </linearGradient>
          </defs>
          <CartesianGrid stroke="#1c2433" strokeDasharray="4 4" />
          <XAxis
            dataKey="day"
            tick={{ fill: "#8b9cb3", fontSize: 12 }}
            axisLine={false}
            tickLine={false}
          />
          <YAxis
            tick={{ fill: "#8b9cb3", fontSize: 12 }}
            axisLine={false}
            tickLine={false}
            tickFormatter={(v) => `${v}%`}
          />
          <Tooltip
            contentStyle={{
              background: "#0d1117",
              border: "1px solid #1c2433",
              borderRadius: "8px",
              color: "#f0f4f8",
            }}
            formatter={(value) => [`${value}%`, "Return"]}
          />
          <Area
            type="monotone"
            dataKey="return"
            stroke="#2dd4bf"
            strokeWidth={2}
            fill="url(#returnGradient)"
            isAnimationActive={false}
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}
