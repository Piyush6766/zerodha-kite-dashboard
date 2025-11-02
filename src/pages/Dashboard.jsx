import React from 'react'
import Sidebar from '../components/Sidebar'
import Topbar from '../components/Topbar'
import Watchlist from '../components/Watchlist'
import ChartView from '../components/ChartView'
import OrderPanel from '../components/OrderPanel'
import PortfolioSummary from '../components/PortfolioSummary'

export default function Dashboard() {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Topbar />
        <div className="p-4 grid grid-cols-12 gap-4 bg-gray-50 overflow-auto">
          <div className="col-span-12 md:col-span-3 space-y-4">
            <Watchlist />
            <PortfolioSummary />
          </div>
          <div className="col-span-12 md:col-span-6 space-y-4">
            <ChartView />
          </div>
          <div className="col-span-12 md:col-span-3 space-y-4">
            <OrderPanel />
          </div>
        </div>
      </div>
    </div>
  )
}
