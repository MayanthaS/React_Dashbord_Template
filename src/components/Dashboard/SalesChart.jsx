import React from 'react'
import { PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer } from 'recharts';


const data = [
  { category: 'Electronics', value: 1200 ,color:"#3b82f6" },
  { category: 'Clothing', value: 900 ,color:"#10b981" },
  { category: 'Home Goods', value: 600 ,color:"#8b5cf6" },
  { category: 'Books', value: 300 ,color:"#f59e0b" },
];

function SalesChart() {
  return (
    <div className='bg-white dark:bg-slate-900 backdrop-blur-xl   rounded-xl p-6 border border-slate-200/50 dark:border-slate-700/50'>
       <div className='mb-6'>
        <h3 className='text-lg font-bold  text-slate-800 dark:text-white'>Sales by Category</h3>
        <p className='text-sm text-slate-600 dark:text-slate-400'>Production Distribution</p>
       </div>
       <div className='h-64'>
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie  
              data={data}
              // dataKey="value"
              nameKey="category"
              cx="50%"
              cy="50%"
              innerRadius={40}
              outerRadius={80}
              paddingAngle={5}
              fill="#8884d8"
              label
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Pie>
            <Tooltip  
            contentStyle={{
              backgroundColor:"rgba(255,255,255,0.9)",
              border:"none",
              borderRadius:"12px",
              boxShadow:"0 10px 40px rgba(0,0,0,0.1)"
            }
            }/>
            <Legend verticalAlign="bottom" height={36}/>
          </PieChart>
        </ResponsiveContainer>
       </div>
      
    </div>
  )
}

export default SalesChart
