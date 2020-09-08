import React ,{ Component, Fragment } from 'react';
import $ from 'jquery';
import './style.css';


class Slider extends Component {

    centrSlides = () => {
        const $slides   = $("#slider .slides");
        var $i          = $($slides).find('.slide-item').length,
            $x          = 0;
        if( $i % 2 === 0){
            $i = $i / 2;
            $i -= 1;
        }else{
            $i = ($i+1) / 2;
            $i -= 1;
        }
        if($("html").attr("dir") === "ltr"){
            $x = -100;
        }else{
            $x = 100;
        }
        const slide = $($slides.find('.slide-item'))[$i];
        $(slide).addClass('show')
        // Centerarl The Main slide
        $($slides).css("left", ($i * $x)+"%");
    };

    nextSlide = (e) => {
        const $slides       = $($(e.target).offsetParent()).find('.slides');
        const $now_img      = $slides.find(".show");
        var $next_img       = $now_img.next();
        var $i              = $($next_img).index(),
            $x              = 0;
        if($("html").attr("dir") === "ltr"){
            $x = -100;
        }else{
            $x = 100;
        }
        if($next_img.length){
            $($now_img).removeClass("show")
            $($slides).animate({left: `${($i * $x)}%`},200);
            $($next_img).addClass("show")
        }
        else{
            $next_img   = $slides.find(".slide-item").first();
            $i          = $($next_img).index();
            $($now_img).removeClass("show")
            $($slides).animate({left: `${($i * $x)}%`},200);
            $($next_img).addClass("show")
        }
    };
    prevSlide = (e) => {
        const $slides       = $($(e.target).offsetParent()).find('.slides');
        const $now_img      = $slides.find(".show");
        var $prev_img       = $now_img.prev(),
        $i                  = $($prev_img).index(),
        $x                  = 0;

        if($("html").attr("dir") === "ltr"){
            $x = -100;
        }else{
            $x = 100;
        }

        if($prev_img.length){
            $($now_img).removeClass("show")
            $($slides).animate({left: `${($i * $x)}%`},200);
            $($prev_img).addClass("show")
        }
        else{
            $prev_img = $slides.find(".slide-item").last();
            $i  = $($prev_img).index();
            $($now_img).removeClass("show")
            $($slides).animate({left: `${($i * $x)}%`},200);
            $($prev_img).addClass("show")   
        }
    };


    componentDidMount(){
        this.centrSlides();
    }

    render(){
        const
        Images      = this.props.images;
        var 
        img         = null,
        slider      = null,
        Next        = null,
        prev        = null ;


        if(Images){
            img   = Images.map(img => {
                return(
                    <div key={Math.random()}  className="slide-item"><img src={img} alt="product"/></div>
                )

            })

            if (Images.length > 1) {
                Next = (<i className=" next-btn fas fa-chevron-right"  onClick={this.nextSlide}></i>)
                prev = (<i className=" prev-btn fas fa-chevron-left"  onClick={this.prevSlide}></i>)
            }

            slider  = (
            <div className="img-slider">
                <div className="container">
                    <div id="slider" className="rounded">
                        {Next}
                        <div className="slides">
                            {img}
                        </div>
                        {prev}
                    </div>
                </div>
            </div>
            )
        }
        return(
            
            <Fragment>
                {slider}
            </Fragment>
        )
    }
};

export default Slider;