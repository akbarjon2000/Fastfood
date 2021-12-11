import React, { createContext, useState } from "react";
import { data } from "../utils/ProductsData";

export const MyContext = createContext();

const Context = ({ children }) => {
    const [mydata, setData] = useState(data)
    return (
        <MyContext.Provider value={[mydata, setData]}>
            {children}
        </MyContext.Provider>
    )
}
export default Context;