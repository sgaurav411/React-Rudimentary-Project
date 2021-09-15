import * as actionTypes from './shopping-types';

export const addThistocart=(itemId)=>{
    return {
        type:actionTypes.ADD_TO_CART,
        payload:{
            id:itemId
        }
    };
};

export const removeThisFromCart = (itemId)=>{
    return {
        type:actionTypes.REMOVER_FROM_CART,
        payload:{
            id:itemId
        }
    };
};