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

    }
    return state
}



const ProductItems = [
    {
        id : 1,
        title : "Prodect Name",
        description : "Descriptive Text Descriptive Text Descriptive Text Descriptive Text Descriptive Text Descriptive Text Descriptive Text Descriptive Text Descriptive Text Descriptive Text",
        img: ["https://cf2.s3.souqcdn.com/item/2020/08/09/13/16/39/34/9/item_XL_131639349_8713816dedb92.jpg","https://cf2.s3.souqcdn.com/item/2020/08/09/13/16/39/34/9/item_XL_131639349_8713816dedb92.jpg"],
        price: 15700,
        sale : 50,
        conadition : 'New',
        brand : "DELL",
        rate: "50%",
        left : 30,
    },
    {
        id : 2,
        title : "Prodect Name",
        description : "Descriptive Text Descriptive Text Descriptive Text Descriptive Text Descriptive Text Descriptive Text Descriptive Text Descriptive Text Descriptive Text Descriptive Text",
        img: ["https://cf2.s3.souqcdn.com/item/2020/08/09/13/16/39/34/9/item_XL_131639349_8713816dedb92.jpg","https://cf2.s3.souqcdn.com/item/2020/08/09/13/16/39/34/9/item_XL_131639349_8713816dedb92.jpg"],
        price: 15700,
        sale : 50,
        conadition : 'New',
        brand : "DELL",
        rate: "50%",
        left : 10,
    },
    {
        id : 3,
        title : "Prodect Name",
        description : "Descriptive Text Descriptive Text Descriptive Text Descriptive Text Descriptive Text Descriptive Text Descriptive Text Descriptive Text Descriptive Text Descriptive Text",
        img: ["https://cf2.s3.souqcdn.com/item/2020/08/09/13/16/39/34/9/item_XL_131639349_8713816dedb92.jpg","https://cf2.s3.souqcdn.com/item/2020/08/09/13/16/39/34/9/item_XL_131639349_8713816dedb92.jpg"],
        price: 15700,
        sale : 50,
        conadition : 'New',
        brand : "DELL",
        rate: "50%",
        left : 1000,
    },
    {
        id      : 4,
        title   : "Prodect Name",
        description : "Descriptive Text Descriptive Text Descriptive Text Descriptive Text Descriptive Text Descriptive Text Descriptive Text Descriptive Text Descriptive Text Descriptive Text",
        img     : ["https://cf2.s3.souqcdn.com/item/2020/08/09/13/16/39/34/9/item_XL_131639349_8713816dedb92.jpg","https://cf2.s3.souqcdn.com/item/2020/08/09/13/16/39/34/9/item_XL_131639349_8713816dedb92.jpg"],
        price   : 15700,
        sale    : 50,
        color   : ["red",],
        conadition : 'New',
        brand : "DELL",
        features    : ["faster"],
        rate: "50%",
    },
    {
        id : 5,
        title : "Prodect Name",
        description : "Descriptive Text Descriptive Text Descriptive Text Descriptive Text Descriptive Text Descriptive Text Descriptive Text Descriptive Text Descriptive Text Descriptive Text",
        img: ["https://cf2.s3.souqcdn.com/item/2020/08/09/13/16/39/34/9/item_XL_131639349_8713816dedb92.jpg","https://cf2.s3.souqcdn.com/item/2020/08/09/13/16/39/34/9/item_XL_131639349_8713816dedb92.jpg"],
        price: 15700,
        sale : 50,
        conadition : 'New',
        brand : "DELL",
        rate: "50%",
        left : 2,
    },
    {
        id : 6,
        title : "Prodect Name",
        description : "Descriptive Text Descriptive Text Descriptive Text Descriptive Text Descriptive Text Descriptive Text Descriptive Text Descriptive Text Descriptive Text Descriptive Text",
        img: ["https://cf2.s3.souqcdn.com/item/2020/08/09/13/16/39/34/9/item_XL_131639349_8713816dedb92.jpg","https://cf2.s3.souqcdn.com/item/2020/08/09/13/16/39/34/9/item_XL_131639349_8713816dedb92.jpg"],
        price: 15700,
        sale : 50,
        conadition : 'New',
        brand : "Hp",
        rate: "50%",
        left : 16,
    },
    {
        id : 7,
        title : "Prodect Name",
        description : "Descriptive Text Descriptive Text Descriptive Text Descriptive Text Descriptive Text Descriptive Text Descriptive Text Descriptive Text Descriptive Text Descriptive Text",
        img: ["https://cf2.s3.souqcdn.com/item/2020/08/09/13/16/39/34/9/item_XL_131639349_8713816dedb92.jpg","https://cf2.s3.souqcdn.com/item/2020/08/09/13/16/39/34/9/item_XL_131639349_8713816dedb92.jpg"],
        price: 15700,
        sale : 50,
        conadition : 'New',
        brand : "DELL",
        rate: "50%",
        left : 146,
    },
    {
        id : 8,
        title : "Prodect Name",
        description : "Descriptive Text Descriptive Text Descriptive Text Descriptive Text Descriptive Text Descriptive Text Descriptive Text Descriptive Text Descriptive Text Descriptive Text",
        img: ["https://cf2.s3.souqcdn.com/item/2020/08/09/13/16/39/34/9/item_XL_131639349_8713816dedb92.jpg","https://cf2.s3.souqcdn.com/item/2020/08/09/13/16/39/34/9/item_XL_131639349_8713816dedb92.jpg"],
        price: 15700,
        sale : 50,
        conadition : 'New',
        brand : "DELL",
        rate: "50%",
        left : 6,
    },
];


export const products = (state = ProductItems, action) => {
    return state
}