import React, {Component, Fragment } from 'react';


import Rows from "../../Components/ProductsSort/Rows";



class Section extends Component{
    render(){
        
        return(
            <Fragment>
                <h2>Electronics</h2>
                <br/>
                <div className="categories bg-white text-center">
                    <h3 className="g-title">SHOP BY CATEGORY</h3>
                    <div className="container">
                        <div className="row row-cols-lg-4 row-cols-md-2">
                            <a href="#" className="card text-center border-0 m-auto">
                                <img className="img-fluid" src='https://riyadelberkawy.github.io/personal/files/front-end/Personal.PNG' alt="w"/>
                                <h4>Video Game</h4>
                            </a>
                            
                        </div>
                    </div>
                </div>
                <Rows />
            </Fragment>
        )
    }
}

export default Section