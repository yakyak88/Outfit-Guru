import React, { useState } from "react";
import { Link } from "react-router-dom";

const NavigationMenu = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const closeMenu = () => {
        setIsOpen(false);
    };

    return (
        <div style={{ direction: "ltr" }}>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
                <div className="container">
                    <div></div>
                    <div style={{ direction: "rtl" }}>
                        <button
                            className="navbar-toggler"
                            type="button"
                            onClick={toggleMenu}
                        >
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div
                            className={`collapse navbar-collapse justify-content-end ${
                                isOpen ? "show" : ""
                            }`}
                        >
                            <ul className="navbar-nav">
                                <li className="nav-item">
                                    <Link
                                        className="nav-link"
                                        to="/"
                                        onClick={closeMenu}
                                    >
                                        עמוד הבית
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link
                                        className="nav-link"
                                        to="/saved-sets"
                                        onClick={closeMenu}
                                    >
                                        סטים שמורים
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link
                                        className="nav-link"
                                        to="/items/shoes"
                                        onClick={closeMenu}
                                    >
                                        בניית סט חדש
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default NavigationMenu;
