import {bake_cookie, read_cookie} from 'sfcookies'

import {ADD_TO_CART, REMOVE_FROM_CART, REMOVE_ALL_CART} from '../Actions/AcrionType';
import "../Actions";





/*
 Return Cartt Items
 and Add , Remove Theme
 from Cart
 */

const cartItems = [];
export const cart = (state = cartItems , action) => {
    let cart = null;
    state = read_cookie("cart");
    switch (action.type){
        case ADD_TO_CART:
            cart = [...state, action.item];
            state = cart;
            bake_cookie('cart', cart);
            break;

        case REMOVE_FROM_CART:
            cart = state.filter(item => item.id !== action.item.id)
            state = cart;
            bake_cookie('cart', cart);
            break;

        case REMOVE_ALL_CART:
            cart = []
            state = cart;
            bake_cookie('cart', cart);
            break;
        default:
            bake_cookie('cart', state);
            state = [];

    }
    return state
}



const ProductItems = [
    {id : 1, title : "Labtop Dell Insprion 2020 hp honer", img: "https://riyadelberkawy.github.io/personal/files/front-end/Personal.PNG" , rate: "50%", price: 35},
    {id : 2, title : "Labtop Dell Insprion 2020 hp honer", img: "https://riyadelberkawy.github.io/personal/files/front-end/Personal.PNG" , rate: "100%", price: 35},
    {id : 3, title : "Labtop Dell Insprion 2020 hp honer", img: "https://riyadelberkawy.github.io/personal/files/front-end/Personal.PNG" , rate: "96%", price: 35},
    {id : 4, title : "Labtop Dell Insprion 2020 hp honer", img: "https://riyadelberkawy.github.io/personal/files/front-end/Personal.PNG" , rate: "75%", price: 35},
    {id : 5, title : "Labtop Dell Insprion 2020 hp honer", img: "https://riyadelberkawy.github.io/personal/files/front-end/Personal.PNG" , rate: "64%", price: 35},
    {id : 6, title : "Labtop Dell Insprion 2020 hp honer", img: "https://riyadelberkawy.github.io/personal/files/front-end/Personal.PNG" , rate: "48%", price: 35},
];
export const products = (state = ProductItems, action) => {

    return state
}