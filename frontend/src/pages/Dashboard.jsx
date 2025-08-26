
import RevenueChart from '../components/RevenueChart'
import ChartSection from '../components/ChartSection'
import StateGrid from '../components/StateGrid'
import TableSection from '../components/TableSection'
import ActiveFeed from '../components/ActiveFeed'


export default function Dashboard() {
  return (
    <div className='space-y-6'>
      <StateGrid/>
      <ChartSection />

      {/* <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
        <div className='xl:col-span-2'>
          <TableSection/>
        </div>
        <div>
          <ActiveFeed/>
        </div>
 </div> */}
    </div>
  )
}
