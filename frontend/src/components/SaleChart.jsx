
import React from 'react'
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from 'recharts'

const SaleChart = () => {
  const data = [
    { name: "Electronic", value: 45, color: "blue" },
    { name: "Clothing", value: 38, color: "brown" },
    { name: "book", value: 50, color: "green" },
    { name: "others", value: 18, color: "yellow" },
  ]
  return (
    <div className='bg-white border border-slate-200/50 shadow p-4 mt-4'>
      <div className='mb-6'>
        <h3 className='text-lg font-bold text-slate-800'>Sale by Category</h3>
        <p className='text-sm text-slate-500'>Production distrbution</p>
      </div>

      <div className='h-48'>
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie data={data} cx= "50%" cy= "50%" innerRadius={40} outerRadius={80} paddingAngle={5} dataKey="value">
              {data.map((entery, index) => (
                <Cell key={`cell-${index}`} fill={ entery.color} />
              ))}
            </Pie>
            <Tooltip contentStyle={{backgroundColor: "rgba(255, 255, 255, 0.95", border:"none", borderRadius: "12px", boxShadow:"0, 10px 40px rgba(0,0,0,0.1)"}}/>
          </PieChart>
        </ResponsiveContainer>
      </div>

      <div className='space-y-3'>
        {data.map((item, index) => {
          return (
            <div key={index} className='flex items-center justify-between'>
              <div className='flex items-center space-x-3'>
                <div className='h-3 w-3 rounded-full' style={{backgroundColor: item.color}}/>
                <span className='text-sm text-slate-500'>{item.name}</span>
              </div>
              <div className='text-sm text-slate-700'>
                {item.value}%
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default SaleChart
