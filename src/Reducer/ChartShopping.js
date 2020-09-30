import { bake_cookie, read_cookie } from 'sfcookies'

import {ADD_TO_CART, REMOVE_FROM_CART, REMOVE_ALL_CART} from '../Actions/AcrionType';



const cart = (state = [], action) => {
    let cart = null;
    state = read_cookie('cart');
    //state = getAll('cart');
    switch(action.type){
      case ADD_TO_CART:
        cart = [...state, action.item];
        console.log('reminder as state', cart);
        bake_cookie('cart', cart);
        //get('cart', cart);
        return cart;
      case REMOVE_FROM_CART: 
        cart = state.filter( item => item.id !== action.item.id);
        bake_cookie('cart', cart);
        return cart;
      case REMOVE_ALL_CART:
        cart = [];
        bake_cookie('cart', cart);
        
        return cart;
      default:
        return state;
    }
}
  
  
export default cart;