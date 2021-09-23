import React, { useState, useEffect } from "react";
import {Link} from 'react-router-dom';
import { connect } from "react-redux";


class currentTotal extends React.Component{

    constructor(props){
        super(props);
        this.doTheMath=this.doTheMath.bind(this);
    }
       
    doTheMath() {
        let total = 0;
        this.props.inTheCart.forEach(element => {
            total += element.active * element.price;
            // console.log(element);
        });
        return (<div>Total : {total}</div>);
    }

    render(){
        // console.log("IN TOTAL:  ");
        // console.log(this.props);       

        return (this.doTheMath());
    }
}

const mapStateToProps = state => {
    return {
        inTheCart: [...state.shop.cart]
    }
}


export default connect(mapStateToProps)(currentTotal);