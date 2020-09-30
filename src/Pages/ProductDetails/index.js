import React, {Component, Fragment } from 'react';
import {connect} from 'react-redux';


// Components 
import Product from './Components/info';
import Related from './../../Components/ProductsSlider';
import Reviews from './Components/Reviews';


class ProductPage extends Component{
    render()
    {
        const itemId = this.props.match.params.item_id;
        return(

            <Fragment>
                <Product itemId={itemId} />
                <Reviews product_id={itemId}  />
                <Related name="Relate Products" />
            </Fragment>
        )
    }
}


export default connect()(ProductPage);