import {bake_cookie, read_cookie} from 'sfcookies'

import {ADD_TO_CART, REMOVE_FROM_CART, REMOVE_ALL_CART} from '../Actions/AcrionType';
import "../Actions";

const store = [];
 

const cart = (state = store , action) => {
    let cart = null;

    state = read_cookie("cart");
    if(action.type === ADD_TO_CART){
        cart = [...state, action.item];
        bake_cookie('cart', cart);
        return cart;
    }
    else if(action.type === REMOVE_FROM_CART){
        cart = state.filter(item => item.id !== action.item.id)
        bake_cookie('cart', cart)
        return cart;
    }
    else if(action.type === REMOVE_ALL_CART){
        cart = []
        bake_cookie('cart', cart)
        return cart;
    }

    else{
        bake_cookie('cart', state);
        return state;
    }

    

}

export default cart;