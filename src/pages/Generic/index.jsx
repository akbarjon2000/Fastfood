import React from 'react'
import { Container } from './style';
import { useLocation } from 'react-router-dom';
const Generic = (props) => {
    const location = useLocation();
    return (
        <Container>{location.pathname} coming soon</Container>
    )
}
export default Generic;