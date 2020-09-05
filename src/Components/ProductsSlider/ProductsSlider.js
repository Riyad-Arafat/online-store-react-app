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

    
    render() {
        return(
            <div id="p-products">
                <div className="my-container container-fluid">
                    <div className="section-title">popular products</div>
                    <div className="slide-container align-items-center">
                        <div className="slides">
                            <div className="card my-card">
                                <a href="#">
                                    <div className="my-card-img"><img src="https://riyadelberkawy.github.io/personal/files/front-end/Personal.PNG"/></div>
                                    <div className="card-body">
                                        <div className="card-title">Labtop Dell Insprion 5583dfsdl fsdjfso gjrojge porjgpoerjgiorjgoirejhiojwgjerjperhjoprjh</div>
                                        <div className="item-rate">^^^^^^</div>
                                        <div className="price"><span>159 EGP</span></div>
                                    </div>
                                </a>
                            </div>
                            <div className="card my-card">
                                <a href="#">
                                    <div className="my-card-img"><img src="https://riyadelberkawy.github.io/personal/files/front-end/Personal.PNG"/></div>
                                    <div className="card-body">
                                        <div className="card-title">Labtop Dell Insprion 5583dfsdl fsdjfso gjrojge porjgpoerjgiorjgoirejhiojwgjerjperhjoprjh</div>
                                        <div className="item-rate">^^^^^^</div>
                                        <div className="price"><span>159 EGP</span></div>
                                    </div>
                                </a>
                            </div>
                            <div className="card my-card">
                                <a href="#">
                                    <div className="my-card-img"><img src="https://riyadelberkawy.github.io/personal/files/front-end/Personal.PNG"/></div>
                                    <div className="card-body">
                                        <div className="card-title">Labtop Dell Insprion 5583dfsdl fsdjfso gjrojge porjgpoerjgiorjgoirejhiojwgjerjperhjoprjh</div>
                                        <div className="item-rate">^^^^^^</div>
                                        <div className="price"><span>159 EGP</span></div>
                                    </div>
                                </a>
                            </div>
                            <div className="card my-card">
                                <a href="#">
                                    <div className="my-card-img"><img src="https://riyadelberkawy.github.io/personal/files/front-end/Personal.PNG"/></div>
                                    <div className="card-body">
                                        <div className="card-title">Labtop Dell Insprion 5583dfsdl fsdjfso gjrojge porjgpoerjgiorjgoirejhiojwgjerjperhjoprjh</div>
                                        <div className="item-rate">^^^^^^</div>
                                        <div className="price"><span>159 EGP</span></div>
                                    </div>
                                </a>
                            </div>
                            <div className="card my-card">
                                <a href="#">
                                    <div className="my-card-img"><img src="https://riyadelberkawy.github.io/personal/files/front-end/Personal.PNG"/></div>
                                    <div className="card-body">
                                        <div className="card-title">Labtop Dell Insprion 5583dfsdl fsdjfso gjrojge porjgpoerjgiorjgoirejhiojwgjerjperhjoprjh</div>
                                        <div className="item-rate">^^^^^^</div>
                                        <div className="price"><span>159 EGP</span></div>
                                    </div>
                                </a>
                            </div>
                            <div className="card my-card">
                                <a href="#">
                                    <div className="my-card-img"><img src="https://riyadelberkawy.github.io/personal/files/front-end/Personal.PNG"/></div>
                                    <div className="card-body">
                                        <div className="card-title">Labtop Dell Insprion 5583dfsdl fsdjfso gjrojge porjgpoerjgiorjgoirejhiojwgjerjperhjoprjh</div>
                                        <div className="item-rate">^^^^^^</div>
                                        <div className="price"><span>159 EGP</span></div>
                                    </div>
                                </a>
                            </div>
                            <div className="card my-card">
                                <a href="#">
                                    <div className="my-card-img"><img src="https://riyadelberkawy.github.io/personal/files/front-end/Personal.PNG"/></div>
                                    <div className="card-body">
                                        <div className="card-title">Labtop Dell Insprion 5583dfsdl fsdjfso gjrojge porjgpoerjgiorjgoirejhiojwgjerjperhjoprjh</div>
                                        <div className="item-rate">^^^^^^</div>
                                        <div className="price"><span>159 EGP</span></div>
                                    </div>
                                </a>
                            </div>
                            <div className="card my-card">
                                <a href="#">
                                    <div className="my-card-img"><img src="https://riyadelberkawy.github.io/personal/files/front-end/Personal.PNG"/></div>
                                    <div className="card-body">
                                        <div className="card-title">Labtop Dell Insprion 5583dfsdl fsdjfso gjrojge porjgpoerjgiorjgoirejhiojwgjerjperhjoprjh</div>
                                        <div className="item-rate">^^^^^^</div>
                                        <div className="price"><span>159 EGP</span></div>
                                    </div>
                                </a>
                            </div>
                            <div className="card my-card">
                                <a href="#">
                                    <div className="my-card-img"><img src="https://riyadelberkawy.github.io/personal/files/front-end/Personal.PNG"/></div>
                                    <div className="card-body">
                                        <div className="card-title">Labtop Dell Insprion 5583dfsdl fsdjfso gjrojge porjgpoerjgiorjgoirejhiojwgjerjperhjoprjh</div>
                                        <div className="item-rate">^^^^^^</div>
                                        <div className="price"><span>159 EGP</span></div>
                                    </div>
                                </a>
                            </div>
                            <div className="card my-card">
                                <a href="#">
                                    <div className="my-card-img"><img src="https://riyadelberkawy.github.io/personal/files/front-end/Personal.PNG"/></div>
                                    <div className="card-body">
                                        <div className="card-title">Labtop Dell Insprion 5583dfsdl fsdjfso gjrojge porjgpoerjgiorjgoirejhiojwgjerjperhjoprjh</div>
                                        <div className="item-rate">^^^^^^</div>
                                        <div className="price"><span>159 EGP</span></div>
                                    </div>
                                </a>
                            </div>
                            <div className="card my-card">
                                <a href="#">
                                    <div className="my-card-img"><img src="https://riyadelberkawy.github.io/personal/files/front-end/Personal.PNG"/></div>
                                    <div className="card-body">
                                        <div className="card-title">Labtop Dell Insprion 5583dfsdl fsdjfso gjrojge porjgpoerjgiorjgoirejhiojwgjerjperhjoprjh</div>
                                        <div className="item-rate">^^^^^^</div>
                                        <div className="price"><span>159 EGP</span></div>
                                    </div>
                                </a>
                            </div>
                            <div className="card my-card">
                                <a href="#">
                                    <div className="my-card-img"><img src="https://riyadelberkawy.github.io/personal/files/front-end/Personal.PNG"/></div>
                                    <div className="card-body">
                                        <div className="card-title">Labtop Dell Insprion 5583dfsdl fsdjfso gjrojge porjgpoerjgiorjgoirejhiojwgjerjperhjoprjh</div>
                                        <div className="item-rate">^^^^^^</div>
                                        <div className="price"><span>159 EGP</span></div>
                                    </div>
                                </a>
                            </div>
                            <div className="card my-card">
                                <a href="#">
                                    <div className="my-card-img"><img src="https://riyadelberkawy.github.io/personal/files/front-end/Personal.PNG"/></div>
                                    <div className="card-body">
                                        <div className="card-title">Labtop Dell Insprion 5583dfsdl fsdjfso gjrojge porjgpoerjgiorjgoirejhiojwgjerjperhjoprjh</div>
                                        <div className="item-rate">^^^^^^</div>
                                        <div className="price"><span>159 EGP</span></div>
                                    </div>
                                </a>
                            </div>
                            <div className="card my-card">
                                <a href="#">
                                    <div className="my-card-img"><img src="https://riyadelberkawy.github.io/personal/files/front-end/Personal.PNG"/></div>
                                    <div className="card-body">
                                        <div className="card-title">Labtop Dell Insprion 5583dfsdl fsdjfso gjrojge porjgpoerjgiorjgoirejhiojwgjerjperhjoprjh</div>
                                        <div className="item-rate">^^^^^^</div>
                                        <div className="price"><span>159 EGP</span></div>
                                    </div>
                                </a>
                            </div>
                            <div className="card my-card">
                                <a href="#">
                                    <div className="my-card-img"><img src="https://riyadelberkawy.github.io/personal/files/front-end/Personal.PNG"/></div>
                                    <div className="card-body">
                                        <div className="card-title">Labtop Dell Insprion 5583dfsdl fsdjfso gjrojge porjgpoerjgiorjgoirejhiojwgjerjperhjoprjh</div>
                                        <div className="item-rate">^^^^^^</div>
                                        <div className="price"><span>159 EGP</span></div>
                                    </div>
                                </a>
                            </div>
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