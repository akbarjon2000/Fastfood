import React from 'react'
import { Close, Container, Drawer, Shadow } from './style';
//ICONS:
import { ReactComponent as Clock } from "../../assets/icon/clock.svg"
import { ReactComponent as Remark } from "../../assets/icon/Remark.svg"
import { ReactComponent as User } from "../../assets/icon/user.svg"
import { ReactComponent as X } from "../../assets/icon/x.svg"
import { ReactComponent as Tick } from "../../assets/icon/tick.svg"
const Index = ({ open, width, onClose, item, children }) => {
    return (
        <div style={{ overFlow: "hidden" }}>
            <Shadow open={open} width={width}></Shadow>
            <Container open={open} width={width} >
                <Close open={open} onClick={onClose}>X</Close>
                {children}
            </Container>
        </div>
    )
}
export default Index;
