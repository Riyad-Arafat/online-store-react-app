import React ,{ Component, Fragment } from 'react';
import $ from 'jquery';
import './style.css';


class Slider extends Component {

    centrSlides = () => {
        const $slides   = $("#slider .slides");
        var $i          = $($slides).find('.slide-item').length;

        if( $i % 2 == 0){
            $i = $i / 2;
            $i -= 1;
        }else{
            $i = ($i+1) / 2;
            $i -= 1;
        }

        if($("html").attr("dir") == "ltr"){
            var $x = -100;
        }else{
            var $x = 100;
        }
        const slide = $($slides.find('.slide-item'))[$i];
        $(slide).addClass('show')

        // Centerarl The Main slide
        $($slides).css("left", ($i * $x)+"%");
    
    }

    nextSlide = (e) => {
        const $slides       = $($(e.target).offsetParent()).find('.slides');
        const $now_img      = $slides.find(".show");
        var $next_img       = $now_img.next();
        var $i              = $($next_img).index();

        if($("html").attr("dir") == "ltr"){
            var $x = -100;
        }else{
            var $x = 100;
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
    prevSlide(e){
        const $slides       = $($(e.target).offsetParent()).find('.slides');
        const $now_img      = $slides.find(".show");
        var $prev_img       = $now_img.prev(),
        $i                  = $($prev_img).index();

        if($("html").attr("dir") == "ltr"){
            var $x = -100;
        }else{
            var $x = 100;
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
        
        return(
            
            <Fragment>
                <div className="container">
                    <div id="slider" className="shadow rounded">
                        <div className="next-btn btn" onClick={this.nextSlide}><i className="fas fa-chevron-right"></i></div>
                        <div className="slides">
                            <div className="slide-item"><img src="https://riyadelberkawy.github.io/personal/files/front-end/Personal.PNG" alt=""/></div>
                            <div className="slide-item"><img src="https://riyadelberkawy.github.io/personal/files/front-end/Personal.PNG" alt=""/></div>
                            <div className="slide-item"><img src="https://riyadelberkawy.github.io/personal/files/front-end/Personal.PNG" alt=""/></div>
                            <div className="slide-item"><img src="https://riyadelberkawy.github.io/personal/files/front-end/Personal.PNG" alt=""/></div>
                            <div className="slide-item"><img src="https://riyadelberkawy.github.io/personal/files/front-end/Personal.PNG" alt=""/></div>
                            <div className="slide-item"><img src="https://riyadelberkawy.github.io/personal/files/front-end/Personal.PNG" alt=""/></div>
                            <div className="slide-item"><img src="https://riyadelberkawy.github.io/personal/files/front-end/Personal.PNG" alt=""/></div>
                            <div className="slide-item"><img src="https://riyadelberkawy.github.io/personal/files/front-end/Personal.PNG" alt=""/></div>
                        </div>
                        <div className="prev-btn btn" onClick={this.prevSlide}><i className="fas fa-chevron-left"></i></div>
                    </div>
                </div>
            </Fragment>
        )
    }
};

export default Slider;