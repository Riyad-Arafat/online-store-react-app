import React, {Fragment } from 'react';
import { useSelector } from 'react-redux'



// Components 
import Product from './Components/info';
import Related from './../../Components/ProductsSlider';
import Reviews from './Components/Reviews';


function ProductPage(props){
    const allProducts     = useSelector(state => state.products);
    const itemId          = props.match.params.item_id;

    const product = allProducts.filter(item => item.id === +itemId)[0]


    return(
        <Fragment>
            <Product product={product} />
            <Reviews product={product}  />
            <Related name="Relate Products" />
        </Fragment>
    )

}


export default ProductPage;