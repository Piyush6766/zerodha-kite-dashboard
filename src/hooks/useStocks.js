// mock stocks fetcher (returns slightly different numbers each call)
export function fetchMockStocks() {
  return new Promise((res) => {
    setTimeout(() => {
      const now = Date.now()
      const base = 1500
      const symbols = ['RELIANCE', 'TCS', 'INFY', 'HDFCBANK', 'ICICIBANK']
      const data = symbols.map((s, i) => {
        const change = +(Math.sin((now / 200000) * (i + 1)) * 6 + (Math.random() - 0.5) * 3).toFixed(2)
        const ltp = +(base * (1 + i * 0.02) + change).toFixed(2)
        return {
          symbol: s,
          ltp,
          change,
          percent: +((change / (ltp || 1)) * 100).toFixed(2)
        }
      })
      res(data)
    }, 600)
  })
}
