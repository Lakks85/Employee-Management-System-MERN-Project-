import React from 'react'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, ResponsiveContainer, Tooltip } from "recharts"

const RevenueChart = () => {

  const data = [
    { month: "Jan", revenue: 45000, expenses: 12100 },
    { month: "Feb", revenue: 35000, expenses: 42200 },
    { month: "March", revenue: 85000, expenses: 32000 },
    { month: "April", revenue: 55000, expenses: 22000 },
    { month: "May", revenue: 85000, expenses: 62000 },
    { month: "jun", revenue: 65000, expenses: 78000 },
    { month: "july", revenue: 25000, expenses: 98000 },
    { month: "August", revenue: 65000, expenses: 76000 },
    { month: "September", revenue: 85000, expenses: 54000 },
    { month: "October", revenue: 55000, expenses: 23000 },
    { month: "November", revenue: 25000, expenses: 34000 },
    { month: "December", revenue: 45000, expenses: 123000 },
  ]
  return (
    <div className=' bg-white/80 shadow-lg border border-slate-200 mt-3 p-4'>
      <div className=''>
        <div className='flex items-center justify-between mb-6'>
          <div>
            <h3 className='text-xl font-bold text-slate-800'>Revenue</h3>
            <p className='text-sm text-slate-500'>Month revenue and expenses</p>
          </div>

          <div className='flex items-center space-x-4'>
            <div className='flex items-center space-x-2'>
              <div className='w-3 h-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full'></div>
              <div className="text-sm text-slate-600">Revenue</div>
            </div>

            <div className='flex items-center space-x-2'>
              <div className='w-3 h-3 bg-gradient-to-r from-gray-400 to-gray-500 rounded-full'></div>
              <div className="text-sm text-slate-600">Expenses</div>
            </div>
          </div>
        </div>
      </div>
      <div className=' h-80'>
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" stroke='#e2e8f0' opacity={0.3} />

            <XAxis dataKey="month" stroke='#64748b' fontSize={12} tickLine={false} axisLine={false} />
            <YAxis stroke='#64748b' fontSize={12} tickLine={false} axisLine={false} tickFormatter={(value) => `$${value / 1000}k`} />

            <Tooltip contentStyle={{
              backgroundColor: "rgba(255,255,255,0.9)", border: "none", borderRadius: "12px", boxShadow: "0 10px 40px rgba(0,0,0,0.1)"
            }} formatter={(value) => [`$${value.toLocaleString()}`, ""]} />

            <Bar dataKey="revenue" fill="url(#revenueGradient)" radius={[4, 4, 0, 0]} maxBarSize={40} />
            <Bar dataKey="expenses" fill="url(#expensesGradient)" radius={[4, 4, 0, 0]} maxBarSize={40} />


            <defs>
              <linearGradient id='revenueGradient' xl="0" yl="0" x2="0" y2="1">
                <stop offset="0%" stopColor='#3b82f6' />
                <stop offset="100%" stopColor='8b5cf6' />
              </linearGradient>

              <linearGradient id='expensesGradient' xl="0" yl="0" x2="0" y2="1">
                <stop offset="0%" stopColor='#94a3b8' />
                <stop offset="100%" stopColor='#64748b' />
              </linearGradient>
            </defs>
          </BarChart>
        </ResponsiveContainer>
      </div>

    </div>
  )
}

export default RevenueChart
