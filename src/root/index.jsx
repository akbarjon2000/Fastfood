import React from 'react'
import { Container, Wrapper } from './style';
import { BrowserRouter as Router, NavLink, Routes, Route, } from "react-router-dom"
import { sidebar } from "../utils/sidebar"
import Sidebar from '../components/Sidebar';
import Products from '../components/products/Products';

export const Root = () => {
    return (
        <Container>
            <Router>
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
            </Router>
        </Container>
    )
}
export default Root;