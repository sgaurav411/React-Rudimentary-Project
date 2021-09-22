import React,{useState} from "react";
import details from "./user-data";
import './App.css';
import Shop from "./Tile";
import { Component } from "react";
import {BrowserRouter,Switch, Route} from 'react-router-dom';
import displayCart from "./DisplayCartSummary";
import {Link} from 'react-router-dom';
import HowManyInTheCart from "./HowManyInTheCart";
import currentTotal from "./calculateTotal";

function App()
{
  return (
    <BrowserRouter>
      <div>
        <div className="HEADING">
          <h1>DEMO E-Commerce</h1>
        </div>
        <Route path="/" exact component={Shop}/>
        <Route path="/"  component={currentTotal}/>
        <Route path="/summary" component={displayCart} />
      </div>
    </BrowserRouter>
  )
};


export default App;
