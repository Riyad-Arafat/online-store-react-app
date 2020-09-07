import {ADD_TO_CART, REMOVE_FROM_CART, REMOVE_ALL_CART} from "./AcrionType";

export const add_to_cart = (item) => {
    const action = {
        type : ADD_TO_CART,
        item
    }
    return action;
}

export const remove_from_cart = (item) => {
    const action = {
        type : REMOVE_FROM_CART,
        item
    }
    return action;
}

export const remove_all_cart = () => {
    const action = {
        type : REMOVE_ALL_CART,
    }
    return action;
}