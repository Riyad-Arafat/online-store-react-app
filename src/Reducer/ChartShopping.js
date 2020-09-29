import { bake_cookie, read_cookie, delete_cookie } from 'sfcookies'

import {ADD_TO_CART, REMOVE_FROM_CART, REMOVE_ALL_CART} from '../Actions/AcrionType';


export const cart = (state = null , action) => {
    state = read_cookie("cart");
    switch (action.type){
        case ADD_TO_CART:
            state = [...state,action.item];
            bake_cookie('cart', state);
            break;

        case REMOVE_FROM_CART:
            state = state.filter(item => item.id !== action.item.id)
            bake_cookie('cart', state);
            break;

        case REMOVE_ALL_CART:
            state = []
            delete_cookie('cart');
            break;
        default:
            bake_cookie('cart', state);
            break;
    }
    return state
}

 
