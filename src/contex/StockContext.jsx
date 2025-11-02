import React, { createContext, useState, useEffect } from 'react'
import { fetchMockStocks } from '../hooks/useStocks'

export const StockContext = createContext(null)

export const StockProvider = ({ children }) => {
  const [stocks, setStocks] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    let mounted = true
    async function load() {
      setLoading(true)
      const data = await fetchMockStocks()
      if (mounted) {
        setStocks(data)
        setLoading(false)
      }
    }
    load()
    const id = setInterval(load, 7000)
    return () => {
      mounted = false
      clearInterval(id)
    }
  }, [])

  return (
    <StockContext.Provider value={{ stocks, setStocks, loading }}>
      {children}
    </StockContext.Provider>
  )
}
