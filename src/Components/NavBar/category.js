import React  from "react";
import {Link} from 'react-router-dom';
import "./style.css";

const ThirdNav = () => {

    return (
        <div className="catergory-nav bg-light">
            <nav className="d-lg-flex d-none m-auto align-items-center justify-content-center">
                <Link to={`/section/${0}`}>All catergory</Link>
                <ul id="catergory-list" className="nav">
                    <li className="nav-item">
                        <Link className="nav-link" to={`/section/${0}`}>catergory Name</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to={`/section/${0}`}>catergory Name</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to={`/section/${0}`}>catergory Name</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to={`/section/${0}`}>catergory Name</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to={`/section/${0}`}>catergory Name</Link>
                    </li>
                </ul>
            </nav>
        </div>
    )
};

export default ThirdNav;