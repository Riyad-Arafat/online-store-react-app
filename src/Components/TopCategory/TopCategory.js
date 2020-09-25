import React, { Component } from 'react';

import './style.css';

import clothe from './../../images/clothe.png';
import phone from './../../images/phone.png';

class hrefpCategory extends Component {

    render(){
        return(
            <div className="top-category-section">
                <div className="container-fluid my-container">
                    <div className="g-view">
                        <div className="g-title">
                            <a href={`/section/example`}><h3>Fashion</h3></a>
                        </div>
                        <div className="g-content rounded row row-cols-lg-2">
                            <div className="g-row">
                                <div className="g-item">
                                    <a href={`/section/example`} className="rounded shadow">
                                        <img src={clothe} alt="" />
                                        <h4>Sweatshirt</h4>
                                    </a>
                                </div>
                            </div>
                            <div className="g-row row row-cols-lg-2">
                                <div className="g-item">
                                    <a href={`/section/example`} className="rounded shadow">
                                        <img src={clothe} alt="" />
                                        <h4>Sweatshirt</h4>
                                    </a>
                                </div>
                                <div className="g-item">
                                    <a href={`/section/example`} className="rounded shadow">
                                        <img src={clothe} alt="" />
                                        <h4>Sweatshirt</h4>
                                    </a>
                                </div>
                                <div className="g-item">
                                    <a href={`/section/example`} className="rounded shadow">
                                        <img src={clothe} alt="" />
                                        <h4>Sweatshirt</h4>
                                    </a>
                                </div>
                                <div className="g-item">
                                    <a href={`/section/example`} className="rounded shadow">
                                        <img src={clothe} alt="" />
                                        <h4>Sweatshirt</h4>
                                    </a>
                                </div>
                                
                            </div>
                        </div>
                    </div>
                    <br/>
                    <div className="g-view rounded">
                        <div className="g-title">
                            <a href={`/section/example`}><h3>Electronics</h3></a>
                        </div>
                        <div className="g-content rounded row row-cols-lg-2">
                            <div className="g-row">
                                <div className="g-item">
                                    <a href={`/section/example`} className="rounded shadow">
                                        <img src={phone} alt="" />
                                        <h4>Smart Phone</h4>
                                    </a>
                                </div>
                            </div>
                            <div className="g-row row row-cols-lg-2">
                                <div className="g-item">
                                    <a href={`/section/example`} className="rounded shadow">
                                        <img src={phone} alt="" />
                                        <h4>Smart Phone</h4>
                                    </a>
                                </div>
                                <div className="g-item">
                                    <a href={`/section/example`} className="rounded shadow">
                                        <img src={phone} alt="" />
                                        <h4>Smart Phone</h4>
                                    </a>
                                </div>
                                <div className="g-item">
                                    <a href={`/section/example`} className="rounded shadow">
                                        <img src={phone} alt="" />
                                        <h4>Smart Phone</h4>
                                    </a>
                                </div>
                                <div className="g-item">
                                    <a href={`/section/example`} className="rounded shadow">
                                        <img src={phone} alt="" />
                                        <h4>Smart Phone</h4>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default hrefpCategory;