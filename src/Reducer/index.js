import {combineReducers} from 'redux';
import firebase from '../Firebase/config';

import "../Actions";


import {cart} from './ChartShopping'
import {products} from './Products';

// Section Data
const section_api = [
    {
        id: 1,
        name: "Electronics",
        categories : ["Example", "Example", "Example", "Example", "Example",]
    },
    {
        id: 2,
        name: "example",
        categories : ["Example", "Example", "Example", "Example", "Example",]
    }
];
const sections = (state = section_api, action) => {
    return state
}


const RootReducer = combineReducers(
    {
        cart,
        sections,
        products,
        firebase  : firebase.firestore(),
    }
);

export default RootReducer;