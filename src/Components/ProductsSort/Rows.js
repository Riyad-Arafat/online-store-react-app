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
            if(this.props.query){
                var product   =  products.filter(item => item.title.toLowerCase().indexOf(this.props.query.toLowerCase()) !== -1)
                if(this.props.max){
                    product = product.filter( item => item.price <= parseInt(this.props.max) && item.price >= parseInt(this.props.min))
                    if(product.length < 1){
                        var x = (<h6>with this min and max price</h6>)
                    }
                }
            }else{
                product   =  products.filter(item => item.section === this.props.section)
            }
            product = product.map( item => {
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
                
                return(
                    <div key={item.id} className="card w-100 border-info">
                        <a href={`/product/${item.id}`} >
                            <div className="my-card-img"><img src={item.img[0]} alt={item.id}/></div>
                            <div className="card-body">
                                <div className="card-title">{item.title}</div>
                                <div className="item-rate">
                                    <i className="star-reating">
                                        <i className="rate" style={{width: item.rate}} ></i>
                                    </i>
                                </div>
                                <div className="price"><span>{item.price} EGP</span></div>
                            </div>
                        </a>
                        {action}
                    </div>
                )
            });
        }
        
        // The main Return of Compnents
        if (product.length){
            return(
                <div>
                    <div className="row row-cols-lg-4 row-cols-md-3 row-cols-sm-2 justify-content-center"> 
                        {product}
                    </div>
                </div>
            )
        }else{
            return(
                <div className="container">
                    <div className="text-center bg-white shadow p-5 mb-5">
                        <h3>Sorry there isn't result for <span className="text-danger">{this.props.query}</span></h3>
                        {x}
                    </div>
                </div>
            )
        }
        
    }
}

function mapSteteToProps(state){
    return{
        products : state.products,
        cart: state.cart
    }
}


export default connect(mapSteteToProps,{ add_to_cart, remove_from_cart})(Rows);