import React from "react"
import "./style.css"

const FirstNav = () =>{

    return(
        <div id="s-nav">
            <nav className="d-lg-flex d-none m-auto justify-content-xl-between justify-content-end">
                <ul id="pros-list" className="nav d-none d-xl-flex">
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
                <ul id="contact-list" className="nav text-left text-xl-right">
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
export default FirstNav;