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
import Axios from "axios";
import axios from "axios";
import CurrentTotal from "./calculateTotal";

const Shop = (items,cart_contents) => {

     const dispatch=useDispatch();

     cart_contents=items.cart_contents;
     items=items.items;
 

     const [listOfItems, setlistOfItems] = useState([]);

     useEffect(async () => {
          const result = await axios(
               'http://localhost:3001/getProducts',
          );
          setlistOfItems(result.data);
     }, []);

     
     const whichButton = (el) => {
          
          // ButtonDecider({el,cart_contents});
          var flag=false;
          cart_contents.forEach(element => {
               flag=flag || (el.id === element.id && element.quantity > 0);
          });

          if(flag)
          {
               return cart_contents.map(element => {
                    if (el.id === element.id && element.quantity > 0) {
                        
                         return (<div className="ButttonCART">
                              <button onClick={() => { store.dispatch(addThistocart(el)); }
                              }>+</button>
                              <a>{el.quantity}</a>
                              <button onClick={() => {store.dispatch(removeThisFromCart(el.id));
                              }}>-</button>
                         </div>);
                    }
                    if(!flag)
                    {
                         return (<div className="ButtonCART">
                              <button onClick={() => {
                                   store.dispatch(addThistocart(el));
                              }}>ADD TO CART</button>
                         </div>);
                    }
               });
          }

          return (<div className="ButtonCART">
               <button onClick={() => {store.dispatch(addThistocart(el));
              }}>ADD TO CART</button>
          </div>);
     }

     const whatIsTotal =() =>{

          let tot=0;
          cart_contents.forEach(element => {
               tot+=element.quantity*element.price;
          });

          return <div>TOTAL :  {tot} </div>
     }

     return (
          <div >
               <div className="PROD">
                    {listOfItems.map((el) => (
                         <div className="Box" key={el.id}>
                              <text>${el.price}</text>
                              <img src={el.imglink} width="300px" height="200px" />
                              {whichButton(el)}
                         </div>
                    ))}
               </div>
               
               <div className="amountsTo">
                    {whatIsTotal()}
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
