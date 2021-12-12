import React from 'react'
import CustomersNav from "./CustomersNav/CustomersNav"
import { Container } from "./style"
import { Body } from "./body"
const Index = () => {
    return (
        <Container>
            <div>
                <CustomersNav />
                <Body />
            </div>
        </Container>
    )
}
export default Index;