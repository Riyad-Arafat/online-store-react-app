import React, {Component, Fragment} from "react";
import {Link} from 'react-router-dom';
import $ from 'jquery';
import "./style.css";
import First from './first';
import Category from './category';
import Cart from "./CartIcon";

class NavBar extends Component {
    
    
    handleSideBar() {
        const off   = $(".off-canavs");
        const side  = $("#root");
        $(off).fadeToggle();
        $(side).toggleClass("open");
        $('body').toggleClass("overflow-x-hidden");
        $('html,body').scrollTop(0);
    }
    render(){
        
        return(
            <Fragment>
                <div id="header" className="fixed-top">
                    <div className="container-fluid p-0">
                        {/** First NaveBar as A Small one */}
                        <First />
                        {/** Second NaveBar that containes the search  Form */}
                        <div id="b-nav" className="border bg-white">
                            <nav className="container navbar-expand-lg navbar-light">
                                <div className="row justify-content-between align-items-center">
                                    <div id="brand-logo" className="d-flex justify-content-center">
                                        <button className="btn border-0 aside-btn" onClick={this.handleSideBar} type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                                            <span className="navbar-toggler-icon"></span>
                                        </button>
                                        <Link className="navbar-brand h1 mb-0" to="/">Store</Link>
                                    </div>
                                    <form id="header-search" className="col form-inline d-none d-lg-flex justify-content-center">
                                        <input className="form-control" type="search" placeholder="Search" aria-label="Search"/>
                                        <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                                    </form>
                                    <Cart />
                                </div>
                            
                            </nav>
                        </div>
                        {/** Third NaveBar that containes the categories*/}
                        <Category />
                    </div>
                </div>
                <div className="off-canavs" onClick={this.handleSideBar}></div>
            </Fragment>    
    
        )
        }
};



export default (NavBar);