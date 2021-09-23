import * as actionTypes from './shopping-types';
import {INITIAL_STATE} from './shopping-selectors.js'
import Axios from "axios";


const shopReducer = (state,action) =>{
    console.log("IN THE SHOP REDUCER, THE CURRENT STATE IS");
    switch (action.type) {
        case actionTypes.ADD_TO_CART:
            console.log("ADDING TO CART ");
            // console.log(action.payload.obj);

            let present_cart = state.cart;

            for (let i = 0; i < present_cart.length; i++) {
                if (present_cart[i].id === action.payload.obj.id) {
                    present_cart[i].quantity = present_cart[i].quantity + 1;
                    console.log(present_cart);
                    return { ...state, cart: present_cart };
                }
            }

            present_cart.push(action.payload.obj);
            action.payload.obj.quantity = 1;
            console.log(present_cart);

            return { ...state, cart: present_cart };


        case actionTypes.REMOVER_FROM_CART:

            let current_cart = state.cart;

            current_cart = current_cart.filter(el => {
                if (el.id === action.payload.id) {
                    if (el.quantity > 1) {
                        el.quantity -= 1;
                        return el;
                    }
                }
                else
                    return el;
            });

            return { ...state, cart: current_cart };

        default:
            return INITIAL_STATE;
    }
}

export default shopReducer;
