import Axios from "axios";
import React, { useState, useEffect } from "react";
import { Component } from "react";
import {connect} from 'react-redux';


const AddingProductToList = () =>{

    // const [productPrice,setProductPrice]=useState('');
    // const [productID,setProductID]=useState('');
    
    // const sendPostRequest = () =>{
    //     console.log(productID);
    //     console.log(productName);
    //     console.log(productPrice);

    //     Axios.post("https://localhost:3001/insert", {
    //         prodId: productID, prodName: productName, prodPrice: productPrice
    //     })
    //         .then(() => {
    //             console.log("POST REQUEST SENT");
    //         })
    //         .catch(()=>{
    //             console.log("UNABLE TO SEND POST REQUEST");
    //         });
    // } // const [productName,setProductName]=useState('');
   

    return (
        <div>
            <div>
                <h1>ADD PRODUCTS TO LIST</h1>
            </div>
            
            <div className ="INPUT FORM">
                {/* <label><h3>PRODUCT NAME</h3></label>
                <input type="text" onChange={(e)=>{
                    setProductName(e.target.value);
                }}></input>

                <label><h3>PRODUCT PRICE</h3></label>
                <input type="text" onChange={(e)=>{
                    setProductPrice(e.target.value);
                }}></input>

                <label><h3>PRODUCT ID</h3></label>
                <input type="text" onChange={(e)=>{
                    setProductID(e.target.value);
                }}></input> */}


                <form action="http://localhost:3001/insert" method="POST">
                    <div class="form-group">
                        <label for="ProductName"><h3>TITLE</h3></label>
                        <input class="form-control" name="title"/>
                    </div>

                    <div class="form-group">
                        <label for="Price"><h3>PRICE</h3></label>
                        <input class="form-control" name="price"/>
                    </div>

                    <div class="form-group">
                        <label for="ID"><h3>ID</h3></label>
                        <input class="form-control" name="ID"/>
                    </div>

                    <div class="form-group">
                        <label for="DESCRIPTION"><h3>QUANTITY</h3></label>
                        <input class="form-control" name="quantity"/>
                    </div>

                    <div class="form-group">
                        <label for="LINK"><h3>IMAGE LINK</h3></label>
                        <input class="form-control" name="imgLink"/>
                    </div>

                    
                    <button class="btn btn-primary"><h1>SUBMIT</h1></button>
                </form>
            </div>

           {/* <div>
               <button onClick={sendPostRequest}>SUBMIT</button>
           </div> */}
        </div>
    );
}

export default AddingProductToList;
