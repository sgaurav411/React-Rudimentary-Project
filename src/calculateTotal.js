import React, { useState, useEffect } from "react";
import details from "./user-data.js";
import { BrowserRouter,Switch, Route } from "react-router-dom";
import Cart from "./DisplayCartSummary.js";
import {createStore} from 'redux';
import {Link} from 'react-router-dom';
import { connect } from "react-redux";
import {useDispatch ,useSelecto} from "react-redux";
import {addThistocart,removeThisFromCart} from './redux/Shopping/shopping-reducers';
import store from "./redux/store.js";
import {Component} from "react";

class currentTotal extends React.Component{

    constructor(props){
        super(props);
        this.doTheMath=this.doTheMath.bind(this);
    }
       
    doTheMath() {
        let total = 0;
        this.props.inTheCart.forEach(element => {
            total += element.active * element.price;
            console.log(element);
        });
        return (<div>Total : {total}</div>);
    }

    render(){
        console.log("IN TOTAL:  ");
        console.log(this.props);       

        return (this.doTheMath());
    }
}

const mapStateToProps = state => {
    return {
        inTheCart: [...state.shop.cart]
    }
}

// export default currentTotal;

export default connect(mapStateToProps)(currentTotal);