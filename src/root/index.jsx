import React from 'react'
import { Container } from './style';
import { BrowserRouter as Router, Routes, Route, } from "react-router-dom"
import { sidebar } from "../utils/sidebar"
import Products from '../components/products/Products';
import Sidebar from '../components/Sidebar';

//Contexts:
import { OrdersContex } from '../context/OrdersContex';
import ProductsContext from "../context/ProductsContext"
export const Root = () => {
    return (
        <Container>
            <Router>
                <ProductsContext>

                    <OrdersContex>
                        <Sidebar />
                        <Routes>
                            {
                                sidebar.map(({ id, pathname, component: Element }) => (
                                    <Route key={id} path={pathname} element={<Element />} />
                                ))
                            }
                            <Route path="*" element={<h1>404 Not Found</h1>} />
                        </Routes>
                    </OrdersContex>
                </ProductsContext>
            </Router>
        </Container>
    )
}
export default Root;