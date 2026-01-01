import React from 'react'
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer
} from 'recharts'

function RevenueChart() {
  const data = [
    { month: 'Jan', revenue: 4000, expense: 2400 },
    { month: 'Feb', revenue: 3000, expense: 1398 },
    { month: 'Mar', revenue: 2000, expense: 9800 },
    { month: 'Apr', revenue: 2780, expense: 3908 },
    { month: 'May', revenue: 1890, expense: 4800 },
    { month: 'Jun', revenue: 2390, expense: 3800 },
    { month: 'Jul', revenue: 3490, expense: 4300 }
  ]

  return (
    <div className="bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl rounded-2xl border border-slate-200/50 dark:border-slate-700/50 p-6">
      
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <div>
          <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">
            Revenue Overview
          </h3>
          <p className="text-sm text-slate-600 dark:text-slate-400">
            Monthly revenue
          </p>
        </div>

        {/* Legend */}
        <div className="flex  flex-lgitems-center space-x-4">
          <div className="flex items-center space-x-2">
            <span className="w-3 h-3 bg-blue-600 rounded-full"></span>
            <span className="text-sm text-slate-600 dark:text-slate-400">
              Revenue
            </span>
          </div>
          <div className="flex items-center space-x-2">
            <span className="w-3 h-3 bg-slate-500 rounded-full"></span>
            <span className="text-sm text-slate-600 dark:text-slate-400">
              Expense
            </span>
          </div>
        </div>
      </div>

      {/* Chart */}
      <div className="h-80">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={data}
            margin={{ top: 20, right: 30, left: 0, bottom: 0 }}
          >
            <CartesianGrid strokeDasharray="3 3" 
             stroke='#e2e8f0'
             opacity={0.3}/>
            <XAxis 
            dataKey="month"
            stroke='#64748b'
            fontSize={12}
            tickLine={false}
            axisLine={false} />
            <YAxis 
            stroke='#64748b'
            fontSize={12}
            tickLine={false}
            axisLine={false} 
            tickFormatter={(value) => `Rs ${value/1000}k`} />

            <Tooltip 
            contentStyle={{
                backgroundColor:"rgba(255,255,255,0.95)",
                border:"none",
                borderRadius:"12px",
                boxShadow:"0 10px 40px rgba(0,0,0,0.1)" ,
            }} 
            formatter={(value) => [`RS ${value.toLocaleString()}`]} />

            <Bar dataKey="revenue" fill="url(#revenueGradient)" radius={[6, 6, 0, 0]} maxBarSize={40} />
            <Bar dataKey="expense" fill="url(#expenseGradient)" radius={[6, 6, 0, 0]} maxBarSize={40} />
            <defs>
                <linearGradient id="revenueGradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.8}/>
                    <stop offset="95%" stopColor="#3b82f6" stopOpacity={0.1}/>
                </linearGradient>
                <linearGradient id="expenseGradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#64748b" stopOpacity={0.8}/>
                    <stop offset="95%" stopColor="#64748b" stopOpacity={0.1}/>
                </linearGradient>
            </defs>
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
}

export default RevenueChart
