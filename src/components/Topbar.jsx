import React from 'react'
import { AppBar, Toolbar, InputBase, Avatar, IconButton } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search'
import NotificationsIcon from '@mui/icons-material/Notifications'
import { useAuth } from '../contex/AuthContext'

export default function Topbar() {
  const { user } = useAuth()
  return (
    <AppBar position="static" color="transparent" elevation={0} sx={{ borderBottom: '1px solid rgba(0,0,0,0.06)' }}>
      <Toolbar className="flex justify-between">
        <div className="flex items-center gap-3">
          <div className="bg-slate-100 px-2 py-1 rounded flex items-center gap-2">
            <SearchIcon fontSize="small" />
            <InputBase placeholder="Search stocks, e.g., RELIANCE" />
          </div>
        </div>
        <div className="flex items-center gap-3">
          <IconButton>
            <NotificationsIcon />
          </IconButton>
          <Avatar sx={{ bgcolor: 'primary.main' }}>{(user?.name || 'U')[0].toUpperCase()}</Avatar>
        </div>
      </Toolbar>
    </AppBar>
  )
}
