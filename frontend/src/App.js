import React, { useState } from "react";
import "./App.css"
import Sidebar from "./components/Assets/JS/Sidebar";
import Navbar from "./components/Assets/JS/Navbar";
import Router from "./components/Router/Routes";


const App = () => {
    const [sidebarOpen, setSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setSidebarOpen(!sidebarOpen);
    };

    const closeSidebar = () => {
        setSidebarOpen(false);
    };

    return (
        <div className="app-dashboard-container">
            <Sidebar isOpen={sidebarOpen} closeSidebar={closeSidebar} />
            <div className="app-main-content">

                <Navbar toggleSidebar={toggleSidebar} />
                <Router/>
                
            </div>
        </div>
    );
};

export default App;
