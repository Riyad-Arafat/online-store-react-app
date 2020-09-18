import React, {Component, Fragment} from "react";
import {connect} from 'react-redux';
import styled from "styled-components";
import $ from 'jquery';
import "./style.css";

class Cart extends Component{
    // Toggle Slide {Drop} when click Cart icon
    handleDrop(){
        $(".Drop")
        .toggleClass("droped")
        .slideToggle();
    }

    componentDidMount(){
        //Toggle slide {Drop} when click window
        $(window).click(function(x){
            const e     = x.target;
            const ico   = $(".cart")[0];
            const ii    = $(".view-cart")[0];
            const drop = $('.Drop');
            if(e !== ico && e !== ii && e !== $(".fa-cart-arrow-down")[0]){
                if($(drop).hasClass("droped")){
                    $(drop)
                    .toggleClass("droped")
                    .slideToggle();
                }

            }

        })
    }

    render(){
        ///// Return Number of Items That is in Cart
        const num = () => {
            if (this.props.cart.length){
                return this.props.cart.length;
            }
        }

        ///// Sryle Component
        const Cart = styled.div`
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

        const ItemContainer = styled.div`
            overflow: auto;
            max-height: 400px;
        `;

        const Item = styled.a`
            display: grid;
            grid-template-columns: 79px auto;
            overflow-wrap: anywhere;
            border-block-start: 1px solid #000000;
            padding: 7px;
        `;

        const img = {
            height: '50px',
            objectFit: 'cover'
        
        }

        ///// Return Items That is in Cart
        const items = this.props.cart;
        var item  = items.map(item => {
            return(
                <Item href={`/product/${item.id}`} key={item.id}>
                    <div  className="overflow-hidden rounded p-2">
                        <img style={img} className="img-fluid" src={item.img[0]} alt={item.id} />
                    </div>
                    <div className="title" >
                        <h5 className="m-0">{item.title}</h5>
                        <span className="price">{item.fPrice } <span className="currency-text">EGP</span></span>
                    </div>
                </Item>
            )
        })
        if(items.length > 0){
            var view_btn =(
                <a href="/shopping_cart" className="view-cart btn btn-block btn-secondary">View Cart</a>
            )
        }else{
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
                        <ItemContainer>
                            {item}
                        </ItemContainer>
                        {view_btn}
                    </Drop>
                </div>
                
            </Fragment>
        )


    }
}

function mapStateToProps(state) {
    return {
        cart : state.cart
    };
}

export default connect(mapStateToProps)(Cart);