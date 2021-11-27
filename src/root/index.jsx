import React from 'react'
import { Container, Wrapper } from './style';
import { BrowserRouter as Router, NavLink, Routes, Route, } from "react-router-dom"
import { sidebar } from "../utils/sidebar"

// import Sidebar from '../components/Sidebar';
import Test from '../components/orders/order workplace/test';
import OrderBody from "../components/orders/order workplace"
import Card from '../components/orders2/cards';
import Orders2 from "../components/orders2";
//Contexts:
import { OrdersContex } from '../context/OrdersContex';

export const Root = () => {
    return (
        <Container>
            <Router>
                <OrdersContex>
                    <Orders2 />
                    <Routes>
                        {
                            sidebar.map(({ id, pathname, component: Element }) => (
                                <Route key={id} path={pathname} element={<Element />} />
                            ))
                        }
                        <Route path="*" element={<h1>404 Not Found</h1>} />
                    </Routes>
                </OrdersContex>
            </Router>
        </Container>
    )
}
export default Root;