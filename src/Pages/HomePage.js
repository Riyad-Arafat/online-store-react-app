import React, {Component, Fragment } from 'react';


// Components 
import slider from './../images/slider.png';


import ImgSlider from '../Components/ImagSlider/Slider';
import TopCategory from '../Components/TopCategory/TopCategory';
import ProductsSlider from '../Components/ProductsSlider';


class Home extends Component {

    render()
    {
        return(
            <Fragment>
                <ImgSlider images={[slider,"https://cf4.s3.souqcdn.com/item/2015/07/21/80/77/59/2/item_L_8077592_8672323.jpg"]} />
                <TopCategory />
                <ProductsSlider name="Popular Products"/>
            </Fragment>
        )
    }
}


export default Home;