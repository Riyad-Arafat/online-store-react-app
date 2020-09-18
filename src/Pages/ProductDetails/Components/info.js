import React, {Component} from 'react';
import {connect} from 'react-redux';
import './style.css';

import ImgSlider from '../../../Components/ImagSlider/Slider'

// actions 

import {add_to_cart, remove_from_cart} from '../../../Actions';


class ProductInfo extends Component{
    render()
    {
        var {products, cart, item} = this.props;
        var product = null,     
        id = parseInt(item);
        /// Return the product
        products.map(item => {
            if(item.id === id){
               return product = item;
            }
            return null;
        })
        var was         = null,
            features    = null,
            left        = null;

        if(product.sale > 0){
            was = (
                <div>
                    <span className="was">
                        {product.price} EGP 
                    </span>
                    <span className=" text-dark bold font-weight-bold"> {product.sale}% off</span>
                    
                </div>
            );
        }
        if(product.features && product.features.length > 0){
            features = (
                <div>
                    <h6>Product Features:</h6>
                    <ul>
                        {
                        product.features.map(feature =>{
                            return(
                                <li key={feature}>{feature}</li>
                            )
                        })
                        
                        }
                    </ul>
                </div>
            )
        }
        if(product.left <= 10){
            left = (
                <div className="text-danger font-weight-bold under-boreder">Only {product.left} left in stock!</div>
            )
        }

        //// ADD and REMOVE from Cart 
        if(cart.some(i => i.id === product.id)){
            var action = (
            <button
                className="btn btn-danger"
                onClick={()=> this.props.remove_from_cart(product)}>
                Remove From Cart
                </button>
            );
        }else{
            action = (
                <button
                 className="btn btn-primary"
                 onClick={()=> this.props.add_to_cart(product)}>
                    Add TO Cart
                </button>
            );
        }
        return(
            <div className='container-fluid mt-4 p-4 bg-white'>
                <div className="row justify-content-center">
                    <div className="col-lg-6">
                        <div className="row row-cols-1 justify-content-center mb-5">
                            
                            <div>
                            <ImgSlider images={product.img} />
                            </div>
                        </div>
                    </div>
                    <div className="col d-flex flex-column align-self-center">
                        <div className="row row-cols-1">
                            <div className="col">
                                <div className="g-title">
                                    <h3>{product.title}</h3>
                                </div>
                                <div className="item-rate">
                                    <i className="star-reating">
                                        <i className="rate" style={{width: product.rate}} ></i>
                                    </i>
                                </div>   
                                <div className="price-container under-boreder">
                                    <div className="price">
                                        <h3>{product.fPrice} <span className="currency-text">EGP</span></h3>
                                    </div>
                                    {was}
                                </div>
                                <div className="description-continer">
                                    <div>
                                        <h6>Description:</h6>
                                        <p className="lead">{product.description}</p>
                                    </div>
                                    <div>
                                        <h6>
                                            Brand: <span className="lead">{product.brand}</span>
                                        </h6>
                                    </div>
                                    {features}
                                </div>
                                <div>
                                    {action}
                                    {left}
                                </div>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

function mapSteteToProps(state){
    return{
        products : state.products,
        cart: state.cart
    }
}

export default connect(mapSteteToProps,{ add_to_cart, remove_from_cart})(ProductInfo);;