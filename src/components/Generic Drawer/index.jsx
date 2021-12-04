import React, { useState } from 'react'
import { Button, Container } from './style';

const Index = ({ children, open, width, onClose }) => {

    return (
        <Container isOpen={open} width={width}>
            <Button onClick={onClose}>X</Button>

            {children}
        </Container>
    )
}
export default Index;
