import React from "react";
import "../CSS/Sidebar.css";
import { useNavigate } from "react-router-dom";

const Sidebar = ({ isOpen, closeSidebar }) => {
    const navigate = useNavigate()
    return (
        <aside className={`sidebar-container ${isOpen ? "sidebar-open" : ""}`}>
            <button className="sidebar-close-btn" onClick={closeSidebar}>✖</button>
            <h2 className="sidebar-title">Admin</h2>
            <nav className="sidebar-nav">
                <ul className="sidebar-list">
                    <li className="sidebar-item" onClick={()=>{navigate("/")}}>Service</li>
                    <li className="sidebar-item" onClick={()=>{navigate("/report")}}>Report</li>
                    <li className="sidebar-item" onClick={()=>{navigate("/master")}}>Master</li>
                </ul>
            </nav>
        </aside>
    );
};

export default Sidebar;
