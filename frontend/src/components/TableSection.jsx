import { MoreHorizontal, TrendingDown, TrendingUp } from 'lucide-react'
import React from 'react'

const recentOrders = [
  {
    id: "#3234",
    customer: "John Smith",
    product: "Macbook Pro 16",
    amount: "$2,399",
    status: "completed",
    date: "24-11-2025"
  },
  {
    id: "#6234",
    customer: "Sara Khan",
    product: "iphone X 10",
    amount: "$4,850",
    status: "completed",
    date: "12-12-2025"
  },
  {
    id: "#8765",
    customer: "Mike willson",
    product: "dell laptop ",
    amount: "$3,620",
    status: "cancelled",
    date: "24-11-2025"
  },
  {
    id: "#9675",
    customer: "Emily Davis",
    product: "Sumsung A32a",
    amount: "$1,890",
    status: "pending",
    date: "24-11-2025"
  },
  {
    id: "#4923",
    customer: "Ally Johson",
    product: "Screen 24inch",
    amount: "$6,980",
    status: "cancelled",
    date: "24-11-2025"
  },
]

const topProducts = [
  {
    name: "Airpod pro",
    sale: "1020",
    revenue: "$852,229",
    trend: "up",
    change: "-3%"
  },
  {
    name: "AirPad",
    sale: "1020",
    revenue: "$852,229",
    trend: "down",
    change: "-15%"
  },
  {
    name: "Airpod pro",
    sale: "1020",
    revenue: "$852,229",
    trend: "up",
    change: "-20%"
  },
  {
    name: "Airpod pro",
    sale: "1020",
    revenue: "$852,229",
    trend: "down",
    change: "-3%"
  },


]
const TableSection = () => {

  const getStatusColor = (status) => {
    switch (status) {
      case "completed" :
        return "bg-green-600";

      case "pending" :
        return "bg-blue-600"

      case "cancelled":
        return "bg-red-600";

      case "default":
        return "bg-emerald-400 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400"
    }
  }

  return (
    <div className='space-y-6'>
      <div className='bg-white overflow-hidden'>
        <div className='p-6 border-b border-slate-500'>
          <div className='flex items-center justify-between'>
            <div>
              <h3>Recent Orders</h3>
              <p>Latest cutomer order</p>
            </div>
            <button>View all</button>
           </div>
        </div>

        <div className='overflow-x-auto'>
          <table className='mb-6 mr-6'>
            <thead>
              <tr>
                <th className='text-left p-4 text-sm font-semibold text-slate-600'>Order Id</th>
                <th className='text-left p-4 text-sm font-semibold text-slate-600'>Products</th>
                <th className='text-left p-4 text-sm font-semibold text-slate-600'>Amount</th>
                <th className='text-left p-4 text-sm font-semibold text-slate-600'>Status</th>
                <th className='text-left p-4 text-sm font-semibold text-slate-600'>Date</th>
              </tr>
            </thead>
              <tbody className='mr-6'>
                {recentOrders.map((order,index) => {
                  return <tr className='border-b bg-slate-200/50 hover:bg-slate-50/50' key={index}>
                    <td className='p-4'>
                      <span className='text-sm font-medium text-blue-500'>{order.id }</span>
                    </td>
                    <td className='p-4'>
                      <span className='text-sm font-medium text-slate-800'>{order.customer} </span>
                    </td>
                    <td className='p-4'>
                      <span className='text-sm font-medium text-slate-800'>{order.product }</span>
                    </td>
                    <td className='p-4'>
                      <span className='text-sm font-medium text-slate-800'>{order.amount} </span>
                    </td>
                    <td >
                      <span className={`text-slate-500 font-medium text-xs px-3 py-1 rounded-full ${getStatusColor(order.status)}`}>{order.date }</span>
                    </td>
                    <td className='p-4'>
                      <span className='text-sm font-medium text-slate-800'>
                        <MoreHorizontal className='w-4 h-4' />
                      </span>
                    </td>
                  </tr>
              })}
              </tbody>
          </table>
        </div>

      </div>


      <div className='bg-white rounded-2xl border overflow-hidden text-gray-600'>
        <div className='p-6 border-b '>
          <div className='flex item-center justify-between'>
            <div className='text-lg font-bold text-slate-800'>
              <h3>Top Products</h3>
            </div>
            <p>best perfomence product</p>
          </div>
          <button className='text-sm text-blue-600 hover:text-blue-700 font-medium'>View all</button>
        </div>

        <div className='p-6 space-y-4'>
          {topProducts.map((product) => {
            return <div className='flex items-center justify-between p-4 rounded-xl hover:bg-slate-50 transition-colors'>
              <div className='flex-1 '>
                <h4 className='text-sm font-semibold text-slate-800'>{product.name}</h4>
                <p className='text-sm text-slate-500'>{product.sale}</p>
              </div>

              <div className='text-right'>
                <p className='text-sm font-semibold text-gray-500'>{product.revenue}</p>
                <div className='flex items-center space-x-1'>
                  {product.trend === "up" ? <TrendingUp className='h-4 w-4  text-emerald-500 ' /> : <TrendingDown className='h-4 w-4  text-emerald-500'/>}
                  <span className={`text-sm font-bold ${product.trend === "up" ? "text-emerald-600" : "text-red-600"}`}>{product.change}</span>
                </div>
              </div>
            </div>
        })}


        </div>
      </div>
    </div>
  )
}

export default TableSection
