import React, {Component, Fragment} from 'react';
import {Link} from 'react-router-dom';
import './style.css';



class Footer extends Component {

    render(){
        return(
            <Fragment>
                <div className="footer">
                    <div className="container-fluid">
                        <div className="first-row">
                            <div className="row row-cols-lg-4">
                                <div className="col">
                                    <h5><b>POPULAR SEARCHES</b></h5>
                                    <ul className="list-unstyled">
                                        <li><Link to="#">Link Example</Link></li>
                                        <li><Link to="#">Link Example</Link></li>
                                        <li><Link to="#">Link Example</Link></li>
                                        <li><Link to="#">Link Example</Link></li>
                                        <li><Link to="#">Link Example</Link></li>
                                    </ul>
                                </div>
                                <div className="col">
                                    <div>
                                        <h5><b>MY ACCOUNT</b></h5>
                                        <ul className="list-unstyled">
                                            <li><Link to="#">Link Example</Link></li>
                                            <li><Link to="#">Link Example</Link></li>
                                            <li><Link to="#">Link Example</Link></li>
                                        </ul>
                                    </div>
                                    <div>
                                        <h5><b>INTELLECTUAL PROPERTY</b></h5>
                                        <ul className="list-unstyled">
                                            <li><Link to="#">Link Example</Link></li>
                                            <li><Link to="#">Link Example</Link></li>
                                            <li><Link to="#">Link Example</Link></li>
                                        </ul>
                                    </div>
                
                                </div>
                                <div className="col">
                                    <div>
                                        <h5><b>SELLING ON Store</b></h5>
                                        <ul className="list-unstyled">
                                            <li><Link to="#">Link Example</Link></li>
                                            <li><Link to="#">Link Example</Link></li>
                                            <li><Link to="#">Link Example</Link></li>
                                        </ul>
                                    </div>
                                    <div>
                                        <h5><b>BUYING ON Store</b></h5>
                                        <ul className="list-unstyled">
                                            <li><Link to="#">Link Example</Link></li>
                                            <li><Link to="#">Link Example</Link></li>
                                            <li><Link to="#">Link Example</Link></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col">
                                    <div>
                                        <h5><b>Follow US</b></h5>
                                        <ul className="list-group list-group-horizontal list-unstyled social-media">
                                            <li><Link target="_blank" to="#"><i className="fa fa-facebook"></i></Link></li>
                                            <li><Link target="_blank" to="#"><i className="fa fa-twitter"></i></Link></li>
                                            <li><Link target="_blank" to="#"><i className="fa fa-instagram"></i></Link></li>
                                            <li><Link target="_blank" to="#"><i className="fa fa-youtube"></i></Link></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Fragment>
        )
    }
};


export default Footer;