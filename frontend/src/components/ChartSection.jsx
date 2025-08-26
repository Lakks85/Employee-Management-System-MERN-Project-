import React from 'react'
import SaleChart from './SaleChart'
import RevenueChart from './RevenueChart'

const ChartSection = () => {

  return (
    <div className='grid grid-cols-1 xl:grid-cols-3 gap-6'>
      <div className='xl:col-span-2'>
        <RevenueChart/>
      </div>
      <div className='space-y-6'>
        <SaleChart/>
      </div>
   </div>
  )
}

export default ChartSection
