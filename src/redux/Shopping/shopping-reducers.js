import * as actionTypes from './shopping-types';


const INTITIAL_STATE={
    product:[{
        id:1,
        name:"Prod 1",
        price:100000,
        link:'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZHVjdHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80',
        description:" HEADPHONES",
        active:0
    },
    {
        id:2,
        name:"Prod 2",
        price:2000,
        link:'https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cHJvZHVjdHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80',
        description:"WATCH",
        active:0
    },
    {
        id:3,
        name:"Prod 3",
        price:3000,
        link:'https://images.unsplash.com/photo-1564466809058-bf4114d55352?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
        description:"CAMERA",
        active:0
    },
    {
        id:4,
        name:"Prod 4",
        price:4000,
        link:'https://petapixel.com/assets/uploads/2017/03/product1.jpeg',
        description:"SHOES",
        active:0
    },
    {
        id:5,
        name:"Prod 5",
        price:5000,
        link:'https://www.gizbot.com/images/2020-09/realme-7_159921061900.jpg',
        description:"PHONE",
        active:0
    },
    {
        id:6,
        name:"Prod 6",
        price:6000,
        link:'https://www.kvstech.com/img/service/product.jpg',
        description:"CUBE",
        active:0
    }],
    cart:[]
    // currentItem:null
};


const shopReducer = (state,action) =>{
    console.log("IN THE SHOP REDUCER, THE CURRENT STATE IS")
    switch(action.type)
    {
        case actionTypes.ADD_TO_CART:
        console.log("ADDING TO CART "+action.payload.id);

        let present_cart = state.cart;
        for (let i = 0; i < present_cart.length; i++) {
             if (present_cart[i].id === action.payload.id) {
                  present_cart[i].active = present_cart[i].active + 1;
                  return {...state,cart:present_cart};
             }
        }
        for(let i=0;i<state.product.length;i++)
        {
            if(state.product[i].id === action.payload.id)
            {
                let obj=state.product[i];
                obj.active=1;
                present_cart.push(obj);
                return {...state,cart:present_cart};
            }
        }
        
        
        case actionTypes.REMOVER_FROM_CART:
            let current_cart = state.cart;
            current_cart=current_cart.filter(el=>{
                if(el.id === action.payload.id)
                {
                    if(el.active>1)
                    {
                        el.active-=1;
                        return el;
                    }
                }
                else  
                    return el;   
            })
            return {...state,cart:current_cart}
        default:
            return INTITIAL_STATE;
    }
}

export default shopReducer;
