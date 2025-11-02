import React, { createContext, useState, useContext } from 'react'

const AuthContext = createContext(null)

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null)

  // Simple demo login; replace with real auth later
  const login = (email, password) => {
    if (!email || !password) return { ok: false, message: 'Invalid' }
    // In real app: call backend -> if ok set user and token
    setUser({ email, name: email.split('@')[0] })
    return { ok: true }
  }

  const logout = () => {
    setUser(null)
  }

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => useContext(AuthContext)
