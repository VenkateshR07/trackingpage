import React, { useState } from "react";
import "../CSS/Navbar.css";

const Navbar = ({ toggleSidebar }) => {
    return (
        <header className="navbar-top-bar">
            <button className="navbar-hamburger" onClick={toggleSidebar}>
                ☰
            </button>
            <input type="text" placeholder="Search..." className="navbar-search-input" />
            <div className="navbar-profile">Profile</div>
        </header>
    );
};

export default Navbar;
