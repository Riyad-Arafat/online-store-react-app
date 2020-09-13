import React, {Component } from 'react';
import Rows from './../../Components/ProductsSort/Rows';

import './style.css';

class SearchPage extends Component{
    state = {
        min : 1,
        max : 10000,
        maxVal : 10000
    }

    componentDidMount(){
        if(this.props.match.params.max){
            this.setState({
                min : this.props.match.params.min,
                max : this.props.match.params.max,
            })
        }
    }

    max = (event) => {
        this.setState({
            max : event.target.value
        })
    }
    min = (event) => {
        this.setState({
            min : event.target.value
        })
    }

    onsubmit = (event) => {
        event.preventDefault();
        window.location.pathname = `/search/q=${this.props.match.params.q}/price/min=${this.state.min}/max=${this.state.max}`;
    }

    render()
    {
        return(
            <section>
                <div className="container">
                     <div className="filter w-100 shadow p-md-5 p-3 row row-cols-1 flex-column m-0">
                         <div className="mb-3">
                            <h3>Price:</h3>
                            <div className="range-price col border-md-end">
                                <input className="min" name="range_1" type="range" min="1" max={this.state.maxVal} value={this.state.min} onChange={this.min} />
                                <input className="max" name="range_1" type="range" min="1" max={this.state.maxVal} value={this.state.max} onChange={this.max} />
                                <div className="d-flex justify-content-between text-center">
                                    <div className="range-min price">{this.state.min} EGP</div>
                                    <div className="range-max price">{this.state.max} EGP</div>
                                </div>
                            </div>
                         </div>
                        <button className="btn btn-success align-self-end col-md-3" onClick={this.onsubmit}>Submit</button>
                        
                     </div>
                </div>
                <Rows query={this.props.match.params.q} max={this.props.match.params.max} min={this.props.match.params.min}/>
            </section>
            
        )
    }
}

export default SearchPage;