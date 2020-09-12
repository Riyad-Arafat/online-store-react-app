import React, { Component } from 'react';
import {Link} from 'react-router-dom';

import './style.css';

import clothe from './../../images/clothe.png';
import phone from './../../images/phone.png';

class TopCategory extends Component {

    render(){
        return(
            <div id="top-category-section">
                <div className="container-fluid my-container">
                    <div className="g-view">
                        <div className="g-title">
                            <Link to={`/section/example`}><h3>Fashion</h3></Link>
                        </div>
                        <div className="g-content rounded row row-cols-lg-2">
                            <div className="g-row">
                                <div className="g-item">
                                    <Link to={`/section/example`} className="rounded shadow">
                                        <img src={clothe} alt="" />
                                        <h4>Sweatshirt</h4>
                                    </Link>
                                </div>
                            </div>
                            <div className="g-row row row-cols-lg-2">
                                <div className="g-item">
                                    <Link to={`/section/example`} className="rounded shadow">
                                        <img src={clothe} alt="" />
                                        <h4>Sweatshirt</h4>
                                    </Link>
                                </div>
                                <div className="g-item">
                                    <Link to={`/section/example`} className="rounded shadow">
                                        <img src={clothe} alt="" />
                                        <h4>Sweatshirt</h4>
                                    </Link>
                                </div>
                                <div className="g-item">
                                    <Link to={`/section/example`} className="rounded shadow">
                                        <img src={clothe} alt="" />
                                        <h4>Sweatshirt</h4>
                                    </Link>
                                </div>
                                <div className="g-item">
                                    <Link to={`/section/example`} className="rounded shadow">
                                        <img src={clothe} alt="" />
                                        <h4>Sweatshirt</h4>
                                    </Link>
                                </div>
                                
                            </div>
                        </div>
                    </div>
                    <br/>
                    <div className="g-view rounded">
                        <div className="g-title">
                            <Link to={`/section/example`}><h3>Electronics</h3></Link>
                        </div>
                        <div className="g-content rounded row row-cols-lg-2">
                            <div className="g-row">
                                <div className="g-item">
                                    <Link to={`/section/example`} className="rounded shadow">
                                        <img src={phone} alt="" />
                                        <h4>Smart Phone</h4>
                                    </Link>
                                </div>
                            </div>
                            <div className="g-row row row-cols-lg-2">
                                <div className="g-item">
                                    <Link to={`/section/example`} className="rounded shadow">
                                        <img src={phone} alt="" />
                                        <h4>Smart Phone</h4>
                                    </Link>
                                </div>
                                <div className="g-item">
                                    <Link to={`/section/example`} className="rounded shadow">
                                        <img src={phone} alt="" />
                                        <h4>Smart Phone</h4>
                                    </Link>
                                </div>
                                <div className="g-item">
                                    <Link to={`/section/example`} className="rounded shadow">
                                        <img src={phone} alt="" />
                                        <h4>Smart Phone</h4>
                                    </Link>
                                </div>
                                <div className="g-item">
                                    <Link to={`/section/example`} className="rounded shadow">
                                        <img src={phone} alt="" />
                                        <h4>Smart Phone</h4>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default TopCategory;