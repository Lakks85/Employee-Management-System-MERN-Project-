import React from 'react'
import { motion } from 'framer-motion'

const StateGrid = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="bg-white p-6 rounded-lg shadow">

      <main className="flex-1 p-4 overflow-y-auto">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4 text-center">
          <div className=" bg-green-400 text-white p-4 rounded shadow border">
            <p className='pb-3'>Total Employee</p>
            <span>1020</span>
          </div>
          <div className=" bg-blue-400 text-white  flex  flex-col items-center justify-center p-4 rounded shadow border ">
            <p className='pb-3'>Salary</p>
            <span>$10,1023</span>
          </div>
          <div className=" bg-pink-400 text-white  flex  flex-col items-center justify-center p-4 rounded shadow border ">
            <p className='pb-3'>Current Female</p>
            <span>101</span>
          </div>
          <div className=" bg-yellow-500 text-white  flex  flex-col items-center justify-center p-4 rounded shadow border">
            <p className='pb-3'>Current Male</p>
            <span>203</span>
          </div>
        </div>
      </main>
    </motion.div>

  )
}

export default StateGrid
