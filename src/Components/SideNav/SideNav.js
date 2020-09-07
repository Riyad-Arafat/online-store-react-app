import React,  {Component} from 'react';
import {Link} from 'react-router-dom';
import './style.css';



class SideNav extends Component {
    render() {
        return(
            <div className="side-nav">
                <ul className="list-unstyled sticky-top">
                    <li className="aside-item"><Link to="/">HOME</Link></li>
                    <li className="drop-item">
                        <Link to="/">Category<i className="fas fa-caret-down"></i></Link>
                        <ul className="drop-group">
                            <li className="aside-item"><Link to="">sdasfaf</Link></li>
                        </ul>
                    </li>
                    <li className="aside-item"><Link to="/">Customer Service</Link></li>
                    <li className="aside-item"><Link to="/">My Account</Link></li>
                    <li className="aside-item"><Link to="/">Account Summary</Link></li>
                </ul>
            </div>
        )
    }
};

export default SideNav;