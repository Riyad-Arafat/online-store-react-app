import React  from "react";
import "./style.css";

const ThirdNav = () => {

    return (
        <div id="catergory-nav" className="bg-light">
            <nav className="d-lg-flex d-none m-auto align-items-center justify-content-center">
                <a href="#">All catergory</a>
                <ul id="catergory-list" className="nav">
                    <li className="nav-item">
                        <a className="nav-link" href="#">Free Shipping</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Free Shipping</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Free Shipping</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Free Shipping</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Free Shipping</a>
                    </li>
                </ul>
            </nav>
        </div>
    )
};

export default ThirdNav;