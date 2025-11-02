import React, { useState } from "react";
import {
  Paper,
  Avatar,
  Typography,
  Button,
  Tabs,
  Tab,
  Divider,
  Box,
} from "@mui/material";
import { motion, AnimatePresence } from "framer-motion";
import { useAuth } from "../contex/AuthContext";

export default function ProfilePage() {
  const { user, logout } = useAuth();
  const [activeTab, setActiveTab] = useState(0);

  const handleTabChange = (event, newValue) => setActiveTab(newValue);

  const animationProps = {
    initial: { opacity: 0, y: 10 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -10 },
    transition: { duration: 0.3 },
  };

  const renderTabContent = () => {
    switch (activeTab) {
      case 0:
        return (
          <motion.div {...animationProps}>
            <Typography variant="h6" className="mb-2">
              Funds
            </Typography>
            <Typography variant="body2" className="text-slate-600">
              Total Balance: ₹1,25,000
            </Typography>
            <Typography variant="body2" className="text-slate-600 mt-1">
              Available Margin: ₹85,000
            </Typography>
            <Button variant="contained" color="primary" className="mt-4">
              Add Funds
            </Button>
          </motion.div>
        );
      case 1:
        return (
          <motion.div {...animationProps}>
            <Typography variant="h6" className="mb-2">
              Profile Information
            </Typography>
            <Typography variant="body2" className="text-slate-600">
              Name: {user?.name || "Demo User"}
            </Typography>
            <Typography variant="body2" className="text-slate-600">
              Email: {user?.email || "demo@example.com"}
            </Typography>
            <Typography variant="body2" className="text-slate-600">
              Client ID: ZR12345
            </Typography>
            <Typography variant="body2" className="text-slate-600">
              PAN Number: ABCD1234Z
            </Typography>
            <Typography variant="body2" className="text-slate-600">
              Account Type: Equity + F&O
            </Typography>
          </motion.div>
        );
      case 2:
        return (
          <motion.div {...animationProps}>
            <Typography variant="h6" className="mb-2">
              Settings
            </Typography>
            <Typography variant="body2" className="text-slate-600">
              Email Alerts: On
            </Typography>
            <Typography variant="body2" className="text-slate-600">
              Push Notifications: Enabled
            </Typography>
            <Button variant="outlined" color="primary" className="mt-4">
              Manage Preferences
            </Button>
          </motion.div>
        );
      case 3:
        return (
          <motion.div {...animationProps}>
            <Typography variant="h6" className="mb-2">
              Connected Apps
            </Typography>
            <ul className="list-disc ml-6 text-slate-600">
              <li>TradingView</li>
              <li>Smallcase</li>
              <li>Tickertape</li>
              <li>Streak</li>
            </ul>
            <Button variant="outlined" color="primary" className="mt-4">
              Manage Connections
            </Button>
          </motion.div>
        );
      case 4:
        return (
          <motion.div
            {...animationProps}
            className="flex flex-col items-center justify-center mt-10"
          >
            <Typography variant="h6" className="mb-4">
              Logout Confirmation
            </Typography>
            <Button variant="contained" color="error" onClick={logout}>
              Logout
            </Button>
          </motion.div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Sidebar */}
      <aside className="w-64 bg-white border-r shadow-sm flex flex-col p-6">
        <div className="flex items-center gap-3 mb-8">
          <Avatar sx={{ width: 56, height: 56, bgcolor: "primary.main" }}>
            {(user?.name || "U")[0]?.toUpperCase()}
          </Avatar>
          <div>
            <Typography variant="subtitle1">
              {user?.name || "Demo User"}
            </Typography>
            <Typography variant="body2" className="text-slate-500">
              {user?.email || "demo@example.com"}
            </Typography>
          </div>
        </div>

        <Tabs
          orientation="vertical"
          value={activeTab}
          onChange={handleTabChange}
          textColor="primary"
          indicatorColor="primary"
          sx={{
            alignItems: "flex-start",
            ".MuiTab-root": {
              justifyContent: "flex-start",
              alignItems: "flex-start",
              textAlign: "left",
              paddingLeft: "12px",
              fontWeight: 500,
            },
          }}
        >
          <Tab label="Funds" />
          <Tab label="Profile" />
          <Tab label="Settings" />
          <Tab label="Connected Apps" />
          <Tab label="Logout" />
        </Tabs>
      </aside>

      {/* Main Content */}
      <main className="flex-1 bg-gray-50 p-10">
        <Box
          className="bg-white p-8 rounded-xl shadow-sm border"
          sx={{
            width: "100%",
            height: "100%",
          }}
        >
          <Typography variant="h5" className="mb-4 text-slate-800 font-semibold">
            {["Funds", "Profile", "Settings", "Connected Apps", "Logout"][
              activeTab
            ]}
          </Typography>
          <Divider className="mb-6" />
          <AnimatePresence mode="wait">{renderTabContent()}</AnimatePresence>
        </Box>
      </main>
    </div>
  );
}
