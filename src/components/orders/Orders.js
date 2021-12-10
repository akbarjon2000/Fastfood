import React from 'react'
import OrderNav from "./order nav/OrderNav"
import "./orders.css"
const Orders = () => {
    return (
        <div style={{ display: "flex", flexDirection: 'column', overflow: "hidden !important" }}>
            <OrderNav />
        </div>
    )
}
export default Orders;
