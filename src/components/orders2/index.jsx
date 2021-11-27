import React, { useState } from 'react'
import { Container } from './style'
import OrderNav from './order nav/OrderNav'
import Cards from "./cards"
const Index = () => {
    return (
        <Container>
            <div>
                <OrderNav />
                <Cards />
            </div>
        </Container>
    )
}
export default Index;