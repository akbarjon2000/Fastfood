import React from 'react'
import { Container } from './style';
import { BrowserRouter as Router, Routes, Route, } from "react-router-dom"
import { sidebar } from "../utils/sidebar"
import Sidebar from '../components/Sidebar';

//Contexts:
import { OrdersContex } from '../context/OrdersContex';
import ProductsContext from "../context/ProductsContext";
import CategoryContext from '../context/CategoryContext';
import BranchContex from '../context/branchContex';
import { CustomersContext } from '../context/CustomersContext';
import CatalogContex from '../context/catalogContext';


export const Root = () => {
    return (
        <Container>
            <Router>
                <CustomersContext>
                    <BranchContex>
                        <CategoryContext>
                            <ProductsContext>
                                <OrdersContex>
                                    <CatalogContex>
                                        <Sidebar />
                                        <Routes>
                                            {
                                                sidebar.map(({ id, pathname, component: Element }) => (
                                                    <Route key={id} path={pathname} element={<Element />} />
                                                ))
                                            }
                                            <Route path="*" element={<h1>404 Not Found</h1>} />
                                        </Routes>
                                    </CatalogContex>
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