import React from 'react'
import { Paper, Typography } from '@mui/material'
import { Line } from 'react-chartjs-2'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend
} from 'chart.js'
import { motion } from 'framer-motion'

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Tooltip, Legend)

const data = {
  labels: Array.from({ length: 20 }, (_, i) => `T-${20 - i}`),
  datasets: [
    {
      label: 'Price (₹)',
      data: Array.from({ length: 20 }, () => 1500 + Math.random() * 30),
      fill: false,
      tension: 0.3
    }
  ]
}

export default function ChartView() {
  return (
    <motion.div initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }}>
      <Paper className="p-4">
        <Typography variant="subtitle1" className="mb-2">Price Chart</Typography>
        <div className="chart-container">
          <Line data={data} options={{ responsive: true, maintainAspectRatio: false }} />
        </div>
      </Paper>
    </motion.div>
  )
}
