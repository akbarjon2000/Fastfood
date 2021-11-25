import React from 'react'
import { Container, Wrapper } from './style';
import { BrowserRouter as Router, NavLink, Routes, Route, } from "react-router-dom"
import { sidebar } from "../utils/sidebar"
import Sidebar from '../components/Sidebar';
import OrdersNav from '../components/orders/OrderNav';

//Contexts:
import { OrdersContex } from '../context/OrdersContex';

export const Root = () => {
    return (
        <Container>
            <Router>
                <OrdersContex>
                    <Sidebar />
                    <Wrapper>
                        <Routes>
                            {
                                sidebar.map(({ id, pathname, component: Element, title }) => (
                                    <Route key={id} path={pathname} element={<Element />} />
                                ))
                            }
                            <Route path="*" element={<h1>404 Not Found</h1>} />
                        </Routes>
                    </Wrapper>
                </OrdersContex>
            </Router>
        </Container>
    )
}
export default Root;