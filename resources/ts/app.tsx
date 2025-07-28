import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/pages/home";
import Login from "./components/pages/login";
import Register from "./components/pages/register";
import DashboardHome from "./components/ui/pages/dashboard/home";
import Dashboard from "./components/pages/dashboard";
import { SidebarDemo } from "./components/ui/pages/dashboard/sidebar";
import DashboardProjects from "./components/ui/pages/dashboard/projects";
import DashboardAi from "./components/ui/pages/dashboard/ai";
import DashboardProfile from "./components/ui/pages/dashboard/profile";

const container = document.getElementById("app");
if (container) {
    const root = ReactDOM.createRoot(container);
    root.render(
        <React.StrictMode>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/auth/login" element={<Login />} />
                    <Route path="/auth/register" element={<Register />} />
                    <Route path="/dashboard" element={<SidebarDemo />}>
                        <Route index element={<Dashboard />} />
                        <Route path="home" element={<DashboardHome />} />
                        <Route path="projects" element={<DashboardProjects />} />
                        <Route path="ai" element={<DashboardAi />} />
                        <Route path="profile" element={<DashboardProfile />} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </React.StrictMode>
    );
}
