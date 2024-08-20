import { Link } from "react-router-dom";
import React from "react";

function Navbarc() {
    return (
        <>
            <nav className="navbar naf  navbar-expand-lg ">
                <div className="container">
                    <Link className="ana display-6 nn" to="/">CRUD</Link>

                        <ul className="navbar-nav ms-auto me-auto mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link nnn " aria-current="page" to="/">Home</Link>
                            </li>
                        </ul>

                </div>
            </nav>
        </>
    );
}

export default Navbarc;
