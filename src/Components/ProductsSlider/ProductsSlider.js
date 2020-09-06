import React, {Component} from "react";
import {connect} from 'react-redux';
import $ from "jquery";
import './style.css';


// actions 

import {add_to_cart, remove_from_cart} from './../../Actions';


class ProductsSlider extends Component {
    sliceTitle = () => {
        var $title = $(".card-title");
        for(let z = 0; z < $title.length; z++){
            var y = $title[z].innerHTML;
            $title[z].innerHTML = y.slice(0,50) + ".....";
        }
    }

    handelNext = (e) => {
        const $next     = $(e.target);
        const slides    = $($next).parents(".slide-container").find('.slides');
        let   x         = $(slides).scrollLeft();

        $(slides).animate({scrollLeft : x + $(slides).width()}, 1000);
    }
    handelPrev = (e) => {
        const $prev     = $(e.target);
        const slides    = $($prev).parents(".slide-container").find('.slides');
        let   x         = $(slides).scrollLeft();

        $(slides).animate({scrollLeft : x - $(slides).width()}, 1000);
    }

    btnVisable = () => {
        const slides    = $(".slide-container .slides");
        const $next     = $('.slide-container .next-btn');
        const $prev     = $('.slide-container .prev-btn');
    
        $prev.hide();
        $(slides).on("scroll" , function(){            
            if($(this).scrollLeft() == 0 ){ 
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
    
    componentDidMount(){
        this.btnVisable();
        this.sliceTitle();
    };


    state = {
        products :[
            {id : 1, title : "Labtop Dell Insprion 2020 hp honer", img: "https://riyadelberkawy.github.io/personal/files/front-end/Personal.PNG" , rate: "50%", price: 35, link : "#"},
            {id : 2, title : "Labtop Dell Insprion 2020 hp honer", img: "https://riyadelberkawy.github.io/personal/files/front-end/Personal.PNG" , rate: "100%", price: 35, link : "#"},
            {id : 3, title : "Labtop Dell Insprion 2020 hp honer", img: "https://riyadelberkawy.github.io/personal/files/front-end/Personal.PNG" , rate: "96%", price: 35, link : "#"},
            {id : 4, title : "Labtop Dell Insprion 2020 hp honer", img: "https://riyadelberkawy.github.io/personal/files/front-end/Personal.PNG" , rate: "75%", price: 35, link : "#"},
            {id : 5, title : "Labtop Dell Insprion 2020 hp honer", img: "https://riyadelberkawy.github.io/personal/files/front-end/Personal.PNG" , rate: "64%", price: 35, link : "#"},
            {id : 6, title : "Labtop Dell Insprion 2020 hp honer", img: "https://riyadelberkawy.github.io/personal/files/front-end/Personal.PNG" , rate: "48%", price: 35, link : "#"},
        ]
    }
    
    render() {
        const  cart         = this.props.cart
        const {products}    = this.state;
        const product       =  products.map( item => {
            
            if(cart.some(i => i.id === item.id)){
                var action = (
                <button
                    className="btn btn-block btn-danger"
                    onClick={()=> this.props.remove_from_cart(item)}>
                    Remove From Cart
                    </button>
                );
            }else{
                var action = (
                    <button
                     className="btn btn-block btn-primary"
                     onClick={()=> this.props.add_to_cart(item)}>
                        Add TO Cart
                     </button>
                );
            }

            return(
                <div key={item.id} className="card my-card">
                    <a href={item.link}>
                        <div className="my-card-img"><img src={item.img}/></div>
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
        return(
            <div id="p-products">
                <div className="my-container container-fluid">
                    <div className="section-title">popular products</div>
                    <div className="slide-container align-items-center">
                        <div className="slides">
                            {product}
                        </div>
                        <div className="slide-arrow d-md-block d-none">
                            <div className="prev-btn btn" onClick={this.handelPrev}><i className="fas fa-chevron-left"></i></div>
                            <div className="next-btn btn" onClick={this.handelNext}><i className="fas fa-chevron-right"></i></div>
                        </div>
                    </div>
                </div>
            </div>
        )
    };
}


function mapSteteToProps(state){
    return{
        cart: state
    }

}


export default connect(mapSteteToProps,{ add_to_cart, remove_from_cart})(ProductsSlider);