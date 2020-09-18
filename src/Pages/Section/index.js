import React, {Component } from 'react';
import {connect} from 'react-redux';
import Rows from "../../Components/ProductsSort/Rows";

import NotFound from './../../Components/404';

import phone from './../../images/phone.png';


class Section extends Component{
    render(){
        const sectionName   = this.props.match.params.section;
        const {sections}    = this.props;

        for(let i =0; i < sections.length; i++){
            if(sections[i].name === sectionName){
                var section = sections[i];
            }else{
                section = false;
            }
        }
        if(section){
            const categories = section.categories.map(cat => {
                return(
                    <div key={cat + Math.random()} className="p-2 w-100">
                        <a href="/" className="card text-center border-0 shadow ">
                            <img className="img-fluid" src={phone} alt="w"/>
                            <h4>{cat}</h4>
                        </a>
                    </div>
                )
            })

          return (
            <div>
                <h2 className="bold p-3">{section.name}</h2>
                <br/>
                <div className="categories bg-white text-center pb-5">
                    <h3 className="g-title">SHOP BY CATEGORY</h3>
                    <div className="container">
                        <div className="row row-cols-lg-3 row-cols-md-2 row-cols-md-2 justify-content-center">
                            {categories}
                        </div>
                    </div>
                </div>
                <div className="container-fluid container-xl mt-2">
                    <Rows section="example"/>
                </div>
                
            </div>
          )
        }else{
            return <NotFound />
        }
       
    }
}

function mapSteteToProps(state){
    return{
        sections: state.sections
    }

}

export default connect(mapSteteToProps)(Section);