import React, { createContext, useState } from 'react'
import { obj } from '../utils/notifyObj'

export const MyCatalogContext = createContext();

const CatalogContex = ({ children }) => {
    const [data, setData] = useState(obj);
    return (
        <MyCatalogContext.Provider value={[data, setData]}>
            {children}
        </MyCatalogContext.Provider>
    )
}
export default CatalogContex;