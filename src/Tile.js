import React, { useState, useEffect } from "react";
import details from "./user-data.js";
import { BrowserRouter,Switch, Route } from "react-router-dom";
import Cart from "./DisplayCartSummary.js";
import {createStore} from 'redux';
import {Link} from 'react-router-dom';
import { connect } from "react-redux";

import {addThistocart,removeThisFromCart} from './redux/Shopping/shopping-actions';
import store from "./redux/store.js";

const Shop = (items,cart_contents) => {

    
     const [cartTotal, setCartTotal] = useState(0);

     // const [adBut,cartBut]=useState(<button>DUMMY BUTTON</button>)
     // const items = details;
     
     console.log(items);
     cart_contents=items.cart_contents;
     items=items.items;
     console.log("ITEMS AND CART :")
     console.log(items);
     console.log("CART :::::::");

     console.log(cart_contents);
     const [cart, setCart] = useState(cart_contents);
     // const store = createStore(reducer);

     // const [whatwehave, setwhatwehave] = useState(details);
     // const whatwehave=details;

     useEffect(() => {
          total();
     }, [cart]);

     // const total = (ind) => {
     //      let totalVal = 0;
     //      // console.log(cart);
     //      for (let i = 0; i < cart.length; i++) {
     //           totalVal += cart[i].price*cart[i].active;
     //      }
     //      setCartTotal(totalVal);
     //      // whichTypeOfButton(ind);
     // };cgit

     const total =()=>{
          let totalVal=0;
          console.log("IN TOTAL FUNCTION");
          console.log(cart);
          cart.forEach(element => {
               totalVal+=element.active*element.price;
          });
          setCartTotal(totalVal);
     }

     const addToCart = (el) => {
          let current_cart = cart;
          for (let i = 0; i < current_cart.length; i++) {
               if (current_cart[i].id === el.id) {
                    current_cart[i].active = current_cart[i].active + 1;
                    // console.log(current_cart);
                    setCart([...current_cart]);
                    return;

               }
          }

          el.active=1;
          setCart([...cart, el]);
          // https://www.1337xx.to/torrent/3255829/UDEMY-MODERN-REACT-WITH-REDUX-FTU/
          // // // https://www.1337xx.to/torrent/4859774/Udemy-React-The-Complete-Guide-incl-Hooks-React-Router-Redux/
          // https://www.1337xx.to/torrent/3905024/Udemy-Complete-React-Developer-in-2019-w-Redux-Hooks-GraphQL-FTU/
          // https://www.1337xx.to/torrent/3814339/Udemy-React-The-Complete-Guide-incl-Hooks-React-Router-Redux-FTU/
          // https://www.1337xx.to/torrent/3255829/UDEMY-MODERN-REACT-WITH-REDUX-FTU/
          // https://www.1337xx.to/torrent/4859774/Udemy-React-The-Complete-Guide-incl-Hooks-React-Router-Redux/
          // https://www.1337xx.to/torrent/3581160/UDEMY-React-The-Complete-Guide-incl-Hooks-React-Router-Redux-FTU/

     };

     const removeFromCart = (el) => {
          let current_cart = cart;

          // store.dispatch(remElement(el));
          // console.log("IN THE REMOVE CART");
          // console.log(cart);
          // console.log("loop begins");

          for (let i = 0; i < current_cart.length; i++)
          {
               if (current_cart[i].id === el.id) {
                    current_cart[i].active = Math.max(0, current_cart[i].active - 1);
                    console.log(current_cart);
                    setCart([...current_cart]);
                    return;
               }
          }
     }

     const whichButton = (el) => {//USE FUNCTIONAL PROGRAMMING- foreach
          // for (let i = 0; i < cart.length; i++) 
          // {
          //      if (el.id === cart[i].id && cart[i].active>0) 
          //      {
          //           return (<div className="ButttonCART">
          //                <button onClick={() => {store.dispatch(addThistocart(el.id));
          //                setCart([...cart_contents]);}}>+</button>
          //                <text>{el.active}</text>
          //                <button onClick={() => {store.dispatch(removeThisFromCart(el.id));setCart([...cart_contents]);}}>-</button>
          //           </div>);
          //      }
          // }
          console.log('IN WHICH BUTTON');
          console.log(cart_contents);
          cart_contents.forEach(element => {
               if (el.id === element.id && element.active>0) 
               {
                    return (<div className="ButttonCART">
                         <button onClick={() => {store.dispatch(addThistocart(el.id));
                        }}>+</button>
                         <text>{el.active}</text>
                         <button onClick={() => {store.dispatch(removeThisFromCart(el.id));}}>-</button>
                    </div>);
               }
          });
          return (<div className="ButtonCART">
               <button onClick={() => {store.dispatch(addThistocart(el.id));
              }}>ADD TO CART</button>
          </div>);
     }

     return (
          <div >
               <div className="PROD">
                    {items.map((el) => (
                         <div className="Box">
                              <text>${el.price}</text>
                              <img src={el.link} width="300px" height="200px" />
                              <h1>{el.name}</h1>
                              <h2>{el.description}</h2>
                              {whichButton(el)}
                         </div>
                    ))}

               </div>
               <div>Total:{cartTotal}</div>
               
               <div>
                    <Link to={{
                         pathname:"/summary",
                         // props:cart
                         }}>
                         <button type="button">
                              SUMMARIZE
                         </button>
                    </Link>
               </div>
               
          </div>
     );
};

const mapStateToProps=state=>{
     console.log("IN MAP STATE TO PROPS");
     console.log(state);
     return {
          items:state.shop.product,
          cart_contents:state.shop.cart
     }
}

// const mapDispatchToProps = (dispatch) =>{
//      return {
//           addThisToCart: (id) =>dispatch(addThistocart(id)),
//           removeThisFromCart : (id)=>dispatch(removeThisFromCart(id))
//      };
// };

export default connect(mapStateToProps)(Shop);
