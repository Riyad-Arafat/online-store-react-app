import React,  {Component} from 'react';
import {Link} from 'react-router-dom';
import $ from "jquery";
import './style.css';



class SideNav extends Component {


    componentDidMount(){
        this.handelDrop();
    }
    handelDrop = () => {
        $(".drop-item").click(function(){
            var drop = $(this).find(".drop-group");
            if(drop){
                $(drop).slideToggle();
                var i = $(this).find("i")
                if(i){
                    $(i).toggleClass("fa-caret-down fa-caret-up");
                    console.log("sfads")    
                }
            }
        })
    }
    render() {
        return(
            <div className="side-nav">
                <ul className="list-unstyled sticky-top">
                    <li className="aside-item"><Link to="/">HOME</Link></li>
                    <li className="drop-item">
                        <Link to="/">Categories<i className="fas fa-caret-down"></i></Link>
                        <ul className="drop-group list-unstyled p-0">
                            <li className="aside-item"><Link to="/">Example</Link></li>
                            <li className="aside-item"><Link to="/">Example</Link></li>
                            <li className="aside-item"><Link to="/">Example</Link></li>
                            <li className="aside-item"><Link to="/">Example</Link></li>
                            <li className="aside-item"><Link to="/">Example</Link></li>
                            <li className="aside-item"><Link to="/">Example</Link></li>
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