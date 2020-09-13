import React, {Component , Fragment} from "react";
import {connect} from 'react-redux' 
import styled from "styled-components";

class SearchBar extends Component {

    state={
        search: ""
    }

    search = (event) =>{
        this.setState({
            search : event.target.value
        })
    }

    onsubmit = (event) => {
        event.preventDefault();
        window.location.pathname = `/search/q=${this.state.search}`;
    }

    render()
    {
        const Result = styled.div`
            position: absolute;
            top: 36px;
            width: 85%;
            max-height: 285px;
            overflow: auto;
            background: #ffffff;
            box-shadow: inset 0px 0px 2px 0px #052d47;
        `;
        const A = styled.a`
            display: block;
            padding: 14px 4px;
            transition: 0.25s all ease;
            &&:hover {
                background-color: #e9eced;
                font-size: x-large;
            }
        `; 

        let {products} = this.props;
        if(this.state.search !== ""){
            let searched   = products.filter((product) => {
                return product.title.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1;
            })
            if(searched.length){
                var result = (
                    <Result>
                        {searched.map(item => {
                            return (
                                <li key={item.id} className="list-unstyled border-bottom"><A href={`/product/${item.id}`}>{item.title}</A></li>
                            )
                        })}
                    
                    </Result>
                    
                )
            }
            
        }
        

        return(
            <Fragment>
                <form id="header-search" className="col form-inline d-none d-lg-flex justify-content-center position-relative" onSubmit={this.onsubmit}>
                    <input className="form-control" type="search" placeholder="Search" aria-label="Search" value={this.state.value} onChange={this.search}/>
                    <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                    {result}
                </form>
                
            </Fragment>
        )
    }
}

function mapSteteToProps(state){
    return{
        products : state.products,
    }
}

export default connect(mapSteteToProps)(SearchBar);