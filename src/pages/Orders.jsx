import React from 'react'
import { Paper, Typography } from '@mui/material'

export default function Orders() {
  return (
    <div className="p-6">
      <Paper className="p-4">
        <Typography variant="h6">Orders</Typography>
        <Typography variant="body2" className="mt-2">No orders yet — demo view</Typography>
      </Paper>
    </div>
  )
}
