import React, { createContext, useState } from 'react'
import { orders } from "../utils/orders"

export const MyCardContext = createContext();

export const OrdersContex = ({ children }) => {
    const [data, setData] = useState(orders);
    return (
        <MyCardContext.Provider value={[data, setData]}>
            {children}
        </MyCardContext.Provider>
    )
}
