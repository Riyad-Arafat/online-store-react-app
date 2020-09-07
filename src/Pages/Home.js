import React, {Component, Fragment } from 'react';


// Components 

import ImgSlider from '../Components/ImagSlider/Slider';
import TopCategory from '../Components/TopCategory/TopCategory';
import ProductsSlider from '../Components/ProductsSlider/ProductsSlider';



class Home extends Component {

    render()
    {
        return(
            <Fragment>
                <ImgSlider />
                <TopCategory />
                <ProductsSlider />
            </Fragment>
        )
    }
}


export default Home;