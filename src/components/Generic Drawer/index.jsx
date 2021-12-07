import React from 'react'
import { Close, Container, Drawer } from './style';

const Index = ({ children, open, width, onClose, item }) => {

    return (
        <div style={{ overFlow: "hidden" }}>
            <Container open={open} >
            </Container>
            <Drawer open={open} width={width} >
                <Close open={open} onClick={onClose}>X</Close>
                {children}
            </Drawer>
        </div>
    )
}
export default Index;
