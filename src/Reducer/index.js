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
        title : "Labtop Dell Insprion 2020 hp honer",
        img: ["https://cf2.s3.souqcdn.com/item/2020/08/09/13/16/39/34/9/item_XL_131639349_8713816dedb92.jpg","https://cf2.s3.souqcdn.com/item/2020/08/09/13/16/39/34/9/item_XL_131639349_8713816dedb92.jpg"],
        rate: "50%",
        price: 15700,
    },
    {
        id : 2,
        title : "Labtop Dell Insprion 2020 hp honer",
        img: ["https://cf2.s3.souqcdn.com/item/2020/08/09/13/16/39/34/9/item_XL_131639349_8713816dedb92.jpg","https://cf2.s3.souqcdn.com/item/2020/08/09/13/16/39/34/9/item_XL_131639349_8713816dedb92.jpg"],
        rate: "50%",
        price: 3035,
    },
    {
        id : 3,
        title : "Labtop Dell Insprion 2020 hp honer",
        img: ["https://cf2.s3.souqcdn.com/item/2020/08/09/13/16/39/34/9/item_XL_131639349_8713816dedb92.jpg","https://cf2.s3.souqcdn.com/item/2020/08/09/13/16/39/34/9/item_XL_131639349_8713816dedb92.jpg"],
        rate: "50%",
        price: 7605,
    },
    {
        id : 4,
        title : "Labtop Dell Insprion 2020 hp honer",
        img: ["https://cf2.s3.souqcdn.com/item/2020/08/09/13/16/39/34/9/item_XL_131639349_8713816dedb92.jpg","https://cf2.s3.souqcdn.com/item/2020/08/09/13/16/39/34/9/item_XL_131639349_8713816dedb92.jpg"],
        rate: "50%",
        price: 834,
    },
    {
        id : 5,
        title : "Labtop Dell Insprion 2020 hp honer",
        img: ["https://cf2.s3.souqcdn.com/item/2020/08/09/13/16/39/34/9/item_XL_131639349_8713816dedb92.jpg","https://cf2.s3.souqcdn.com/item/2020/08/09/13/16/39/34/9/item_XL_131639349_8713816dedb92.jpg"],
        rate: "50%",
        price: 546,
    },
    {
        id : 6,
        title : "Labtop Dell Insprion 2020 hp honer",
        img: ["https://cf2.s3.souqcdn.com/item/2020/08/09/13/16/39/34/9/item_XL_131639349_8713816dedb92.jpg","https://cf2.s3.souqcdn.com/item/2020/08/09/13/16/39/34/9/item_XL_131639349_8713816dedb92.jpg"],
        rate: "50%",
        price: 10000,
    },
    {
        id : 7,
        title : "Labtop Dell Insprion 2020 hp honer",
        img: ["https://cf2.s3.souqcdn.com/item/2020/08/09/13/16/39/34/9/item_XL_131639349_8713816dedb92.jpg","https://cf2.s3.souqcdn.com/item/2020/08/09/13/16/39/34/9/item_XL_131639349_8713816dedb92.jpg"],
        rate: "50%",
        price: 5894,
    },
    {
        id : 8,
        title : "Labtop Dell Insprion 2020 hp honer",
        img: ["https://cf2.s3.souqcdn.com/item/2020/08/09/13/16/39/34/9/item_XL_131639349_8713816dedb92.jpg","https://cf2.s3.souqcdn.com/item/2020/08/09/13/16/39/34/9/item_XL_131639349_8713816dedb92.jpg"],
        rate: "50%",
        price: 25468,
    },
];


export const products = (state = ProductItems, action) => {
    return state
}