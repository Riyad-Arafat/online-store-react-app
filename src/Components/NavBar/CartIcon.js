import React, {Component, Fragment} from "react";
import {connect} from 'react-redux';
import styled from "styled-components";
import $ from 'jquery';
import "./style.css";

class Cart extends Component{
    handleDrop(){
            $(".Drop").slideToggle();
    }
    render(){
        ///// Return Number of Items That is in Cart
        const num = () => {
            if (this.props.cart.length){
                return this.props.cart.length;
            }
        }

        ///// Sryle Component
        const Cart = styled.a`
            position: relative;
            font-size: 15pt;
            ::before{
                content: "${num}";
                position: absolute;
                top: 0px;
                left: -20px;
                background: red;
                color: #ffff;
                padding: 0px 10px;
                border-radius: 100%;
            }
        `;

        const Drop  = styled.div`
            position: absolute;
            width: 318px;
            left: -269px;
            top: 52px;
            background-color: #ffff;
            padding: 5px;
        `;

        const Item = styled.a`
            display: grid;
            grid-template-columns: 79px auto;
            overflow-wrap: anywhere;
            border-block-start: 1px solid #000000;
        `;

        const img = {
            height: '50px',
            objectFit: 'cover'
        
        }

        

        ///// Return Items That is in Cart
        const items = this.props.cart;
        var item  = items.map(item => {
            return(
                <Item href={item.link} key={item.id}>
                    <div  className="overflow-hidden rounded p-2">
                        <img style={img} className="img-fluid" src={item.img} />
                    </div>
                    <div className="title" >
                        <p className="lead">{item.title}</p>
                    </div>
                </Item>
            )
        })
        if(items.length == 0){
            item   = (
                <div className="d-flex justify-content-center">
                    <h3>Ther Is Nothing in Cart</h3>
                </div>
            )    
        }

        
        return(
            <Fragment>
                <div className="position-relative">
                    <Cart onClick={this.handleDrop} className="cart btn d-lg-flex justify-content-center">
                        <i className="fas fa-cart-arrow-down"></i>
                    </Cart>
                    <Drop className="Drop rounded shadow border-top" style={{display:"none"}}>
                        {item}
                    </Drop>
                </div>
                
            </Fragment>
        )


    }
}

function mapStateToProps(state) {
    return {
        cart : state
    };
}

export default connect(mapStateToProps)(Cart);