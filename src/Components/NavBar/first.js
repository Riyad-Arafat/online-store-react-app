import React from "react"
import {Link} from 'react-router-dom';
import "./style.css"

const FirstNav = () =>{

    return(
        <div className="s-nav">
            <nav className="d-lg-flex d-none m-auto justify-content-xl-between justify-content-end">
                <ul id="pros-list" className="nav d-none d-xl-flex">
                    <li className="nav-item">
                        <Link className="nav-link" to="#">Link Ex</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="#">Link Ex</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="#">Link Ex</Link>
                    </li>
                </ul>
                <ul id="contact-list" className="nav text-left text-xl-right">
                    <li className="nav-item">
                        <Link className="nav-link" to="#">Link Ex</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="#">Link Ex</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="#">Link Ex</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="#">Link Ex</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="#">Link Ex</Link>
                    </li>
                </ul>
            </nav>
        </div>
    )

};
export default FirstNav;