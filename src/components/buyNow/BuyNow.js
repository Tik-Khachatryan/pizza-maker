import React from "react";import './buyNow.css';export const BuyNow = ({saveData, data, createNotification}) => {    console.log(data)    return(        <div>            <button className={'buyBtn'} onClick={() => {saveData();createNotification('success')}}>Buy Now</button>        </div>    )}