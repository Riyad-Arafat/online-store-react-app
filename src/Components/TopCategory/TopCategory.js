import React, { Component } from 'react';
import {Link} from 'react-router-dom';

import './style.css';



class TopCategory extends Component {

    render(){
        return(
            <div id="top-category-section">
                <div className="container-fluid my-container">
                    <div className="g-view">
                        <div className="g-title">
                            <Link to="#"><h3>Fashion</h3></Link>
                        </div>
                        <div className="g-content rounded row row-cols-lg-2">
                            <div className="g-row">
                                <div className="g-item">
                                    <Link to="#" className="rounded shadow">
                                        <img src="https://riyadelberkawy.github.io/personal/files/front-end/Personal.PNG" alt="" />
                                        <h4>sadasf</h4>
                                    </Link>
                                </div>
                            </div>
                            <div className="g-row row row-cols-lg-2">
                                <div className="g-item">
                                    <Link to="#" className="rounded shadow">
                                        <img src="https://riyadelberkawy.github.io/personal/files/front-end/Personal.PNG" alt="" />
                                        <h4>sadasf</h4>
                                    </Link>
                                </div>
                                <div className="g-item">
                                    <Link to="#" className="rounded shadow">
                                        <img src="https://riyadelberkawy.github.io/personal/files/front-end/Personal.PNG" alt="" />
                                        <h4>sadasf</h4>
                                    </Link>
                                </div>
                                <div className="g-item">
                                    <Link to="#" className="rounded shadow">
                                        <img src="https://riyadelberkawy.github.io/personal/files/front-end/Personal.PNG" alt="" />
                                        <h4>sadasf</h4>
                                    </Link>
                                </div>
                                <div className="g-item">
                                    <Link to="#" className="rounded shadow">
                                        <img src="https://riyadelberkawy.github.io/personal/files/front-end/Personal.PNG" alt="" />
                                        <h4>sadasf</h4>
                                    </Link>
                                </div>
                                
                            </div>
                        </div>
                    </div>
                    <br/>
                    <div className="g-view rounded">
                        <div className="g-title">
                            <Link to="#"><h3>Accessories</h3></Link>
                        </div>
                        <div className="g-content rounded row row-cols-lg-2">
                            <div className="g-row">
                                <div className="g-item">
                                    <Link to="#" className="rounded shadow">
                                        <img src="https://riyadelberkawy.github.io/personal/files/front-end/Personal.PNG" alt="" />
                                        <h4>sadasf</h4>
                                    </Link>
                                </div>
                            </div>
                            <div className="g-row row row-cols-lg-2">
                                <div className="g-item">
                                    <Link to="#" className="rounded shadow">
                                        <img src="https://riyadelberkawy.github.io/personal/files/front-end/Personal.PNG" alt="" />
                                        <h4>sadasf</h4>
                                    </Link>
                                </div>
                                <div className="g-item">
                                    <Link to="#" className="rounded shadow">
                                        <img src="https://riyadelberkawy.github.io/personal/files/front-end/Personal.PNG" alt="" />
                                        <h4>sadasf</h4>
                                    </Link>
                                </div>
                                <div className="g-item">
                                    <Link to="#" className="rounded shadow">
                                        <img src="https://riyadelberkawy.github.io/personal/files/front-end/Personal.PNG" alt="" />
                                        <h4>sadasf</h4>
                                    </Link>
                                </div>
                                <div className="g-item">
                                    <Link to="#" className="rounded shadow">
                                        <img src="https://riyadelberkawy.github.io/personal/files/front-end/Personal.PNG" alt="" />
                                        <h4>sadasf</h4>
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