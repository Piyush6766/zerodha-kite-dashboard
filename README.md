# 🪶 Zerodha Kite Dashboard Clone

A **modern Zerodha Kite Dashboard UI (Post Login)** built with **React**, **Material-UI (MUI)**, **Tailwind CSS**, **Framer Motion**, and **React Router DOM**.  
It includes authentication, protected routes, a detailed profile section, funds overview, connected apps, settings management, and smooth animations inspired by the real Zerodha platform.

---

## 🖼️ Preview

live demo: https://zerodha-kite-dashboard-seven.vercel.app/

## ✨ Features

✅ **Authentication & Protected Routes**  
- Secure login/logout using Context API  
- Redirects to login on page refresh or if unauthenticated  
- Session stored in `localStorage`  

✅ **Modern UI & Styling**  
- Built with **MUI + Tailwind hybrid styling**  
- Zerodha-like **light theme** and typography  
- Fully responsive and clean layout  

✅ **Profile Section**  
Includes multiple interactive tabs:
- 💰 **Funds** – shows total balance and available margin  
- 👤 **Profile** – displays user info, client ID, PAN, etc.  
- ⚙️ **Settings** – email alerts, push notifications, preferences  
- 🔗 **Connected Apps** – TradingView, Smallcase, Streak, etc.  
- 🚪 **Logout** – confirmation and session clear  

✅ **Animations & UX**  
- Powered by **Framer Motion** for smooth transitions  
- Skeleton loading states (for realistic feel)  
- Clean, modular, and scalable component design  

---

## 🏗️ Tech Stack

| Technology | Purpose |
|-------------|----------|
| **React 18+** | Core frontend framework |
| **Material-UI (MUI v5)** | Pre-styled React components |
| **Tailwind CSS** | Utility-first styling for layout & design |
| **Framer Motion** | Page and tab animations |
| **React Router DOM** | Navigation & route protection |
| **Context API** | Authentication management |
| **Vite** | Fast development build tool |

---

## 🎨 Zerodha-Inspired Theme

**`muiTheme.js`**
```js
import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  palette: {
    mode: "light",
    primary: { main: "#1976d2" },   // Zerodha Blue
    secondary: { main: "#0f172a" }, // Dark Navy
    background: { default: "#f8fafc", paper: "#ffffff" },
  },
  typography: {
    fontFamily: "'Inter', 'Roboto', sans-serif",
  },
});
