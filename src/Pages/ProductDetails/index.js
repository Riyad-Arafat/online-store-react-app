import React, {Component, Fragment } from 'react';
import {connect} from 'react-redux';


// Components 
import Product from './Components/Product';


class ProductPage extends Component{
    render()
    {
        const item = this.props.match.params.item_id;
        return(

            <Fragment>
                <Product item={item} />
            </Fragment>
        )
    }
}


export default connect()(ProductPage);