import { createTheme } from '@mui/material/styles'

const theme = createTheme({
  palette: {
    mode: 'light',
    primary: { main: '#0056A4' }, 
  secondary: { main: '#FF8000' } 
  },
  typography: {
    fontFamily: 'Inter, ui-sans-serif, system-ui, -apple-system, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial'
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: { borderRadius: 10 }
      }
    }
  }
})

export default theme
