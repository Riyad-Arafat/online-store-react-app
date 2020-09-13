import React, {Component } from 'react';
import Rows from './../../Components/ProductsSort/Rows';


class SearchPage extends Component{
    state = {
        min : 0,
        max : 10^10,
    }
    render()
    {
        return(
            <section>
                <div className="container">
                     <div>sdasdas</div>
                </div>
                <Rows query={this.props.match.params.q}/>
                
                
            </section>
            
        )
    }
}

export default SearchPage;