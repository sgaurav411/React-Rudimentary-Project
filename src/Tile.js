import React, { useState, useEffect, Component } from "react";
import details from "./user-data.js";
import { BrowserRouter,Switch, Route } from "react-router-dom";
import Cart from "./DisplayCartSummary.js";
import {createStore} from 'redux';
import {Link} from 'react-router-dom';
import { connect } from "react-redux";
import {useDispatch ,useSelecto} from "react-redux";
import {addThistocart,removeThisFromCart} from './redux/Shopping/shopping-actions';
import store from "./redux/store.js";
import currentTotal from "./calculateTotal";


const Shop = (items,cart_contents) => {

     const dispatch=useDispatch();
     console.log('items');
     console.log(items);
     cart_contents=items.cart_contents;
     items=items.items;
     console.log("ITEMS AND CART :")
     console.log(items);
     console.log("CART :::::::");

     console.log(cart_contents);
     
     const whichButton = (el) => {
          console.log('IN WHICH BUTTON');
          var flag=false;
          cart_contents.forEach(element => {
               flag=flag || (el.id === element.id && element.active > 0);
          });

          if(flag)
          {
               return cart_contents.map(element => {
                    if (el.id === element.id && element.active > 0) {
                         console.log('FOUND ID ');
                         return (<div className="ButttonCART">
                              <button onClick={() => store.dispatch(addThistocart(el.id))
                              }>+</button>
                              <text>{el.active}</text>
                              <button onClick={() => store.dispatch(removeThisFromCart(el.id))}>-</button>
                         </div>);
                    }
                    if(!flag)
                    {
                         return (<div className="ButtonCART">
                              <button onClick={() => {
                                   store.dispatch(addThistocart(el.id));
                              }}>ADD TO CART</button>
                         </div>);
                    }
               });
          }

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
               
               <div>
                    <currentTotal/>
               </div>
               
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
          items:[...state.shop.product],
          cart_contents:[...state.shop.cart]
     }
}

export default connect(mapStateToProps)(Shop);
