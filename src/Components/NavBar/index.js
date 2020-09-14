import React, {Component, Fragment} from "react";
import $ from 'jquery';
import "./style.css";

// components
import First from './First';
import Category from './Category';
import Cart from "./CartIcon";
import SearchBar from '../searchBar';

class NavBar extends Component {
    constructor(){
        super();
        this.handleSideBar();
        this.toggleNavBar();
        
    }
    handleSideBar() {
        const off   = $(".off-canavs");
        const side  = $(".App");
        $(off).fadeToggle();
        $(side).toggleClass("open");
        $('body').toggleClass("overflow-x-hidden");
        $('html,body').scrollTop(0);
    }
    toggleNavBar(){
        $(window).scroll(function(){
            if($(document).scrollTop() >= 100){
                $("#s-nav").slideUp();
                $("#catergory-nav").slideUp();
            }
            else{
                $("#s-nav").slideDown();
                $("#catergory-nav").slideDown();
            }
        })
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
                                        <a className="navbar-brand h1 mb-0" href="/">Store</a>
                                    </div>
                                    <SearchBar />
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