import React, {Component} from 'react';
import {connect} from 'react-redux';
import $ from 'jquery';
import './style.css';



class Reviews extends Component{


    componentDidMount(){

        this.handleRate();
    }
    handleRate(){
        $(document).ready(function(){
            /* 1. Visualizing things on Hover - See next part for action on click */
            $('#stars li').on('mouseover', function(){
              var onStar = parseInt($(this).data('value')); // The star currently mouse on
             
              // Now highlight all the stars that's not after the current hovered star
              $(this).parent().children('li.star').each(function(e){
                if (e < onStar) {
                  $(this).addClass('hover');
                }
                else {
                  $(this).removeClass('hover');
                }
              });
              
            }).on('mouseout', function(){
              $(this).parent().children('li.star').each(function(e){
                $(this).removeClass('hover');
              });
            });
            
            
            /* 2. Action to perform on click */
            $('#stars li').on('click', function(){
              var onStar = parseInt($(this).data('value')); // The star currently selected
              var stars = $(this).parent().children('li.star');
              
              for (let i = 0; i < stars.length; i++) {
                $(stars[i]).removeClass('selected');
              }
              
              for (let i = 0; i < onStar; i++) {
                $(stars[i]).addClass('selected');
              }
            });
            
        });
        
    
    }

    render()
    {
        var {products, product_id} = this.props,
        product = null,     
        id = parseInt(product_id);

        /// Return the product
        products.map(item => {
            if(item.id === id){
               return product = item;
            }
            return null;
        })
        var rate = (parseInt(product.rate)/100) * 5;
        return(
            <div className="coustmer-reviews mt-5 mb-5">
                <div className="container my-container">
                    <h5>CUSTOMER REVIEWS</h5>
                    <div className="row row-cols-1">
                        <div className="bg-white">
                            <div className="product-rate p-5 container-fluid">
                                <div className="row mb-4">
                                    <div className="col-md-5 text-center border-md-end">
                                        <div className="rate-num">
                                            <strong>{rate}</strong>
                                        </div>
                                        <div className="item-rate">
                                            <i className="star-reating">
                                                <i className="rate" style={{width: product.rate}} ></i>
                                            </i>
                                        </div>   
                                    </div>
                                    <div className="col-md-7">    
                                        <span dir="auto"><strong>100%</strong> of users recommend this product to a friend.Be the first to rate this product</span>
                                        <div className="mt-2">
                                            <h5>Rate this product:</h5>
                                            <div className='rating-stars text-center'>
                                                <ul id='stars' className="list-unstyled">
                                                    <li className='star' title='Poor' data-value='1'>
                                                        <i className='far fa-star fa-fw'></i>
                                                    </li>
                                                    <li className='star' title='Fair' data-value='2'>
                                                        <i className='far fa-star fa-fw'></i>
                                                    </li>
                                                    <li className='star' title='Good' data-value='3'>
                                                        <i className='far fa-star fa-fw'></i>
                                                    </li>
                                                    <li className='star' title='Excellent' data-value='4'>
                                                        <i className='far fa-star fa-fw'></i>
                                                    </li>
                                                    <li className='star' title='WOW!!!' data-value='5'>
                                                        <i className='far fa-star fa-fw'></i>
                                                    </li>
                                                </ul>
                                            </div>
  
                                        </div> 
                                    </div>
                                </div>
                                <div className="reviews border-top">
                                    <h3>reviews(5)</h3>
                                    <ul className="list-unstyled">
                                           
                                        <li className="border-bottom">
                                            <div className="item-rate">
                                                <i className="star-reating">
                                                    <i className="rate" style={{width: "75%"}} ></i>
                                                </i>
                                            </div>
                                            <span>by <strong>Riyad</strong> on 10 jun 2020</span>
                                            <div>
                                                <article dir="auto">
                                                    review reviews review reviews
                                                    review reviews
                                                    review reviews
                                                    review reviews
                                                    review reviews
                                                    review reviews
                                                    review reviews
                                                    review reviews
                                                    <p>review reviews review reviews review reviews review reviews review reviews review reviews </p>
                                                    <p>review reviews  review reviews </p>
                                                </article>
                                            </div>
                                            <button className="btn btn-outline-primary mb-2">
                                                <i className="far fa-thumbs-up"><span>VOTE</span></i>
                                            </button>
                                        </li>        
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}


function mapSteteToProps(state){
    return{
        products : state.products,
    }
}

export default connect(mapSteteToProps)(Reviews);