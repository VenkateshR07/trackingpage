import React from "react";
import "../CSS/Sidebar.css";

const Sidebar = ({ isOpen, closeSidebar }) => {
    return (
        <aside className={`sidebar-container ${isOpen ? "sidebar-open" : ""}`}>
            <button className="sidebar-close-btn" onClick={closeSidebar}>✖</button>
            <h2 className="sidebar-title">Admin</h2>
            <nav className="sidebar-nav">
                <ul className="sidebar-list">
                    <li className="sidebar-item">Service</li>
                    <li className="sidebar-item">Report</li>
                    <li className="sidebar-item">Master</li>
                </ul>
            </nav>
        </aside>
    );
};

export default Sidebar;
