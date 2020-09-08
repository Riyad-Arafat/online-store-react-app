import React, {Component} from 'react';
import {connect} from 'react-redux';

import './style.css';



class Reviews extends Component{

    render()
    {
        return(
            <div className="coustmer-reviews mt-5 mb-5">
                <div className="container my-container">
                    <h5>CUSTOMER REVIEWS</h5>
                    <div className="row row-cols-1">
                        <div className="bg-white">
                            <div className="product-rate p-5 container-fluid">
                                <div className="row mb-4">
                                    <div className="col-md-5 text-center border-md-end">
                                        <div className="rate-num">
                                            <strong>5</strong>
                                        </div>
                                        <div className="item-rate">
                                            <i className="star-reating">
                                                <i className="rate" style={{width: "75%"}} ></i>
                                            </i>
                                        </div>   
                                    </div>
                                    <div className="col-md-7">    
                                        <span dir="auto"><strong>100%</strong> of users recommend this product to a friend.Be the first to rate this product</span>
                                        <div className="mt-2">
                                            <h5>Rate this product:</h5>
                                            <div className="item-rate">
                                                <i className="star-reating text-dark">  
                                                </i>
                                            </div>
                                        </div> 
                                    </div>
                                </div>
                                <div className="reviews border-top">
                                    <h3>reviews(5)</h3>
                                    <ul className="list-unstyled">
                                           
                                        <li className="border-bottom">
                                            <div className="item-rate">
                                                <i className="star-reating">
                                                    <i className="rate" style={{width: "75%"}} ></i>
                                                </i>
                                            </div>
                                            <span>by <strong>Riyad</strong> on 10 jun 2020</span>
                                            <div>
                                                <article dir="auto">
                                                    شسينسشبتختبخ
                                                    dsflsdmglrmherhkerheh
                                                    <p>ةخثحتبهحصخث</p>
                                                    <p>askfkofkweol fldm</p>
                                                </article>
                                            </div>
                                            <button className="btn btn-outline-primary">
                                                <i class="far fa-thumbs-up"><span>VOTE</span></i>
                                            </button>
                                        </li>        
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }


}

export default Reviews;