import { Clock, ShoppingCart, User } from 'lucide-react'
import React from 'react'

const ActiveFeed = () => {
  const activities = [
    {
      id: 1,
      type: "user",
      icon: User,
      title: "New User Register",
      description: "john simth create an account",
      time: "2 min ago",
      color: "text-blue-500",
      bgColor: "bg-blue-100 dark:bg-blue-900/30"
    },

    {
      id: 2,
      type: "order",
      icon: ShoppingCart,
      title: "New order recived",
      description: "order for $2.999",
      time: " min ago",
      color: "text-pink-500",
      bgColor: "bg-pink-100 "
    },
]

  return (
    <div className='bg-white'>
      <div className='p-6 border-b border-l-slate-500'>
        <div>
          <h3 className='text-lg fond-bold'>Activity Feed</h3>
          <p className='text-sm text-slate-400'>Recently System Activity</p>
        </div>
          <button className='text-blue-600 hover:text-blue-700 font-medium text-sm'>View All</button>
      </div>

      <div className='p-6'>
        <div className='space-y-4'>

          {activities.map((activity) => {
            return <div className='flex flex-start space-x-4 p-3 rounded-xl transition-colors'>
              <div className= "p-2 rounded-lg">
                <activity.icon className={`w-4 h-4  ${activity.color}`} />
              </div>
              <div className='flex-1 min-w-0'>
                <h4 className='text-sm font-bold text-slate-800'>{activity.title }</h4>
                <p className='text-sm text-slate-600'>{activity.description}</p>

                <div className='flex items-center-safe space-x-1 mt-1'>
                  <Clock className='w-3 h-3 text-slate-400' />
                  <span className='text-xs text-slate-500'>{activity.time }</span>
                </div>
              </div>
            </div>
          })}
        </div>
      </div>
    </div>
  )
}

export default ActiveFeed
