import React, { useState, useEffect } from "react";
import { Component } from "react";
import {connect} from 'react-redux';


const displayCount=(params)=>{

    const checkOutCart=params.params;

    let totalItems=0;

    checkOutCart.forEach(element => {
        totalItems+=element.active;
    });

    return (<div>
        <h1> Demo E-Commerce </h1>
        <p>Total Items in the Cart : {totalItems}</p>
    </div>);
}


const mapStateToProps = state =>{
    return {
        params:[...state.shop.cart]
    }
}

export default connect(mapStateToProps)(displayCount);