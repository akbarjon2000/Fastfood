import React from 'react'
import { Container } from './style';
import { BrowserRouter as Router, Routes, Route, } from "react-router-dom"
import { sidebar } from "../utils/sidebar"
import Sidebar from '../components/Sidebar';
import Location from "../components/branches/location"
//Contexts:
import { OrdersContex } from '../context/OrdersContex';
import ProductsContext from "../context/ProductsContext";
import CategoryContext from '../context/CategoryContext';
import BranchContex from '../context/branchContex';
import { CustomersContext } from '../context/CustomersContext';

export const Root = () => {
    return (
        <Container>
            <Router>
                <CustomersContext>
                    <BranchContex>
                        <CategoryContext>
                            <ProductsContext>
                                <OrdersContex>
                                    <Location></Location>
                                    {/* <Sidebar />
                                    <Routes>
                                        {
                                            sidebar.map(({ id, pathname, component: Element }) => (
                                                <Route key={id} path={pathname} element={<Element />} />
                                            ))
                                        }
                                        <Route path="*" element={<h1>404 Not Found</h1>} />
                                    </Routes> */}
                                </OrdersContex>
                            </ProductsContext>
                        </CategoryContext>
                    </BranchContex>
                </CustomersContext>
            </Router>
        </Container>
    )
}
export default Root;