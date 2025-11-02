import React from 'react'
import { Paper, Skeleton } from '@mui/material'

export default function SkeletonLoader() {
  return (
    <Paper className="p-3">
      <Skeleton variant="text" width="40%" sx={{ mb: 1 }} />
      <Skeleton variant="rectangular" height={60} sx={{ mb: 1 }} />
      <div className="flex gap-2">
        <Skeleton variant="rectangular" width={120} height={100} />
        <Skeleton variant="rectangular" width={120} height={100} />
      </div>
    </Paper>
  )
}
