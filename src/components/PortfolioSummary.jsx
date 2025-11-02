import React from 'react'
import { Paper, Typography, Table, TableBody, TableCell, TableHead, TableRow } from '@mui/material'

const sample = [
  { symbol: 'RELIANCE', qty: 2, avg: 2320.5, ltp: 2350.3 },
  { symbol: 'INFY', qty: 5, avg: 1400.0, ltp: 1420.0 }
]

export default function PortfolioSummary() {
  return (
    <Paper className="p-3">
      <Typography variant="subtitle1" className="mb-2">Portfolio Summary</Typography>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Symbol</TableCell>
            <TableCell>Qty</TableCell>
            <TableCell>Avg</TableCell>
            <TableCell>LTP</TableCell>
            <TableCell>P&L</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {sample.map((r) => (
            <TableRow key={r.symbol}>
              <TableCell>{r.symbol}</TableCell>
              <TableCell>{r.qty}</TableCell>
              <TableCell>₹{r.avg}</TableCell>
              <TableCell>₹{r.ltp}</TableCell>
              <TableCell>₹{((r.ltp - r.avg) * r.qty).toFixed(2)}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
  )
}
