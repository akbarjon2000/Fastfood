import React, { Component } from 'react'
import OrderNav from "./order nav/OrderNav"
import OrderBody from './order workplace'
import "./orders.css"
const Orders = () => {
    return (
        <div style={{ display: "flex", flexDirection: 'column' }}>
            <OrderNav />
            <OrderBody />
        </div>
    )
}
export default Orders;
