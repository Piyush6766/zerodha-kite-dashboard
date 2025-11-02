import React, { useState } from 'react'
import { Paper, Typography, TextField, MenuItem, Button, Box } from '@mui/material'
import { motion } from 'framer-motion'

export default function OrderPanel() {
  const [symbol, setSymbol] = useState('RELIANCE')
  const [qty, setQty] = useState(1)
  const [type, setType] = useState('Limit')

  const place = (side) => {
    // mock placement: show console; integrate with backend later
    console.log(`Place ${side} ${qty} ${symbol} (${type})`)
    alert(`${side} order placed (mock)`)
  }

  return (
    <motion.div initial={{ x: 8, opacity: 0 }} animate={{ x: 0, opacity: 1 }}>
      <Paper className="p-4">
        <Typography variant="subtitle1" className="mb-2">Place Order</Typography>
        <TextField label="Symbol" value={symbol} onChange={(e) => setSymbol(e.target.value)} fullWidth margin="dense" />
        <TextField
          label="Quantity"
          type="number"
          value={qty}
          onChange={(e) => setQty(Number(e.target.value))}
          fullWidth
          margin="dense"
        />
        <TextField select label="Type" value={type} onChange={(e) => setType(e.target.value)} fullWidth margin="dense">
          <MenuItem value="Market">Market</MenuItem>
          <MenuItem value="Limit">Limit</MenuItem>
        </TextField>
        <Box className="flex gap-2 mt-3">
          <Button variant="contained" color="success" fullWidth onClick={() => place('Buy')}>
            Buy
          </Button>
          <Button variant="contained" color="error" fullWidth onClick={() => place('Sell')}>
            Sell
          </Button>
        </Box>
      </Paper>
    </motion.div>
  )
}
