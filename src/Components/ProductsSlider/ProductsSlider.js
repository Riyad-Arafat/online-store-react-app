import React, {Component} from "react";
import $ from "jquery";
import './style.css';

class ProductsSlider extends Component {
    sliceTitle = () => {
        var $title = $(".card-title");
        for(let z = 0; z < $title.length; z++){
            var y = $title[z].innerHTML;
            $title[z].innerHTML = y.slice(0,50) + " . . . .";
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
        const slides    = $(".slide-container").find('.slides');
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
            {id : 1, tilte : "Labtop Dell Insprion 2020 hp honer", img: "https://riyadelberkawy.github.io/personal/files/front-end/Personal.PNG" , rate: "50%", price: 35, link : "#"},
            {id : 2, tilte : "Labtop Dell Insprion 2020 hp honer", img: "https://riyadelberkawy.github.io/personal/files/front-end/Personal.PNG" , rate: "100%", price: 35, link : "#"},
            {id : 3, tilte : "Labtop Dell Insprion 2020 hp honer", img: "https://riyadelberkawy.github.io/personal/files/front-end/Personal.PNG" , rate: "96%", price: 35, link : "#"},
            {id : 4, tilte : "Labtop Dell Insprion 2020 hp honer", img: "https://riyadelberkawy.github.io/personal/files/front-end/Personal.PNG" , rate: "75%", price: 35, link : "#"},
            {id : 5, tilte : "Labtop Dell Insprion 2020 hp honer", img: "https://riyadelberkawy.github.io/personal/files/front-end/Personal.PNG" , rate: "64%", price: 35, link : "#"},
            {id : 6, tilte : "Labtop Dell Insprion 2020 hp honer", img: "https://riyadelberkawy.github.io/personal/files/front-end/Personal.PNG" , rate: "48%", price: 35, link : "#"},
        ]
    }
    

    render() {
        const {products}    = this.state;
        const product       =  products.map( item => {
            return(
                <div key={item.id} className="card my-card">
                    <a href={item.link}>
                        <div className="my-card-img"><img src={item.img}/></div>
                        <div className="card-body">
                            <div className="card-title">{item.tilte}</div>
                            <div className="item-rate">
                                <i className="star-reating">
                                    <i className="rate" style={{width: item.rate}} ></i>
                                </i>
                            </div>
                            <div className="price"><span>{item.price} EGP</span></div>
                        </div>
                    </a>
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

export default ProductsSlider;