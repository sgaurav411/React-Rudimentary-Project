import React, { useState, useEffect } from "react";
import { Component } from "react";
import {connect} from 'react-redux';


const displayCart=(params)=>{

    // console.log(params.location.props);

    // const checkOutCart=params.location.props;
    console.log(params);
    // console.log(params.location.props);

    const checkOutCart=params.params;
    console.log(checkOutCart);

    let tot=0;
    return (<div className="CARTLOOKSLIKE">
        <h1>Current Cart Contents</h1>
        {checkOutCart.map((el) => (
            <div className="CheckOut">
                <h3>Item description : {el.description}</h3>
                <h3>Contribution : {el.active}*{el.price} = {el.active * el.price}</h3>
            </div>
        ))
        }
    </div>)
}

const mapStateToProps = state =>{
    return {
        params:state.shop.cart
    }
}

export default connect(mapStateToProps)(displayCart);