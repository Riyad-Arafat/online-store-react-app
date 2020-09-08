import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

// actions 

import {remove_from_cart, remove_all_cart} from '../Actions';


class Cart extends Component {

    render()
    {
        var totle       =   0,
            checckout   =   null,
            remove_all  =   null;
        const items     = this.props.cart;
        var   item      = items.map(item => {
            totle += item.price
            return(
                <div className="mt-4" key={item.id}>
                    <div className="row">
                        <div className="col-4 overflow-hidden p-0">
                            <Link to={`product/${item.id}`} className="rounded">
                                <img className="img-fluid" src={item.img[0]} alt={item.id} />
                            </Link> 
                        </div>
                        <div className="col">
                            <Link to={`product/${item.id}`}>
                                <span>{item.title}</span>
                            </Link>
                            <div className="row">
                                <div className="col">
                                    <div className="price">{item.price} EGP</div>
                                </div>
                            </div>
                            <button className="btn btn-block btn-danger mt-3" onClick={()=> this.props.remove_from_cart(item)}>Remove</button>
                        </div>
                    </div>  
                    
                </div>
                
            )
        })

        if(items.length === 0){
            item = (
                <div className="alert-warning p-5">
                    <p className="lead">
                        Shopping cart is currently empty Add items to your cart and view them here before you checkout. <a style={{color:"blue"}} href='/'>Continue shopping!</a>
                    </p>
                </div>
            )
        }

        if(totle > 0){
            checckout = (
                <div className="col-md-4">
                    <div className="rounded bg-white  sticky-top" style={{top:'172px'}}>
                        <div className="shadow p-5">
                            <h6>Total: <b className="price">{totle} EGP</b></h6>
                        </div>
                        <button className="btn btn-block btn-success mt-1">CHECKOUT</button>
                    </div>
                    
                </div>
            )
            remove_all = (
                <button className="btn btn-outline-danger" onClick={()=> this.props.remove_all_cart()}>Remove All</button>
            )
        }

        return(
            <main className="mb-5 pb-5">
                <div className="container mb-5 pb-5">
                    <div className="row">
                        <div className="col-md-8 mb-5">
                            <div className="d-flex justify-content-between">
                                <h3>Shopping Cart ({items.length})</h3>
                                {remove_all}
                            </div>
                            <div className="rounded bg-white p-4">
                                {item}
                            </div>
                        </div>
                        {checckout}
                    </div>
                </div>
            </main>
            
        )
    }
}

function mapSteteToProps(state){
    return{
        cart: state.cart
    }

}

export default connect(mapSteteToProps, {remove_from_cart, remove_all_cart})(Cart)