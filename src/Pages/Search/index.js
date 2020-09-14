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
        console.log(this.props)
        return(
            <section>
                <div className="container-fluid">
                    <div className="row">
                        <div className="filter col-lg-3 d-inline-block w-100 mb-3">
                            <div className="row row-cols-1 flex-column m-0 bg-white shadow sticky-top" style={{top: '170px'}}>
                                <div className="p-2 mb-3 d-inline-block">
                                    <h3>Price:</h3>
                                    <div className="range-price col">
                                        <input className="min" name="range_1" type="range" min="1" max={this.state.maxVal} value={this.state.min} onChange={this.min} />
                                        <input className="max" name="range_1" type="range" min="1" max={this.state.maxVal} value={this.state.max} onChange={this.max} />
                                        <div className="d-flex justify-content-between text-center">
                                            <div className="range-min price">{this.state.min} EGP</div>
                                            <div className="range-max price">{this.state.max} EGP</div>
                                        </div>
                                    </div>
                                </div>
                                <button className="btn btn-success" onClick={this.onsubmit}>Submit</button>  
                            </div>
                        </div>
                        <div className="col">
                            <Rows query={this.props.match.params.q} max={this.props.match.params.max} min={this.props.match.params.min}/>
                        </div>
                    </div>
                    
                    
                </div>
                
                
            </section>
            
        )
    }
}

export default SearchPage;