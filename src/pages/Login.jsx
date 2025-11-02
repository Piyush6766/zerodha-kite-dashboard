import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../contex/AuthContext'
import { motion } from 'framer-motion'
import { Paper } from '@mui/material'

export default function Login() {
  const { login } = useAuth()
  const navigate = useNavigate()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [err, setErr] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    const res = login(email, password)
    if (res?.ok) {
      navigate('/', { replace: true })
    } else {
      setErr(res.message || 'Login failed')
    }
  }

  return (
    <div className="flex items-center justify-center h-screen bg-slate-50 p-4">
      <motion.div initial={{ opacity: 0, y: -12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3 }}>
        <Paper elevation={6} className="p-8 rounded-2xl w-96">
          <h2 className="text-2xl font-semibold text-center mb-4">ZERODHA Kite — Sign in</h2>
          <form onSubmit={handleSubmit} className="flex flex-col gap-3">
            <input
              className="border rounded px-3 py-2"
              type="email"
              placeholder="you@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <input
              className="border rounded px-3 py-2"
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            {err && <div className="text-sm text-red-600">{err}</div>}
            <button className="bg-blue-600 text-white px-3 py-2 rounded hover:bg-blue-700 mt-1" type="submit">
              Sign In
            </button>
          </form>
        </Paper>
      </motion.div>
    </div>
  )
}
