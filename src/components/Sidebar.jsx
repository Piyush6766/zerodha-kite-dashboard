import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../contex/AuthContext'
import { Home, PieChart, Users, LogOut } from 'lucide-react'
import { motion } from 'framer-motion'

const items = [
  { to: '/', label: 'Dashboard', icon: <Home size={16} /> },
  { to: '/orders', label: 'Orders', icon: <PieChart size={16} /> },
  { to: '/holdings', label: 'Holdings', icon: <Users size={16} /> },
  { to: '/profile', label: 'Profile', icon: <Users size={16} /> }
]

export default function Sidebar() {
  const nav = useNavigate()
  const { logout } = useAuth()
  return (
    <aside className="w-60 bg-white shadow-md flex flex-col justify-between p-4">
      <div>
        <h1 className="text-xl font-bold text-blue-600 mb-6">ZERODHA Kite</h1>
        <nav className="space-y-2">
          {items.map((it) => (
            <motion.div whileHover={{ x: 6 }} key={it.label}>
              <button
                className="w-full text-left flex items-center gap-3 px-3 py-2 rounded hover:bg-slate-50"
                onClick={() => nav(it.to)}
              >
                <span className="text-slate-600">{it.icon}</span>
                <span>{it.label}</span>
              </button>
            </motion.div>
          ))}
        </nav>
      </div>
      <div>
        <button
          className="w-full flex items-center gap-2 text-sm text-red-600 hover:text-red-700"
          onClick={() => logout()}
        >
          <LogOut size={16} />
          Logout
        </button>
      </div>
    </aside>
  )
}
