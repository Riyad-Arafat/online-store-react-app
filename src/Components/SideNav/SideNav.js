import React,  {Component} from 'react';
import './style.css';



const SideNav = () => {
    
    return(
        <div className="side-nav">
            <ul className="list-unstyled sticky-top">
                <li className="aside-item"><a href="#">HOME</a></li>
                <li className="drop-item">
                    <a href="#">Category<i className="fas fa-caret-down"></i></a>
                    <ul className="drop-group">
                        <li className="aside-item"><a href="">sdasfaf</a></li>
                    </ul>
                </li>
                <li className="aside-item"><a href="#">Customer Service</a></li>
                <li className="aside-item"><a href="#">My Account</a></li>
                <li className="aside-item"><a href="#">Account Summary</a></li>
            </ul>
        </div>
    )
};

export default SideNav;