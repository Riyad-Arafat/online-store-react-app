import React, {Component, Fragment } from 'react';


// Components 

import ImgSlider from '../Components/ImagSlider/Slider';
import TopCategory from '../Components/TopCategory/TopCategory';
import ProductsSlider from '../Components/ProductsSlider';

// Slider Images

import slider from './../images/slider.png';


class Home extends Component {

    render()
    {
        return(
            <Fragment>
                <ImgSlider images={[slider,slider,slider]} />
                <TopCategory />
                <ProductsSlider name="Popular Products"/>
            </Fragment>
        )
    }
}


export default Home;