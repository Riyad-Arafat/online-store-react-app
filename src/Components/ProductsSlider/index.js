import React, {useEffect, useState} from "react";
import { useSelector, useDispatch } from 'react-redux'
import $ from "jquery";
import './style.css';


// actions 

import {add_to_cart, remove_from_cart} from './../../Actions';



function ProductsSlider() {
    const dispatch = useDispatch();
    const stateProducts = useSelector(state => state.products);
    const cart          = useSelector(state => state.cart);
    const [products, setProducts] = useState(stateProducts);
    var product;

    // slice Big Title of Item
    const sliceTitle = () => {
        var $title = $(".card-title");
        for(let z = 0; z < $title.length; z++){
            var y = $title[z].innerHTML;
            $title[z].innerHTML = y.slice(0,50) + ".....";
        }
    }
    // Handle slide to Next Items
    const handelNext = (e) => {
        const $next     = $(e.target);
        const slides    = $($next).parents(".slide-container").find('.slides');
        let   x         = $(slides).scrollLeft();

        $(slides).animate({scrollLeft : x + $(slides).width()}, 1000);
    }
    // Handle slide to Previous Items
    const handelPrev = (e) => {
        const $prev     = $(e.target);
        const slides    = $($prev).parents(".slide-container").find('.slides');
        let   x         = $(slides).scrollLeft();
        $(slides).animate({scrollLeft : x - $(slides).width()}, 1000);
    }
    // Handle Visibility of {next, prev} Button
    const btnVisable = () => {
        const slides    = $(".slide-container .slides");
        const $next     = $('.slide-container .next-btn');
        const $prev     = $('.slide-container .prev-btn');
        $prev.hide();
        $(slides).on("scroll" , function(){            
            if($(this).scrollLeft() === 0 ){ 
                $prev.hide();
                $next.show();
            }else if($(this).scrollLeft() > 0){
                $prev.show();
                $next.show()
                if ( $(this).scrollLeft() > this.scrollWidth - $(window).width() ) {
                    $next.hide();
                }
            }
        });
    
    };


    useEffect(() => {
        sliceTitle();
        btnVisable();
        // Convert Promise to Data Vlue To return Products from Reducer-Firebase
        var p1 = new Promise((resolve) => {
            resolve(products);
        });
        p1.then((arr)=> {
            setProducts(arr);
        })
    }, [products])

    if (products.length){
        product = products.map( item => { 
            // Check if product-Item Exists in Cart 
            if(cart.some(i => i.id === item.id)){
                var action = (
                    <button
                        className="btn btn-block btn-danger"
                        onClick={()=> dispatch(remove_from_cart(item))}>
                        Remove From Cart
                    </button>
                );
            }else{
                action = (
                    <button
                        className="btn btn-block btn-primary"
                        onClick={()=> dispatch(add_to_cart(item))}>
                        Add TO Cart
                    </button>
                );
            }
            return(
                <div key={products.indexOf(item)} className="card my-card">
                    <a href={`/product/${item.id}`} >
                        <div className="my-card-img"><img src={`${item.img}`} alt={item.id}/></div>
                        <div className="card-body">
                            <div className="card-title">{item.title}</div>
                            <div className="item-rate">
                                <i className="star-reating">
                                    <i className="rate" style={{width: item.rate}} ></i>
                                </i>
                            </div>
                            <div className="price"><span>{item.fPrice}</span><span className="currency-text">EGP</span></div>
                        </div>
                    </a>
                    {action}
                </div>
            )
        })
    }


// The main Return
    return(
        <div className="p-products">
            <div className="my-container container-fluid">
                <div className="section-title"></div>
                <div className="slide-container align-items-center">
                    <div className="slides">
                       {product}
                    </div>
                    <div className="prev-btn btn" onClick={handelPrev}><i className="fas fa-chevron-left"></i></div>
                    <div className="next-btn btn" onClick={handelNext}><i className="fas fa-chevron-right"></i></div>
                </div>
            </div>
        </div>
    )
}

export default (ProductsSlider);