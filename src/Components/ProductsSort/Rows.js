import React , {Component} from "react";
import {connect} from 'react-redux';


// actions 

import {add_to_cart, remove_from_cart} from './../../Actions';


class Rows extends Component{

    render()
    {
        const  {cart, products} = this.props;
        // Return products if Exists
        if (products.length){
            var product   =  products.map( item => {
                // Check if product-Item Exists in Cart 
                if(cart.some(i => i.id === item.id)){
                    var action = (
                    <button
                        className="btn btn-block btn-danger"
                        onClick={()=> this.props.remove_from_cart(item)}>
                        Remove From Cart
                        </button>
                    );
                }else{
                    action = (
                        <button
                         className="btn btn-block btn-primary"
                         onClick={()=> this.props.add_to_cart(item)}>
                            Add TO Cart
                         </button>
                    );
                }
                if(item.sale > 0){
                    var price = item.price * (item.sale/100);
                    
                }else{
                    price = item.price;
                }
                
                return(
                    <div key={item.id} className="card">
                        <a href={`/product/${item.id}`} >
                            <div className="my-card-img"><img src={item.img[0]} alt={item.id}/></div>
                            <div className="card-body">
                                <div className="card-title">{item.title}</div>
                                <div className="item-rate">
                                    <i className="star-reating">
                                        <i className="rate" style={{width: item.rate}} ></i>
                                    </i>
                                </div>
                                <div className="price"><span>{price} EGP</span></div>
                            </div>
                        </a>
                        {action}
                    </div>
                )
            });
        }
        
        // The main Return of Compnents

        return(
            <div className="container-fluid bg-white mt-4">
                <div className="row row-cols-lg-4 row-cols-md-3 row-cols-sm-2 justify-content-center"> 
                    {product}
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


export default connect(mapSteteToProps,{ add_to_cart, remove_from_cart})(Rows);