import React, { useContext } from 'react'
import { Paper, Typography } from '@mui/material'
import { StockContext } from '../contex/StockContext'
import SkeletonLoader from './SkeletonLoader'
import { motion } from 'framer-motion'

export default function Watchlist() {
  const { stocks, loading } = useContext(StockContext)
  if (loading) return <SkeletonLoader />
  return (
    <Paper className="p-3">
      <Typography variant="subtitle1" className="mb-2">Watchlist</Typography>
      <div className="space-y-2">
        {stocks.map((s) => (
          <motion.div key={s.symbol} whileHover={{ scale: 1.01 }}>
            <div className="flex justify-between items-center px-2 py-2 rounded hover:bg-slate-50">
              <div>
                <div className="font-medium">{s.symbol}</div>
                <div className="text-sm text-slate-500">LTP ₹{s.ltp}</div>
              </div>
              <div className={s.change >= 0 ? 'text-green-600 font-semibold' : 'text-red-600 font-semibold'}>
                {s.percent}%
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </Paper>
  )
}
