import React, { useState, useEffect, Component } from "react";
import details from "./user-data.js";
import { BrowserRouter,Switch, Route } from "react-router-dom";
import Cart from "./DisplayCartSummary.js";
import {createStore} from 'redux';
import {Link} from 'react-router-dom';
import { connect } from "react-redux";
import {useDispatch ,useSelector} from "react-redux";
import {addThistocart,removeThisFromCart} from './redux/Shopping/shopping-reducers';
import store from "./redux/store.js";
import currentTotal from "./calculateTotal";
import Axios from "axios";
// import { response } from "express";
// import { response } from "express";


const Shop = (items,cart_contents) => {

     const dispatch=useDispatch();
     // console.log('items');
     // console.log(items);
     cart_contents=items.cart_contents;
     items=items.items;
     // console.log("ITEMS AND CART :")
     // console.log(items);
     // console.log("CART :::::::");

     // console.log(cart_contents);
    
     const [listOfItems,setlistOfItems]=useState([]);

     useEffect(()=>{
          console.log("IN USE EFFECT");
          Axios.get("http://localhost:3001/getProducts").then(res=>{
          console.log(res);
          console.log(res.data.product);
          setlistOfItems([...res.data.product]);
     });
     },[]);
     
     
     const whichButton = (el) => {
          // console.log('IN WHICH BUTTON');
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
                              <button onClick={() => {store.dispatch(addThistocart(el.id));
                              // Axios.post("http://localhost:3001/insert", { elementId:el.id,change:1}).then(() => {
                              //      console.log("POST REQUEST");
                              // }).catch(() => {
                              //      console.log("UNABLE TO POST");
                              // });
                              }
                              }>+</button>
                              <text>{el.active}</text>
                              <button onClick={() => {store.dispatch(removeThisFromCart(el.id));
                              Axios.post("http://localhost:3001/insert", { elementId:el.id,change:-1}).then(() => {
                                   console.log("POST REQUEST");
                              }).catch(() => {
                                   console.log("UNABLE TO POST");
                              });
                              }}>-</button>
                         </div>);
                    }
                    if(!flag)
                    {
                         return (<div className="ButtonCART">
                              <button onClick={() => {
                                   store.dispatch(addThistocart(el.id));
                                   // Axios.post("http://localhost:3001/insert", { elementId:el.id,change:+1}).then(() => {
                                   //      console.log("POST REQUEST");
                                   // }).catch(() => {
                                   //      console.log("UNABLE TO POST");

                                   // }
                                   // );
                              }}>ADD TO CART</button>
                         </div>);
                    }
               });
          }

          return (<div className="ButtonCART">
               <button onClick={() => {store.dispatch(addThistocart(el.id));
          
                    // Axios.post("http://localhost:3001/insert", { elementId:el.id,change:1}).then(() => {
                    //      console.log("POST REQUEST");
                    // }).catch(() => {
                    //      console.log("UNABLE TO POST");
                    // });
              }}>ADD TO CART</button>
          </div>);
     }

     return (
          <div >
               <div className="PROD">
                    {listOfItems.map((el) => (
                         <div className="Box" key={el.id}>
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
     // console.log("IN MAP STATE TO PROPS");
     // console.log(state);

     return {
          items:[...state.shop.product],
          cart_contents:[...state.shop.cart]
     }
}

export default connect(mapStateToProps)(Shop);
