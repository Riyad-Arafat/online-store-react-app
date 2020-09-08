import React, {Component} from 'react';
import {connect} from 'react-redux';

import './style.css';


import ImgSlider from '../../../Components/ImagSlider/Slider'


// actions 

import {add_to_cart, remove_from_cart} from '../../../Actions';


class Product extends Component{
    render()
    {
        var {products, cart, item} = this.props;
        var product  = null,
        id = parseInt(item);

        products.map(item => {
            if(item.id === id){
               return product = item;
            }
            return null;
        })
    
        if(cart.some(i => i.id === product.id)){
            var action = (
            <button
                className="btn btn-block btn-danger"
                onClick={()=> this.props.remove_from_cart(product)}>
                Remove From Cart
                </button>
            );
        }else{
            action = (
                <button
                 className="btn btn-block btn-primary"
                 onClick={()=> this.props.add_to_cart(product)}>
                    Add TO Cart
                </button>
            );
        }
        

        return(
            <div className='container mt-4 p-4 bg-white'>
                <div className="row justify-content-center">
                    <div className="col-lg-4">
                        <div className="row row-cols-1 justify-content-center mb-5">
                            <div>
                                <h3>{product.title}</h3>
                            </div>
                            <div>
                            <ImgSlider images={product.img} />
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="row row-cols-1 row-cols-md-2">
                            <div className="col">
                                <div className="price-container under-boreder">
                                    <div className="price">
                                        <h3>{product.price} <span className="currency-text">EGP</span></h3>
                                    </div>
                                    <div className="was">
                                        <h6 className="">100 <span className="currency-text">EGP</span></h6>
                                    </div>
                                </div>
                                <div className="color-container under-boreder">
                                    <h5>Color:</h5>
                                    <div className="colors">
                                        <div className="p-color"></div>
                                        <div className="p-color"></div>
                                        <div className="p-color"></div>
                                        <div className="p-color"></div>
                                        <div className="p-color"></div>
                                        <div className="p-color"></div>
                                        <div className="p-color"></div>
                                        <div className="p-color"></div>
                                    </div>
                                </div>
                                <div className="description-continer">
                                    <div>
                                        <h6>Description:</h6>
                                        <p className="lead">mjwigjerjoerjhoeprhpoejrohejnkdngfrhgeirhjirejhejrihojeriohjeriohjioe</p>
                                    </div>
                                    <div>
                                        <h6>
                                            Brand: <span className="lead">Dell</span>
                                        </h6>
                                    </div>
                                    <div>
                                        <h6>Product Features:</h6>
                                        <ul>
                                            <li>sjagojropgje</li>
                                            <li>sjagojropgje</li>
                                            <li>sjagojropgje</li>
                                            <li>sjagojropgje</li>
                                            <li>sjagojropgje</li>
                                        </ul>
                                    </div>
                                    
                                </div>
                            </div>
                            <div className="col">
                                <div className="under-boreder">
                                    {action }
                                    <span className="text-danger font-weight-bold">Only 1 left in stock!</span>
                                </div>
                                <table  className="more-info">
                                    <tbody>
                                        <tr>
                                            <td><b>saler</b></td>
                                            <td>Maria Anders</td>
                                        </tr>
                                    </tbody>
                                </table>
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

export default connect(mapSteteToProps,{ add_to_cart, remove_from_cart})(Product);;