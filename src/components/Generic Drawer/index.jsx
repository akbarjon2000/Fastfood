import React from 'react'
import { Close, Container, Shadow } from './style';

const Index = ({ open, width, onClose, children }) => {
    return (
        <div style={{ overflowY: "scroll" }}>
            <Shadow open={open} width={width}></Shadow>
            <Container open={open} width={width} >
                <Close open={open} onClick={onClose}>X</Close>
                {children}
            </Container>
        </div>
    )
}
export default Index;
