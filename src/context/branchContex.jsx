import React, { createContext, useState } from 'react'
import branchObj from '../utils/branchObj'

export const MyBranchContext = createContext();

const BranchContex = ({ children }) => {
    const [data, setData] = useState(branchObj);
    return (
        <MyBranchContext.Provider value={[data, setData]}>
            {children}
        </MyBranchContext.Provider>
    )
}
export default BranchContex;